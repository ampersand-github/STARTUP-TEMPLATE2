FROM node:19-alpine AS builder
ENV NODE_ENV=development
WORKDIR /app

COPY ../package*.json ./
COPY ../prisma ./prisma
RUN npm ci
RUN npx prisma generate
COPY .. .

RUN npm run build

FROM node:19-alpine AS runner
ENV NODE_ENV production
WORKDIR /app

COPY start.sh ./
COPY package*.json ./
COPY --from=builder /app/dist/ ./dist/
COPY --from=builder /app/node_modules/ ./node_modules/
COPY --from=builder /app/prisma/ ./prisma/


ARG PORT
ENV PORT=$PORT
ARG PROJECT_ID
ENV PROJECT_ID=$PROJECT_ID
ARG PRIVATE_KEY
ENV PRIVATE_KEY=$PRIVATE_KEY
ARG CLIENT_EMAIL
ENV CLIENT_EMAIL=$CLIENT_EMAIL
ARG ORIGIN
ENV ORIGIN=$ORIGIN
ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

RUN chmod +x ./start.sh

CMD ["./start.sh"]
