<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## About

### Stacks

- pnpm
- nodejs
- nestjs

### Prerequisites

- nodejs 18.12.1 LTS or [later](https://nodejs.org)
- pnpm

### Environment variable

- APP_ENV = [dev/prod] is application running in production mode
- PORT = port of the service.
- DEBUG = is enable debug mode.

### Available Script

#### Installation

```bash
# install dependencies
$ pnpm install

# prune dev dependencies
$ pnpm prune --prod
```

#### Running the app

```bash
# development
$ pnpm start

# watch mode
$ pnpm start:dev

# production mode
$ pnpm start:prod
```

## TODO

- create the `dockerfile` for create the `docker image`
- create `docker image` that have all of the **requires resource** for running the application
- running the application with port 3000 by running
- go to `http://localhost:3000`, you must see the message "Hello Docker Session"

### Challenge

- using pnpm to `install` and `build` the service in `docker file`
