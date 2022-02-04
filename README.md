# cdn

A simple CDN server

## Pull Docker Image

```
docker pull ghcr.io/eyzi/cdn:latest
```

## Deploy

```
docker run -d -p <HOST_PORT>:80 -v <HOST_DIR>:/cdn ghcr.io/eyzi/cdn:latest
```

where:
- `<HOST_PORT>` is the port you'd like to use as your CDN server on your host machine
- `<HOST_DIR>` is the directory on your host machine that you'd like to serve to your CDN server

### Example

with `<HOST_PORT>`=`8080` and `<HOST_DIR>`=`/var/cdn`
 and if you have `logo.png` file inside your `/var/cdn` directory

```
docker run -d -p 8080:80 -v /var/cdn:/cdn ghcr.io/eyzi/cdn:latest
```

Then you'll be able to access `logo.png` through your CDN server with `http://localhost:8080/logo.png`

### Health Check

The `/health` endpoint is reserved for health check
