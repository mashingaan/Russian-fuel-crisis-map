# Benzup price proxy

This project must not call Benzup directly from `app.js`, because the API key would be public in the browser. Use the Supabase Edge Function in `supabase/functions/benzup-prices` as the server-side proxy.

## What is included

- `supabase/functions/benzup-prices/index.ts`
- CORS handling for the static frontend
- API key forwarding through either an auth header or query parameter
- Basic response normalization into `prices`
- A 5 minute public cache header

## Required Supabase secrets

Set these after Benzup gives access details:

```bash
supabase secrets set BENZUP_PRICE_API_URL="https://BENZUP_PRICE_ENDPOINT"
supabase secrets set BENZUP_API_KEY="YOUR_BENZUP_KEY"
```

Optional, if Benzup expects the key as a query parameter instead of an auth header:

```bash
supabase secrets set BENZUP_API_KEY_PARAM="apiKey"
```

Optional, if Benzup expects a custom auth header:

```bash
supabase secrets set BENZUP_AUTH_HEADER="X-API-Key"
supabase secrets set BENZUP_AUTH_SCHEME=""
```

## Deploy

```bash
supabase functions deploy benzup-prices
```

## Frontend config

After deployment, set this in `config.js`:

```js
fuelDataProviders: {
  priceProxyUrl: "https://YOUR_PROJECT.supabase.co/functions/v1/benzup-prices",
  availabilityProxyUrl: "",
  trafficProxyUrl: "",
}
```

## Test

```bash
curl "https://YOUR_PROJECT.supabase.co/functions/v1/benzup-prices?region=Moscow&fuel=AI-95"
```

The response shape is:

```json
{
  "source": "benzup",
  "count": 1,
  "prices": [
    {
      "stationId": "123",
      "stationName": "Example station",
      "brand": "Example",
      "region": "Moscow",
      "place": "Example address",
      "lat": 55.75,
      "lng": 37.62,
      "fuel": "AI-95",
      "price": 82,
      "currency": "RUB",
      "updatedAt": "2026-07-01T10:00:00Z"
    }
  ]
}
```
