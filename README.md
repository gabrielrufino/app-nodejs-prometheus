# App - NodeJS & Prometheus

A simple NodeJS app monitored by Prometheus

### Requirements

* Docker
* docker-compose

### Running locally

```bash
git clone https://github.com/gabrielrufino/app-nodejs-prometheus
cd app-nodejs-prometheus
docker-compose up
```

The API will run at port 3000 and the Prometheus UI will run at port 9090.

### API

> GET /

Response:
```json
{"message":"Hello, world!"}
```

> GET /counter

Response:
```json
{"metric":"counter"}
```

> GET /gauge

Response:
```json
{"metric":"gauge"}
```

> GET /histogram

Response:
```json
{"metric":"histogram"}
```

> GET /summary

Response:
```json
{"metric":"summary"}
```

> GET /metrics

Response: **Prometheus metrics**
