import express, { Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import compression from 'compression'
import helmet from 'helmet'
import dotenv from 'dotenv'
import passport from 'passport'

import auth from './middlewares/auth'
import session from './middlewares/session'

import apiRoute from './routes/api'
import authRoutes from './routes/auth'

import apolloServer from './apolloServer'

dotenv.config()

const app = express()

// middlewares
app.use(bodyParser.json())
app.use(cors())
app.use(compression())
app.use(helmet())
app.use(session)
app.use(passport.initialize())
app.use(passport.session())

// routes
app.use('/graphql', auth, apiRoute)
app.use('/', authRoutes)

apolloServer.applyMiddleware({ app })

app.use(function(
  err: any,
  _req: Request,
  res: Response,
  next: NextFunction
): void {
  if (!err) {
    return next()
  }

  console.log(err)
  res.status(err.status).json({
    error: {
      status: err.status,
      message: err.message
    }
  })

  console.error(err)
  // add Sentry or similar error tracking service here
})

export default app
