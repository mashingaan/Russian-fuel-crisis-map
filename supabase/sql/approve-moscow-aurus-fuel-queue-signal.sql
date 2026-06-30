-- Moscow government Aurus fuel queue signal
-- Source: X post by NaSutkiOdessa, 2026-06-30 20:07
-- Public map point is rounded to Moscow city

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
  'station',
  'critical',
  'approved',
  'long_queues',
  'Moscow: government Aurus cars queue for fuel',
  'Moscow / Moscow Oblast',
  'Moscow city, rounded',
  55.78,
  37.64,
  'X video report: government Aurus cars with flashing lights are reportedly waiting in gas-station queues in Moscow. Public coordinate rounded to the city level.',
  'Gasoline / official vehicle queue',
  'https://x.com/NaSutkiOdessa/status/2072004071679013202',
  'Medium: public X video source, city-level location only.',
  5,
  'Approved as Moscow official-vehicle fuel queue signal from NaSutkiOdessa X post, 2026-06-30. Public coordinates rounded.'
where not exists (
  select 1
  from public.fuel_signals
  where title = 'Moscow: government Aurus cars queue for fuel'
)
