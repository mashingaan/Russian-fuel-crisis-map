-- Atamanovka 28-hour fuel queue signal
-- Source: X / bayraktar_1love, 2026-07-02
-- Public map point is rounded to Atamanovka settlement area

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
  date '2026-07-02',
  'station',
  'critical',
  'approved',
  'long_queues',
  'Atamanovka: 28-hour wait and 4.3 km fuel queue reported',
  'Zabaykalsky Krai',
  'Atamanovka fuel station area, rounded',
  51.93,
  113.63,
  'X video report: a driver in Atamanovka leaves a gas station after finally refueling following a 28-hour wait, then drives past a reported 4.3 km queue for the same station. Public coordinate is rounded to the settlement because the exact station is not independently verified.',
  'Gasoline queue / 28-hour wait',
  'https://x.com/bayraktar_1love/status/2072448471823499770',
  'media/atamanovka-28-hour-4km-fuel-queue-bayraktar-2072448471823499770.mp4',
  'Medium: public X video source, settlement location confirmed from open sources, exact station not independently verified.',
  6,
  'Approved as Atamanovka long fuel-queue signal from bayraktar_1love X video, 2026-07-02. Public coordinates rounded.'
where not exists (
  select 1
  from public.fuel_signals
  where title = 'Atamanovka: 28-hour wait and 4.3 km fuel queue reported'
)
