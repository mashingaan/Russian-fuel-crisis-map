-- Russia nationwide gasoline quality waiver signal
-- Source: X post by nexta_tv, 2026-06-29 21:56
-- Public map point is the existing nationwide aggregation point

insert into public.fuel_signals (
  observed_at,
  type,
  severity,
  status,
  issue_type,
  title,
  region,
  place,
  lat,
  lng,
  note,
  fuel,
  media_url,
  confidence,
  loss_weight,
  reviewer_note
)
select
  date '2026-06-29',
  'region',
  'serious',
  'approved',
  'unconfirmed_anomaly',
  'Russia: Euro 2 gasoline quality waiver proposed',
  'Russia nationwide',
  'Nationwide fuel policy signal, not a point incident',
  58.5,
  76.0,
  'X report: authorities may allow Euro 2-standard gasoline production for one year to increase supplies by avoiding deeper refining, with potential risk for modern vehicles. Treat as a nationwide policy and fuel-quality signal, not a point incident.',
  'Gasoline quality / Euro 2 waiver',
  'https://x.com/nexta_tv/status/2071669147117756763',
  'Medium: public X report, policy signal pending primary regulatory confirmation.',
  5,
  'Approved as nationwide fuel-quality policy signal from nexta_tv X post, 2026-06-29. Public coordinates use nationwide aggregation point.'
where not exists (
  select 1
  from public.fuel_signals
  where title = 'Russia: Euro 2 gasoline quality waiver proposed'
)
