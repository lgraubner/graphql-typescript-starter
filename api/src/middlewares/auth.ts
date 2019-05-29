import { Request, Response, NextFunction } from 'express'
import createError from 'http-errors'

/**
 * Checks if there is a valid user session.
 */
function auth(req: Request, _res: Response, next: NextFunction): void {
  if (req.user) {
    next()
  } else {
    next(createError(401, 'Not authenticated'))
  }
}

export default auth
