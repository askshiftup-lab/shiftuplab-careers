# Careers

Next.js application for ShiftUp Lab.

## Local setup
- Install Node.js 20+ and npm.
- Copy `.env.example` to `.env.local`.
- Set `PLATFORM_API_URL` to the development API URL.
- Run `npm ci`, then `npm run dev`.
- Before release run `npm run lint`, `npm run typecheck`, and `npm run build`.

## Release status
Public pages now read published jobs from the Central Platform API. Candidate CV upload, consent/privacy workflow, notification delivery and complete application submission UI remain release blockers.

Never expose API secrets in `NEXT_PUBLIC_*` variables. The API URL is public configuration; credentials belong only in server-side secrets.
