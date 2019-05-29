import { Request, Response, NextFunction } from 'express'
import stackTrace from 'stack-trace'

function errorHandler(
  err: any,
  _req: Request,
  res: Response,
  next: NextFunction
): void {
  if (!err) {
    return next()
  }

  const stacktrace = stackTrace.parse(err)

  res.status(err.status).json({
    error: {
      status: err.status,
      message: err.message,
      stacktrace:
        process.env.NODE_ENV === 'development' ? stacktrace : undefined
    }
  })
}

export default errorHandler
