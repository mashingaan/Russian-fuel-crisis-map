-- Remove Taganrog signal from the public map.
-- Exact-id update only, so no other signals are touched.

update public.fuel_signals
set
  status = 'rejected',
  reviewer_note = 'Rejected by moderator request: remove Taganrog signal from public map.'
where id = '5b88a21f-46a0-480e-aa38-6a3827eb7dae';

select id, observed_at, status, title, region, place, media_url, reviewer_note
from public.fuel_signals
where id = '5b88a21f-46a0-480e-aa38-6a3827eb7dae';
