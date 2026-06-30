-- Russia nationwide Euro-3 fuel vehicle breakdown signal
-- Source: X post by Beefeater_Fella, 2026-06-30 12:04
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
  'Russia: car breakdowns reported after lower fuel standard',
  'Russia nationwide',
  'Nationwide fuel-quality damage signal, location not verified',
  58.5,
  76.0,
  'X video report: motorists complain about warning lights, detonation, power loss and failed fuel pumps after refueling with older Euro-3 gasoline at gas stations. Treat as a nationwide fuel-quality damage signal unless station-level locations are later verified.',
  'Fuel quality / Euro-3 vehicle damage and pump failure reports',
  'https://x.com/Beefeater_Fella/status/2071882519767572620',
  'Medium: public X video source, reports are not tied to a verified station location.',
  5,
  'Approved as nationwide fuel-quality damage signal from Beefeater_Fella X post, 2026-06-30. Public coordinates use a rounded national context point.'
where not exists (
  select 1
  from public.fuel_signals
  where title = 'Russia: car breakdowns reported after lower fuel standard'
)
