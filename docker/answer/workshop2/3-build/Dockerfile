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

# start script run node service
CMD npm run start:prod
