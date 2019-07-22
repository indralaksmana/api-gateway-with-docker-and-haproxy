# API Gateway with Docker and HAProxy

Each application may require different services & configuration.
For now all applications are using the same `node:8.15.0-alpine` image for build application


Setup
-------------

**Create _webgateway_ network**
```
docker network create -d bridge --subnet 172.11.0.0/16 \
--gateway=172.11.0.1 \
--opt com.docker.network.bridge.enable_icc=true \
--opt com.docker.network.bridge.enable_ip_masquerade=true \
--opt com.docker.network.bridge.host_binding_ipv4=0.0.0.0 \
--opt com.docker.network.driver.mtu=1500 \
webgateway
```

How to build app?
-------------

Just run below command to build app.

**Build with _development_ environment**
```
docker-compose -f docker-compose.dev.yml up --build
```

**Build with _production_ environment**
```
docker-compose up --build