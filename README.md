# Russia Fuel Stress Map

Public OSINT-style map for tracking fuel stress signals across Russia: gas stations, queues, purchase limits, refinery/infrastructure incidents, regional rationing and submitted video reports.

The app is a static frontend backed by Supabase:

- public users submit signals as `pending`
- moderators review and mark signals as `approved`
- only `approved` rows are visible to everyone
- exact public map points can be rounded before submission

## Live Data

Signals are stored in Supabase table `fuel_signals`.

The frontend uses the Supabase anon public key. Do not put a service role key in this repository.

## Problem Types

- `no_gasoline`
- `no_diesel`
- `long_queues`
- `purchase_limits`
- `price_spike`
- `station_closure`
- `regional_rationing`
- `infrastructure_damage`
- `unconfirmed_anomaly`

## Incident Model

The public map should show incident aggregates, not every signal as a separate map point.

- map marker: current severity, signal count, signal classes and place label
- drawer: overview, timeline, evidence and impact tabs
- evidence: videos, X/Telegram/news links and local reports attached to the same incident

The current frontend groups existing `fuel_signals` client-side. `supabase/sql/supabase-incidents-schema.sql` contains the normalized future schema for `incidents` and `incident_signals`.

## Repository Layout

- `index.html`, `app.js`, `styles.css`: public map
- `moderate.html`, `moderate.js`, `moderate.css`: moderator console
- `config.example.js`: template for local Supabase config
- `supabase/sql`: database schema, policies, repair scripts and moderation queries
- `docs/deployment.md`: deployment and Supabase setup notes
- `docs/research`: source-backed research notes

## Local Run

```bash
python -m http.server 8765
```

Open:

```text
http://localhost:8765/
```

## Deploy

This folder can be deployed as a static site on GitHub Pages, Cloudflare Pages, Netlify or Vercel.

For GitHub Pages:

1. Push this folder as a repository.
2. Enable Pages from the `main` branch root.
3. Open the generated `github.io` URL.

## Supabase Setup

Run these files in Supabase SQL Editor:

1. `supabase/sql/supabase-schema.sql`
2. `supabase/sql/supabase-grants-fix.sql`, if anon permissions are missing
3. `supabase/sql/supabase-issue-type-migration.sql`, when you want `issue_type` persisted
4. `supabase/sql/supabase-video-storage.sql`, when you want direct video upload support
5. `supabase/sql/supabase-moderation-auth.sql`, when you want button-based moderation

After running the issue type migration, set in `config.js`:

```js
supportsIssueType: true
```

After running the video storage SQL, set:

```js
videoUploadEnabled: true
```

## Moderation

Preferred workflow:

1. Create or sign in with your moderator email in Supabase Auth.
2. Open `supabase/sql/supabase-moderation-auth.sql`.
3. Replace `YOUR_EMAIL@example.com` with that moderator email.
4. Run the SQL once.
5. In Supabase Authentication URL Configuration, set:
   - Site URL: `https://mashingaan.github.io/Russian-fuel-crisis-map/`
   - Redirect URL: `https://mashingaan.github.io/Russian-fuel-crisis-map/moderate.html`
6. Open `/moderate.html`.
7. Review pending signals, edit wording/location if needed, then approve or reject with buttons.

The moderator console also has `Repair launch rows` for the known launch-data corruption fix. Use it instead of running `supabase/sql/repair-corrupted-public-signals.sql` manually after moderator auth is configured.

Use `supabase/sql/moderation-queries.sql` only for bulk fixes or emergency SQL-level review.
