import app from './app'
import db from './connector'

const debug = require('debug')('api')

// @ts-ignore
const port = parseInt(process.env.PORT, 10) || 3000

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
    // @TODO: log error and decide if server should crash
    console.error('Uncaught exception', err)

    // @ts-ignore
    if (!err.isOperational) {
      process.exit(1)
    }
  }
)
