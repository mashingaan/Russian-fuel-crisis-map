const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
}

type FuelPrice = {
  stationId: string
  stationName: string
  brand: string
  region: string
  place: string
  lat: number | null
  lng: number | null
  fuel: string
  price: number | null
  currency: string
  updatedAt: string
  raw: unknown
}

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=300",
    },
  })
}

function textField(value: unknown, fallback = "") {
  return typeof value === "string" ? value : fallback
}

function numberField(value: unknown) {
  if (typeof value === "number" && Number.isFinite(value)) return value
  if (typeof value === "string") {
    const normalized = Number(value.replace(",", "."))
    if (Number.isFinite(normalized)) return normalized
  }
  return null
}

function pick(record: Record<string, unknown>, keys: string[]) {
  for (const key of keys) {
    if (record[key] !== undefined && record[key] !== null) return record[key]
  }
  return null
}

function normalizeRecord(raw: unknown): FuelPrice | null {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null
  const record = raw as Record<string, unknown>
  const coords = pick(record, ["coords", "coordinates", "location"])
  const coordObject = coords && typeof coords === "object" && !Array.isArray(coords)
    ? coords as Record<string, unknown>
    : {}

  return {
    stationId: textField(pick(record, ["stationId", "station_id", "azs_id", "id"])),
    stationName: textField(pick(record, ["stationName", "station_name", "azs_name", "name"])),
    brand: textField(pick(record, ["brand", "network", "company"])),
    region: textField(pick(record, ["region", "subject", "area"])),
    place: textField(pick(record, ["place", "city", "address"])),
    lat: numberField(pick(record, ["lat", "latitude"]) ?? pick(coordObject, ["lat", "latitude"])),
    lng: numberField(pick(record, ["lng", "lon", "longitude"]) ?? pick(coordObject, ["lng", "lon", "longitude"])),
    fuel: textField(pick(record, ["fuel", "fuelType", "fuel_type", "product", "productName"])),
    price: numberField(pick(record, ["price", "value", "cost"])),
    currency: textField(pick(record, ["currency"]), "RUB"),
    updatedAt: textField(pick(record, ["updatedAt", "updated_at", "date", "timestamp"])),
    raw,
  }
}

function normalizePayload(payload: unknown) {
  const source = payload && typeof payload === "object" && !Array.isArray(payload)
    ? payload as Record<string, unknown>
    : {}
  const candidates = Array.isArray(payload)
    ? payload
    : Array.isArray(source.data)
      ? source.data
      : Array.isArray(source.items)
        ? source.items
        : Array.isArray(source.results)
          ? source.results
          : []

  return candidates
    .map(normalizeRecord)
    .filter((item): item is FuelPrice => Boolean(item))
}

function appendAllowedQuery(target: URL, source: URL) {
  const allowed = ["stationId", "region", "city", "brand", "fuel", "lat", "lng", "radius"]
  for (const key of allowed) {
    const value = source.searchParams.get(key)
    if (value) target.searchParams.set(key, value)
  }
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response(null, { headers: corsHeaders })
  if (request.method !== "GET") return jsonResponse({ error: "Method not allowed" }, 405)

  const apiUrl = Deno.env.get("BENZUP_PRICE_API_URL")
  const apiKey = Deno.env.get("BENZUP_API_KEY")

  if (!apiUrl || !apiKey) {
    return jsonResponse({
      error: "Benzup proxy is not configured",
      requiredSecrets: ["BENZUP_PRICE_API_URL", "BENZUP_API_KEY"],
    }, 503)
  }

  const requestUrl = new URL(request.url)
  const upstreamUrl = new URL(apiUrl)
  appendAllowedQuery(upstreamUrl, requestUrl)

  const keyParam = Deno.env.get("BENZUP_API_KEY_PARAM")
  const authHeader = Deno.env.get("BENZUP_AUTH_HEADER") || "Authorization"
  const authScheme = Deno.env.get("BENZUP_AUTH_SCHEME") || "Bearer"
  const headers = new Headers({ Accept: "application/json" })

  if (keyParam) upstreamUrl.searchParams.set(keyParam, apiKey)
  else headers.set(authHeader, authScheme ? `${authScheme} ${apiKey}` : apiKey)

  const response = await fetch(upstreamUrl, { headers })
  const text = await response.text()

  if (!response.ok) {
    return jsonResponse({
      error: "Benzup upstream request failed",
      status: response.status,
      details: text.slice(0, 500),
    }, 502)
  }

  let payload: unknown
  try {
    payload = JSON.parse(text)
  } catch {
    return jsonResponse({
      error: "Benzup upstream did not return JSON",
      details: text.slice(0, 500),
    }, 502)
  }

  const prices = normalizePayload(payload)
  return jsonResponse({
    source: "benzup",
    count: prices.length,
    prices,
  })
})
