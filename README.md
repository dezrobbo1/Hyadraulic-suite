# Hydraulic Suite (Docker stack)
- Postgres + Prisma (Jobs, Assets)
- API: NestJS (basic CRUD)
- Web: Next.js PWA (lists Jobs/Assets)
## Run
cd infra && docker compose up --build -d
API:  http://<server-ip>:3000/api
Web:  http://<server-ip>:3001
