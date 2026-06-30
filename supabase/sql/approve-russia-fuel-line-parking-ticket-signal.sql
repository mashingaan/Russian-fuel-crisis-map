-- Russia nationwide fuel-line parking ticket enforcement signal
-- Source: X post by maria_drutska, 2026-06-30 10:23
-- Public map point is the nationwide queue-enforcement context point

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
  'long_queues',
  'Russia: parking tickets issued to vehicles waiting for fuel',
  'Russia nationwide',
  'Nationwide fuel-queue enforcement signal, location not verified',
  58.5,
  76.0,
  'X video report: vehicles waiting in fuel lines are reportedly being ticketed en masse where queues pass through no-parking zones, adding enforcement pressure around shortages. Treat as a nationwide queue-enforcement signal unless a specific location is later verified.',
  'Fuel queue enforcement / product unspecified',
  'https://x.com/maria_drutska/status/2071857014896996567',
  'Medium: public X video source, exact location not verified.',
  3,
  'Approved as nationwide fuel-queue enforcement signal from maria_drutska X post, 2026-06-30. Public coordinates use a rounded national context point.'
where not exists (
  select 1
  from public.fuel_signals
  where title = 'Russia: parking tickets issued to vehicles waiting for fuel'
)
