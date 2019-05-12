import { Request, Response, NextFunction } from 'express'
import createError from 'http-errors'

function auth(req: Request, _res: Response, next: NextFunction): void {
  if (req.user) {
    next()
  } else {
    next(createError(401, 'Not authenticated'))
  }
}

export default auth
