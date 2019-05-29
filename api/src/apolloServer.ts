import { ApolloServer } from 'apollo-server-express'
import { Request } from 'express'

import schema from './schema'

const server = new ApolloServer({
  schema,
  context: (req: Request): any => {
    // @TODO:
    return {
      user: req
    }
  }
})

export default server
