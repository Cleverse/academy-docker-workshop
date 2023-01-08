# create base image
FROM node:18.12.1

# copy only package.json
COPY ./package.json ./package.json

# install project dependencies
RUN npm install

# copy project source codes
COPY . .

# start script run node service
CMD npm run start
