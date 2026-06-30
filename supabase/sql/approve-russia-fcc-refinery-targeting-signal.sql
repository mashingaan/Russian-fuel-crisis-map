-- Russia nationwide FCC refinery targeting signal
-- Source: X post by ChrisO_wiki, 2026-06-30 10:35
-- Public map point is the nationwide refinery-network context point

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
  'infrastructure',
  'serious',
  'approved',
  'infrastructure_damage',
  'Russia: FCC refinery units targeted as prolonged fuel-risk driver',
  'Russia nationwide',
  'Nationwide refinery network context, rounded',
  58.5,
  76.0,
  'X analysis: Ukraine is reportedly targeting fluid catalytic cracking units at Russian refineries, aiming at complex machinery that Russia may struggle to repair or replace quickly. Treat as strategic refinery-network context, not a point incident.',
  'Refinery FCC units / gasoline output risk',
  'https://x.com/ChrisO_wiki/status/2071860127112593893',
  'Medium: public X analysis with explanatory image, strategic pattern needs facility-level corroboration.',
  6,
  'Approved as nationwide refinery-network vulnerability signal from ChrisO_wiki X post, 2026-06-30. Public coordinates use a rounded national context point.'
where not exists (
  select 1
  from public.fuel_signals
  where title = 'Russia: FCC refinery units targeted as prolonged fuel-risk driver'
)
