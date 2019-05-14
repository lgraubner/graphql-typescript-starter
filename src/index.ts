import { createTerminus } from '@godaddy/terminus'

import app from './app'
import db from './connector'

const debug = require('debug')('server')

// @ts-ignore
const port = parseInt(process.env.PORT, 10) || 3000

function onSignal(): any {
  debug('Kill signal received')
}

function onShutdown(): any {
  debug('Shutting down server')
}

function healthCheck(): any {
  return Promise.resolve(true)
}

createTerminus(app, {
  healthChecks: {
    '/healthcheck': healthCheck
  },
  onSignal,
  onShutdown
})

db.then(
  (): void => {
    app.listen(
      { port },
      (): void => debug(`Server running at http://localhost:${port}`)
    )
  }
)

process.on(
  'unhandledRejection',
  (err): void => {
    // let uncaughtException handler deal with the error
    throw err
  }
)

process.on(
  'uncaughtException',
  (err): void => {
    // @TODO: log error with sentry
    console.error('Uncaught exception', err)

    process.exit(1)
  }
)
