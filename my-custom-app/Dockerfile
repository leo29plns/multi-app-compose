FROM node:23-bookworm-slim AS base
RUN npm install --global pnpm
WORKDIR /app
COPY . .

FROM base AS build
RUN pnpm install --frozen-lockfile
RUN pnpm run build

FROM build AS assets
RUN rm -rf node_modules

FROM base AS prod
RUN pnpm install --frozen-lockfile --prod
COPY --from=assets /app .

EXPOSE 3333
ENTRYPOINT ["node", "./build/bin/server.js"]
