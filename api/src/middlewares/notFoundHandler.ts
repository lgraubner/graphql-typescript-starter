import createError from 'http-errors'
import { Request, Response, NextFunction } from 'express'

function notFoundHandler(
  _req: Request,
  _res: Response,
  next: NextFunction
): void {
  next(createError(404))
}

export default notFoundHandler
