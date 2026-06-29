-- Remove the misclassified Oryol row from the Surgut X signal.
-- Keep only the real Surgut row approved.

update public.fuel_signals
set
  status = 'rejected',
  reviewer_note = 'Rejected: user did not submit an Oryol signal for this source. Source signal is Surgut only.'
where media_url = 'https://x.com/Maks_NAFO_FELLA/status/2071088282708889786'
  and (
    title = 'Oryol Oblast gas-station situation worsening'
    or region = 'Oryol Oblast'
    or place = 'Oryol Oblast, rounded'
  );

update public.fuel_signals
set
  status = 'approved',
  title = 'Surgut gasoline availability problem',
  region = 'Khanty-Mansi Autonomous Okrug',
  place = 'Surgut, rounded',
  lat = 61.3,
  lng = 73.4,
  note = 'X video report: Surgut, Khanty-Mansi Autonomous Okrug. Gasoline is reportedly already a problem even there. Treat as gasoline availability anomaly until moderator verifies exact fuel type and station status.',
  fuel = 'Gasoline, availability problem reported',
  confidence = 'Verified by moderator: public X video source',
  reviewer_note = 'Approved as the only public Surgut signal for this source. Misclassified Oryol duplicate rejected.'
where id = '5b542034-9a2f-4c94-ae1c-af8174b4555c';

select id, observed_at, status, title, region, place, media_url
from public.fuel_signals
where media_url = 'https://x.com/Maks_NAFO_FELLA/status/2071088282708889786'
order by created_at desc;
