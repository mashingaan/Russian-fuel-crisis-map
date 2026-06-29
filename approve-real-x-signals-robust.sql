-- Robust approval for real X signals collected for the launch.
-- Does not approve TEST rows.

update public.fuel_signals
set
  status = 'approved',
  confidence = 'Verified by moderator: public X video source',
  reviewer_note = coalesce(reviewer_note, 'Approved for public map from launch X signal batch.')
where coalesce(title, '') not ilike 'TEST%'
  and media_url in (
    'https://x.com/Tendar/status/2071293970357895340',
    'https://x.com/LXSummer1/status/2071338652337307974',
    'https://x.com/Maks_NAFO_FELLA/status/2071279694243143812',
    'https://x.com/Maks_NAFO_FELLA/status/2071088282708889786'
  );

select status, count(*) as count
from public.fuel_signals
group by status
order by status;

select id, observed_at, status, title, region, place, media_url
from public.fuel_signals
where media_url in (
  'https://x.com/Tendar/status/2071293970357895340',
  'https://x.com/LXSummer1/status/2071338652337307974',
  'https://x.com/Maks_NAFO_FELLA/status/2071279694243143812',
  'https://x.com/Maks_NAFO_FELLA/status/2071088282708889786'
)
order by observed_at desc, created_at desc;
