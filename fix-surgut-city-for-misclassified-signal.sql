-- Fix the misclassified Oryol row from the Surgut X signal.
-- Keeps the post approved, but moves it to the exact city named in the signal.

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
  reviewer_note = 'Corrected: source signal names Surgut, not Oryol Oblast.'
where media_url = 'https://x.com/Maks_NAFO_FELLA/status/2071088282708889786'
  and (
    title = 'Oryol Oblast gas-station situation worsening'
    or region = 'Oryol Oblast'
    or place = 'Oryol Oblast, rounded'
  );

select id, observed_at, status, title, region, place, media_url
from public.fuel_signals
where media_url = 'https://x.com/Maks_NAFO_FELLA/status/2071088282708889786'
order by created_at desc;
