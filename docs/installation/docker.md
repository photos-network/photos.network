---
hide:
  - toc
---

# Docker Installation

This guide will help you to get Photos.network up and running in an docker environment.

!!!warning
    Early preview! This is an early preview of the core system and the frontend!



#### docker-compose.yaml
``` YAML
version: "3"

services:
  core:
    image: photosnetwork/core:0.0.1
    ports:
      - "7777:7777"
    volumes:
      - /share/Data/photos.network/data:/app/data:rw
      - /share/Data/photos.network/config:/app/config:rw

  web:
    image: photosnetwork/frontend:0.0.1
    ports:
      - "8884:3000"
```

A [minimal configuration](/documentation/) file will be created on the first start.
