FROM keymetrics/pm2-docker-alpine:latest

ARG ENV
ARG APP_MONGO_HOST
ARG APP_MONGO_PORT

RUN npm i -g yarn

EXPOSE 3000

CMD ["pm2-docker", "start", "app.config.js", "-i", "max"]