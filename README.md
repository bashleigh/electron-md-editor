Electron md editor
===

A markdown document editor

## Install 

Create an env file from the example

```bash
cp .env.example .env
```

Start the server 

```bash
docker-composer up -d
```

Start electron application 

```bash
electron .
```

> requires electron installed globally with `npm i -g electron`

## Envs

> Going to try to stick to prefixing with `server` and `electron` to specify which part the env is for.

ENV for conditions within both server and electron that might need differences between environments
```
ENV=development
```

Nginx host name
```
NGINX_HOST=test.local
```
Keymetrics accound credentials [optional]
```
KEYMETRICS_PUBLIC=
KEYMETRICS_SECRET=
```

PM@ server configurations and express hosting port
```
SERVER_EXPRESS_PORT=3000
SERVER_INSTANCES=1
SERVER_WATCH=true
```
Instances is used to 

```
ELECTRON_MONGO_HOST=db
ELECTRON_MONGO_HOST=27017
ELECTRON_PRETTY_QL=true
```



## Helpful aliases and commands

Accessing the pm2 docker (there's no bash here)

```bash
alias dn="docker exec -it $(docker ps -f 'name='node-cli'' -q) "
```
You can use the above to access pm2 commands like so `dn pm2 logs`
