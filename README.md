# GroupPilot — WhatsApp Manager MVP

A compliance-first WhatsApp community management MVP for managing members, content and campaigns from a web dashboard.

## Included

- React + TypeScript + Tailwind admin dashboard
- NestJS REST API
- PostgreSQL + Prisma schema
- Redis + BullMQ-ready architecture
- Member request/approval workflow
- Article management
- Campaign creation and send-now workflow
- Mock WhatsApp provider for local testing
- Docker Compose for PostgreSQL + Redis
- Seed data and demo admin credentials

## Run locally

Requirements: Node.js 22+, Docker.

```bash
cp .env.example .env
docker compose up -d
npm install
npm run db:generate
npx prisma migrate dev --name init --schema=prisma/schema.prisma
npx prisma db seed --schema=prisma/schema.prisma
npm run dev
```

Dashboard: http://localhost:5173
API: http://localhost:3000

Demo admin: `admin@example.com` / `admin123`

The current UI is an MVP and does not yet enforce JWT authentication in the browser; authentication endpoints are included as the foundation for the next iteration.

## WhatsApp integration

The default provider is `mock`. It only logs outgoing actions. This is intentional: production WhatsApp integration should be implemented against Meta's official WhatsApp Business Platform capabilities and policies, not WhatsApp Web scraping or browser automation.

Replace `MockWhatsAppProvider` with an official provider adapter when your Meta Business/WhatsApp configuration is ready.

## Suggested next milestones

1. Add JWT guards to all admin API routes.
2. Add Groups UI and group selection to campaigns.
3. Add real Meta webhook verification and message ingestion where supported.
4. Add official WhatsApp message/template/media adapter.
5. Add BullMQ scheduler/worker for scheduled campaigns.
6. Add S3/R2 media uploads.
7. Add delivery/read webhook events and analytics.
8. Add roles, audit logs and rate limits.
