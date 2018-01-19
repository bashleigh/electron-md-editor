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

## Todo

- [ ] Create issue board of tasks and issue to project
- [ ] Create issues that could arrise
- [ ] Experiment with Auth0's authentication API
- [ ] Write acceptance criteria
- [ ] Write detailed readme
- [ ] Write tutorials within wiki docs
- [ ] Add Change log 
- [ ] Document publishing elecrton app


## Server 
- [ ] Create docker image for server using pm2 
- [ ] Create GQL server 
- [ ] Add mongodb to GQL
- [ ] Add Auth0 to GQL server
- [ ] Create GQL Schema
- [ ] Create database Schema

## Electron 
- [ ] Create main electron application
- [ ] Add GQL client
- [ ] Create editor page
- [ ] Add editorial elements like text, list, h1, h2, h3, h4 etc
- [ ] Add change log from md reader


