-- Approve current real X signals collected during setup.
-- This intentionally does not approve TEST rows.

update public.fuel_signals
set
  status = 'approved',
  confidence = 'Verified by moderator: public X video source',
  reviewer_note = 'Approved from Tendar X video, 2026-06-28.'
where media_url = 'https://x.com/Tendar/status/2071293970357895340'
  and title = 'Slavyansk-on-Kuban refinery fire, multiple fires reported';

update public.fuel_signals
set
  status = 'approved',
  confidence = 'Verified by moderator: public X video source',
  reviewer_note = 'Approved as an unusual fuel-access anomaly in Taganrog, 2026-06-29.'
where media_url = 'https://x.com/LXSummer1/status/2071338652337307974'
  and title = 'Taganrog fuel access anomaly at gas station';

update public.fuel_signals
set
  status = 'approved',
  confidence = 'Verified by moderator: public X video source',
  reviewer_note = 'Approved as a gasoline queue signal in Novorossiysk, 2026-06-28.'
where media_url = 'https://x.com/Maks_NAFO_FELLA/status/2071279694243143812'
  and title = 'Novorossiysk gasoline queue';

update public.fuel_signals
set
  status = 'approved',
  confidence = 'Verified by moderator: public X video source',
  reviewer_note = 'Approved as a gasoline availability problem in Surgut, 2026-06-28.'
where media_url = 'https://x.com/Maks_NAFO_FELLA/status/2071088282708889786'
  and title = 'Surgut gasoline availability problem';

update public.fuel_signals
set
  status = 'rejected',
  reviewer_note = 'Rejected: user did not submit an Oryol signal for this source. Source signal is Surgut only.'
where media_url = 'https://x.com/Maks_NAFO_FELLA/status/2071088282708889786'
  and title = 'Oryol Oblast gas-station situation worsening';

-- Optional check after approval:
select id, observed_at, status, title, region, place, media_url
from public.fuel_signals
where status = 'approved'
order by observed_at desc, created_at desc;
