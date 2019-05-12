import session from 'express-session'
import createRedisStore from 'connect-redis'
import dotenv from 'dotenv'

dotenv.config()

const { SESSION_COOKIE_SECRET = '', REDIS_HOST = '', REDIS_PORT } = process.env

const RedisStore = createRedisStore(session)

const ONE_WEEK = 604800000

const authSession = session({
  store: new RedisStore({
    host: REDIS_HOST,
    // @ts-ignore
    port: REDIS_PORT
  }),
  secret: SESSION_COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    maxAge: ONE_WEEK,
    sameSite: 'lax'
  },
  name: 'session',
  resave: false,
  saveUninitialized: false
})

export default authSession
