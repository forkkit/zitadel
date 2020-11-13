
## Prerequisites

- Buildkit

## Local Dev

### Angular Run

```Bash
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f build/docker-compose.yml up --build angular
```

### Go Run

```Bash
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f build/docker-compose.yml up --build  go
```

### Go Debug

```Bash
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f build/docker-compose-debug.yml up --build  go
```

### Go and Angular

```Bash
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f build/docker-compose.yml up --build
```

## Production Build

This can also be run localy!

```Bash
DOCKER_BUILDKIT=1 docker build -f build/Dockerfile . -t zitadel:local --build-arg ENV=prod
```