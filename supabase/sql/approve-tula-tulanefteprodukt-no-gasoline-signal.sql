-- Tula Tulanefteprodukt gasoline availability warning signal
-- Source: X / dedzaebal, 2026-07-01
-- Public map point is rounded to Tula city area

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
  date '2026-07-01',
  'region',
  'serious',
  'approved',
  'no_gasoline',
  'Tula: Tulanefteprodukt gasoline shortage warning',
  'Tula Oblast',
  'Tula city area, rounded',
  54.19,
  37.62,
  'X video report references PAO Tulanefteprodukt and claims that gasoline will not be available in Tula. Treat as a regional availability warning, not a verified station-level outage.',
  'Gasoline availability warning',
  'https://x.com/dedzaebal/status/2072277435727442082',
  'media/tula-tulanefteprodukt-no-gasoline-dedzaebal-2072277435727442082.mp4',
  'Medium: public X video source, supplier context and exact station impact need confirmation.',
  5,
  'Approved as Tula gasoline availability warning from X video, 2026-07-01. Public coordinates rounded.'
where not exists (
  select 1
  from public.fuel_signals
  where title = 'Tula: Tulanefteprodukt gasoline shortage warning'
)
