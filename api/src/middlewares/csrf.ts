import { Request, Response, NextFunction } from 'express'
import createError from 'http-errors'

/**
 * Note: This is a very basic CSRF technique assuming, that an form can not add
 * custom headers to a request. Be aware that due to some bugs this might still
 * be possible to exploit. Make sure to include an header "X-CSRF-TOKEN" with
 * any value (but not empty) to any request from the client.
 */
function csrf(req: Request, _res: Response, next: NextFunction): void {
  if (process.env.NODE_ENV !== 'production') {
    return next()
  }

  if (req.get('X-CSRF-TOKEN')) {
    next()
  } else {
    next(createError(403))
  }
}

export default csrf
