FROM node:19-alpine AS builder
ENV NODE_ENV=development
WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma
RUN npm ci
RUN npx prisma generate
COPY . .
RUN npm run build

FROM node:19-alpine AS runner
ENV NODE_ENV production
WORKDIR /app

COPY start.sh ./
COPY package*.json ./
COPY --from=builder /app/dist/ ./dist/
COPY --from=builder /app/node_modules/ ./node_modules/
COPY --from=builder /app/prisma/ ./prisma/

RUN chmod +x ./start.sh

CMD ["./start.sh"]
