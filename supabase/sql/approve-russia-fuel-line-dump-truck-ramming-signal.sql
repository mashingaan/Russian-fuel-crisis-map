-- Russia nationwide fuel-line dump truck ramming social impact signal
-- Source: X post by VictorKvert2008, 2026-06-30 16:40
-- Public map point is the nationwide fuel-queue social impact context point

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
  'Russia: dump truck rams cars after fuel-line wait',
  'Russia nationwide',
  'Nationwide fuel-queue social impact, location not verified',
  58.5,
  76.0,
  'X video report: an enraged dump truck driver, reportedly fed up after hours in a fuel line, rammed 17 passenger cars. Treat as nationwide fuel-queue social impact unless a specific location is later verified.',
  'Fuel queue social impact',
  'https://x.com/VictorKvert2008/status/2071951957074366536',
  'Medium: public X video source, exact location not verified.',
  4,
  'Approved as nationwide fuel-queue social impact signal from VictorKvert2008 X post, 2026-06-30. Public coordinates use a rounded national context point.'
where not exists (
  select 1
  from public.fuel_signals
  where title = 'Russia: dump truck rams cars after fuel-line wait'
)
