import dotenv from 'dotenv'
import { createConnection } from 'typeorm'

import User from './entities/User'

dotenv.config()

const { NODE_ENV, PG_CONNECTION_STRING } = process.env

export default createConnection({
  type: 'postgres',
  logging: NODE_ENV === 'development',
  url: PG_CONNECTION_STRING,
  entities: [User]
})
