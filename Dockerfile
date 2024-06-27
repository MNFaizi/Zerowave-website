FROM node:hydrogen-alpine as base

WORKDIR /app

COPY package*.json ./

RUN npm ci

FROM node:hydrogen-alpine as builder

WORKDIR /app

COPY --from=base /app/node_modules ./node_modules

COPY . .

RUN npm run build

FROM node:hydrogen-alpine as runner

RUN apk add --no-cache shadow

RUN addgroup -S nodejs && adduser -S zerowave -G nodejs

# RUN useradd -r -g zerowave

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm install pm2 --location=global

WORKDIR /app

RUN chown -R zerowave:nodejs /app

USER zerowave

RUN mkdir -p /app/.next/cache

COPY --chown=zerowave:nodejs --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["pm2-runtime","node","--","server.js"]
# CMD ["npm", "run", "start"]
