-- Bashkortostan 30-liter-per-car fuel restriction signal
-- Source: X / Idel.Realii, 2026-06-29
-- Public map point is rounded to the Ufa region

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
  source_url,
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
  'regional_rationing',
  'Bashkortostan: 30-liter fuel limit per vehicle reported',
  'Republic of Bashkortostan',
  'Bashkortostan, rounded to Ufa region',
  54.74,
  55.97,
  'X video report from Idel.Realii describes fuel restrictions in Bashkortostan, including a 30-liter limit per vehicle. Treat as regional purchase-limit signal, not a verified station-level point.',
  'Gasoline / diesel purchase limit',
  'https://x.com/Idel_Realii/status/2071603588728537473',
  'media/bashkortostan-30-liters-per-car-idel-realii-2071603588728537473.mp4',
  'Medium: public X video source, exact station locations not verified.',
  5,
  'Approved as regional Bashkortostan fuel-rationing signal from Idel.Realii video, 2026-06-29. Public coordinates rounded.'
where not exists (
  select 1
  from public.fuel_signals
  where title = 'Bashkortostan: 30-liter fuel limit per vehicle reported'
)
