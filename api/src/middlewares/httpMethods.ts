import createError from 'http-errors'
import { Request, Response, NextFunction } from 'express'

function contentType(methods: string[]): any {
  return function(req: Request, _res: Response, next: NextFunction): void {
    if (methods.indexOf(req.method) !== -1) {
      next()
    } else {
      next(createError(405))
    }
  }
}

export default contentType
