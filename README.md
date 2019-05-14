# GraphQL API TypeScript Starter

## Features

- Apollo GraphQL
- TypeScript
- TypeORM with Postgres
- Fixture support
- Authentication layer with Express + Passport.js
- Prettier with git hook
- Eslint linting
- Docker integration
- Example Nginx config

## Commands

```bash
# create database schema
docker-compose exec node npm run typeorm schema:sync
# run fixtures
docker-compose exec node npm run fixtures
```

## Features

### Error Handling

isOperational
