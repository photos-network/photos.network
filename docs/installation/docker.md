---
hide:
  - toc
---

# Docker Installation

This guide will help you to get Photos.network up and running in an docker environment.

!!!warning
    Early preview! This is an early preview of the core system!



#### docker-compose.yaml
``` YAML
version: "3"

services:
  core:
    image: photosnetwork/core:0.5.2
    # expose container port to host system
    ports:
      - "7777:7777"

    # expose port to linked service
    expose: ["7777"]

    volumes:
      - /share/photos.network/config:/app/config:rw
      - /share/photos.network/data:/app/data:rw
```

A [minimal configuration](/documentation/) file will be created on the first start.
