# Workshop 1

## Description

In this workshop we will pull the `PostgreSQL` image `version 15.1` from the docker hub and run with `docker` as the `docker container` locally.

### Prerequisites

- docker

## TODO

- Pull the [PostgreSQL official image](https://hub.docker.com/_/postgres) from the docker hub.
- Run the PostgresSQL as docker container in local environment.

## Pull the docker image from the registry

- command `docker pull <image name>:<tag>`
- pull `PostgreSQL` image using command `docker pull postgres:15.1`

## Run as the docker container locally

- command `docker run <image name>:<tag> --flag`
- useful flags list

  | name, shorthand | description                 |
  |-----------------|-----------------------------|
  | --name          | container name              |
  | --env, -e       | assign environment variable |
  | --detach, -d    | run container in background |

- run the `PostgreSQL` container using command `docker run postgres:15.1`

