# create base image with pnpm
FROM node:18.12.1 AS base

RUN npm i -g pnpm

# install dependencies
FROM base AS dependencies

# set directory to /app
WORKDIR /app

# copy package and lock file for install the dependencies
COPY ./package.json ./package.json
COPY ./pnpm-lock.yaml ./pnpm-lock.yaml

RUN pnpm install --frozen-lockfile

# build project stage
FROM base AS build

# set directory to /app
WORKDIR /app

# copy the production dependencies that was installed in the dependencies stage
COPY --from=dependencies /app/node_modules ./node_modules

# copy source code to build
COPY . .

# build the project
RUN pnpm run build

# delete all dev dependencies
RUN pnpm prune --prod

# master stage
FROM node:18.12.1-alpine3.17 AS master

# set directory to /app
WORKDIR /app

# set APP_ENV to prod
ENV APP_ENV=prod

# expose port 3000
EXPOSE 3000

# copy built application from build stage
COPY --from=build /app/dist ./dist

# copy production dependencies from build stage
COPY --from=build /app/node_modules ./node_modules

# start script run node service
CMD node dist/main
