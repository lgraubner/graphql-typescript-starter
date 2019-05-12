import { Router } from 'express'

const apiRouter = Router()

apiRouter.use(
  '/',
  (_req, _res, next): void => {
    next()
  }
)

export default apiRouter
