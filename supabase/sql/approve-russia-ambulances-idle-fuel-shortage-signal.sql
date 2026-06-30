-- Russia nationwide ambulance fuel-shortage impact signal
-- Source: X post by ChrisO_wiki, 2026-06-30 16:38
-- Public map point is the nationwide emergency-services fuel context point

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
  'critical',
  'approved',
  'regional_rationing',
  'Russia: ambulances reportedly idle due to fuel shortage',
  'Russia nationwide',
  'Nationwide emergency-services fuel impact, location not verified',
  58.5,
  76.0,
  'X video report: a Russian medic says the fuel shortage is causing a crisis for ambulances, with vehicles standing idle despite fuel supposedly being reserved for emergency services. Treat as national emergency-services impact unless a specific location is later verified.',
  'Emergency-services fuel availability',
  'https://x.com/ChrisO_wiki/status/2071951547571855455',
  'Medium: public X video source, exact location not verified.',
  7,
  'Approved as nationwide emergency-services fuel impact signal from ChrisO_wiki X post, 2026-06-30. Public coordinates use a rounded national context point.'
where not exists (
  select 1
  from public.fuel_signals
  where title = 'Russia: ambulances reportedly idle due to fuel shortage'
)
