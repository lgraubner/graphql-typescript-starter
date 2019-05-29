import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import compression from 'compression'
import helmet from 'helmet'
import passport from 'passport'

import auth from './middlewares/auth'
import session from './middlewares/session'
import httpMethods from './middlewares/httpMethods'
import contentType from './middlewares/contentType'
import errorHandler from './middlewares/errorHandler'
import notFoundHandler from './middlewares/notFoundHandler'
import csrf from './middlewares/csrf'

import authRoutes from './routes/auth'

import apolloServer from './apolloServer'

const app = express()

// get real ip from nginx proxy
app.set('trust proxy', true)

// middlewares
app.use(bodyParser.json())
app.use(cors())
app.use(compression())
app.use(helmet())
app.use(session)
app.use(httpMethods(['GET', 'POST']))
app.use(contentType('application/json'))
app.use(csrf)

app.use(passport.initialize())
app.use(passport.session())

// routes
app.use('/graphql', auth)
app.use('/', authRoutes)

apolloServer.applyMiddleware({ app })

app.use(notFoundHandler)
app.use(errorHandler)

export default app
