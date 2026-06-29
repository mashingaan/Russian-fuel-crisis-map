update public.fuel_signals
set
  status = 'rejected',
  reviewer_note = 'Rejected: the provided video/source is for Surgut, not Oryol Oblast.'
where title = 'Oryol Oblast gas-station situation worsening'
  and media_url = 'https://x.com/Maks_NAFO_FELLA/status/2071088282708889786';

select id, title, status, region, place, media_url
from public.fuel_signals
where media_url = 'https://x.com/Maks_NAFO_FELLA/status/2071088282708889786'
order by created_at desc;
