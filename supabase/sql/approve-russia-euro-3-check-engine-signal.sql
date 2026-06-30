-- Russia nationwide Euro-3 Check Engine vehicle damage signal
-- Source: X post by nexta_tv, 2026-06-30 14:39
-- Public map point is the nationwide fuel-quality context point

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
  date '2026-06-30',
  'region',
  'serious',
  'approved',
  'unconfirmed_anomaly',
  'Russia: Check Engine warnings linked to Euro-3 gasoline',
  'Russia nationwide',
  'Nationwide fuel-quality damage signal, location not verified',
  58.5,
  76.0,
  'X video report: drivers report Check Engine warnings, misfires, knocking, power loss and attempts to dilute low-grade Euro-3 fuel with higher-octane gasoline, with turbocharged and direct-injection engines especially exposed. Treat as nationwide fuel-quality damage context unless station-level locations are later verified.',
  'Fuel quality / Euro-3 Check Engine and misfire reports',
  'https://x.com/nexta_tv/status/2071921504229417131',
  'Medium: public X video source, reports are not tied to a verified station location.',
  5,
  'Approved as nationwide Euro-3 fuel-quality damage signal from nexta_tv X post, 2026-06-30. Public coordinates use a rounded national context point.'
where not exists (
  select 1
  from public.fuel_signals
  where title = 'Russia: Check Engine warnings linked to Euro-3 gasoline'
)
