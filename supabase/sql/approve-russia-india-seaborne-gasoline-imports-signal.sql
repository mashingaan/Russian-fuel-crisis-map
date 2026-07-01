-- Russia seaborne gasoline imports from India signal
-- Source: Reuters screenshot via X / bayraktar_1love, 2026-07-01
-- Public map point is rounded to a Black Sea import corridor, not a verified discharge port

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
  'regional_rationing',
  'Russia: seaborne gasoline imports from India reported',
  'Russia fuel import logistics',
  'Russian seaborne import corridor, rounded to Black Sea port area',
  44.72,
  37.77,
  'Reuters screenshot report says Russia has started seaborne gasoline imports from India to tackle shortages, with at least 60,000 metric tons dispatched and another source citing two tankers carrying 30,000 to 40,000 tons each. Treat as macro fuel-supply logistics evidence, not a verified local station incident or verified discharge port.',
  'Seaborne gasoline imports / shortage mitigation',
  'https://x.com/bayraktar_1love/status/2072294656612635088',
  'media/russia-gasoline-imports-from-india-reuters-2026-07-01.jpg',
  'High for Reuters report screenshot, exact discharge port and cargo timing not mapped.',
  6,
  'Approved as macro Russia fuel-import logistics signal from Reuters screenshot, 2026-07-01. Public coordinates rounded to Black Sea import corridor.'
where not exists (
  select 1
  from public.fuel_signals
  where title = 'Russia: seaborne gasoline imports from India reported'
)
