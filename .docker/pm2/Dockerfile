FROM keymetrics/pm2-docker-alpine:latest

ARG ENV
ARG APP_MONGO_HOST
ARG APP_MONGO_PORT

EXPOSE 3000

CMD ["pm2-docker", "start", "app.js", "-i", "max"]