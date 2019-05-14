require('dotenv').config()

const {
  NODE_ENV,
  DATABASE_TYPE,
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME
} = process.env

const config = {
  name: 'default',
  type: DATABASE_TYPE,
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  username: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  logging: NODE_ENV === 'development',
  entities: [`${__dirname}/src/entities/*.{ts,js}`],
  migrations: [`${__dirname}/src/migrations/*.{ts,js}`],
  subscribers: [`${__dirname}/src/subscribers/*.{ts,js}`],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
    subscribersDir: 'src/subscribers'
  }
}

module.exports = config
