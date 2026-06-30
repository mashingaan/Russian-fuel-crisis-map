-- Petrozavodsk gas station death human-impact signal
-- Source: X post by nexta_tv, 2026-06-30 17:58
-- Public map point is rounded to the Petrozavodsk city area

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
  'unconfirmed_anomaly',
  'Petrozavodsk: death reported at gas station',
  'Republic of Karelia',
  'Petrozavodsk city area, rounded',
  61.79,
  34.36,
  'X image report: a 75-year-old man died at a gas station in Petrozavodsk after paying for fuel and filling his tank almost to the top, with preliminary reports citing cardiac arrest. Treat as human-impact evidence linked to fuel stress, with exact station address not independently verified.',
  'Gas station human impact / gasoline',
  'https://x.com/nexta_tv/status/2071971527319302295',
  'Medium: public X image source, station-level address not verified.',
  5,
  'Approved as Petrozavodsk gas station human-impact signal from nexta_tv X post, 2026-06-30. Public coordinates rounded.'
where not exists (
  select 1
  from public.fuel_signals
  where title = 'Petrozavodsk: death reported at gas station'
)
