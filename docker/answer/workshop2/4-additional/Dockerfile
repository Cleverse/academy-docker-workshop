# create base image
FROM node:18.12.1

# copy only package.json
COPY ./package.json ./package.json

# install project dependencies
RUN npm install

# copy project source codes
COPY ./tsconfig.build.json ./tsconfig.build.json
COPY ./tsconfig.json ./tsconfig.json
COPY ./src ./src

# build the project
RUN npm run build

# set APP_ENV to prod
ENV APP_ENV=prod

# expose port 3000
EXPOSE 3000

# start script run node service
CMD npm run start:prod
