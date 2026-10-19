# NeuroSage

Native Next.js App Router foundation for NeuroSage — *Be kind to your mind.*

The supplied workspace did not contain the original React/Vite source, README, or assets, so this repository uses the product requirements as its available source of truth. Place the original logo, poster, and book covers under `public/` when they are available.

## Run locally

1. Copy `.env.example` to `.env.local` and replace all secrets.
2. Start MongoDB.
3. Run `npm install`, then `npm run dev`.

Available checks: `npm run typecheck`, `npm run lint`, `npm run build`, and `npm run test`.

## Architecture

App Router pages orchestrate UI; route handlers under `app/api` validate requests; MongoDB models live in `models`; shared auth, database, and validation utilities live in `lib`. Authentication uses HTTP-only access cookies and server-side authorization helpers. Do not place credentials, payment slips, JWTs, or real UPI configuration in source control.

See [CONFIGURE.md](./CONFIGURE.md) for deployment and operational setup.
