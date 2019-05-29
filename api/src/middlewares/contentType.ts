import createError from 'http-errors'
import { Request, Response, NextFunction } from 'express'

/**
 * Simple check for a content type. Returns an "Unacceptable" HTTP error on
 * failure.
 */
function contentType(type: string): any {
  return function(req: Request, _res: Response, next: NextFunction): void {
    if (req.is(type)) {
      next()
    } else {
      next(createError(406))
    }
  }
}

export default contentType
