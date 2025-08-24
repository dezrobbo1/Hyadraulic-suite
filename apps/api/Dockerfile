FROM node:20-bookworm-slim AS deps
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends openssl ca-certificates && rm -rf /var/lib/apt/lists/*
COPY package.json tsconfig.json ./
RUN npm install
FROM node:20-bookworm-slim AS builder
WORKDIR /app
COPY --from=deps /app /app
COPY prisma ./prisma
COPY src ./src
RUN npx prisma generate --schema=./prisma/schema.prisma
RUN npm run build
FROM node:20-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production
RUN apt-get update && apt-get install -y --no-install-recommends openssl ca-certificates && rm -rf /var/lib/apt/lists/*
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY package.json ./
EXPOSE 3000
CMD ["node","dist/main.js"]
