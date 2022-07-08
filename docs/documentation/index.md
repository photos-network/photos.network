# Configuration

## Core

#### Minimal configuration
```json
{
  "internal_url": "192.168.0.1",
  "external_url": "photos.external.com",
  "data_dir": "data",
  "clients": [
    {
      "name": "Frontend",
      "client_id": "<random id>",
      "client_secret": "<random secret>",
      "redirect_uris": [
        "http://127.0.0.1:7778/callback"
      ]
    }
  ],
  "addons": [
    {
      "name": "api"
    }
  ]
}
```

| Properties          | Description                          |
| ------------------- | ------------------------------------ |
| `internal_url`      | Indicates the internal network address. |
| `external_url`      | The external network address e.g.: used to create links for sharing. |
| `data_dir`          | Path where all the data will be stored. |
| `clients`           | List of clients e.g. Web frontend or Android. |
| `addons`            | List of addons and their custom configurations. |

## Frontend

#### Minimal configuration
```json
{
  "frontend_url": "http://172.20.0.2",
  "frontend_port": 7778,
  "core_url": "http://127.0.0.1",
  "core_port": 7777,
  "client_id": "",
  "client_secret": "",
  "redirect_uri": "http://127.0.0.1:7778/callback"
}
```

| Properties          | Description                                   |
| ------------------- | --------------------------------------------- |
| `frontend_url`      | Indicates the internal network address.       |
| `frontend_port`     | Indicates the internal network port.          |
| `core_url`          | Communication address for the core system.    |
| `core_port`         | Communication port for the core system.       |
| `client_id`         | Client credentials to get access to the core. |
| `client_secret`     | Client secret to get access to the core.      |
| `redirect_uri`      | Redirect address for callbacks from the core. |


## Nginx

It is recommended to run **photos.network** behind a reverse proxy like nginx or HAProxy.
First of all, it increases the performance and it prevents from many attacks based on malformed http requests.

#### Nginx + Round-robin

```conf
upstream core {
  server 127.0.0.1:7777 fail_timeout=0;
}

upstream frontend {
 server 127.0.0.1:7778 fail_timeout=0; 
}

server {
  listen 80;
  return 301              https://$host$request_uri;
}

server {
  listen                  443 ssl http2;
  listen                  [::]:443 ssl http2;
  client_max_body_size    4G;

  server_name             photos.example.com;

  ssl_certificate         /etc/secrets/cert.pem;
  ssl_certificate_key     /etc/secrets/key.pem;

  location / {
    proxy_set_header      Host $http_host;
    proxy_set_header      X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header      X-Forwarded-Proto $scheme;
    proxy_set_header      X-Real-IP $remote_addr;
    proxy_redirect        off;
    proxy_buffering       off;
    proxy_pass            http://frontend;
  }

  location /api {
    proxy_pass            http://core;
  }

  location /oauth {
    proxy_pass            http://core;
  }
}

```

Running the **frontend** and **core** behind a reverse proxy could look like this:

```json
{
  "frontend_url": "https://photos.example.com",
  "frontend_port": 7778,
  "core_url": "https://photos.example.com",
  "core_port": 443,
  "client_id": "",
  "client_secret": "",
  "redirect_uri": "https://photos.example.com/callback"
}
```
