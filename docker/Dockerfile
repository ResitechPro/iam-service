# Development Stage
FROM node:20-alpine AS development

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
COPY .env nest-cli.json tsconfig.build.json tsconfig.json ./
COPY prisma ./prisma

RUN npm install -g pnpm @nestjs/cli
RUN pnpm install
RUN pnpx prisma generate

COPY src ./src

CMD ["npm", "run", "start:dev"]

# Production Stage
FROM node:16-alpine AS production

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
COPY --from=development /app/dist ./dist
COPY prisma ./prisma

RUN npm install -g pnpm @nestjs/cli
RUN pnpm install --production
RUN pnpx prisma generate

EXPOSE 3000

CMD ["node", "./dist/main.js"]
