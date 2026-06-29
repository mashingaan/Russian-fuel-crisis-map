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

1. `supabase-schema.sql`
2. `supabase-grants-fix.sql`, if anon permissions are missing
3. `supabase-issue-type-migration.sql`, when you want `issue_type` persisted
4. `supabase-video-storage.sql`, when you want direct video upload support

After running the issue type migration, set in `config.js`:

```js
supportsIssueType: true
```

After running the video storage SQL, set:

```js
videoUploadEnabled: true
```

## Moderation

Use `moderation-queries.sql` for common review queries and one-click approval templates.
