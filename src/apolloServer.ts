import { ApolloServer } from 'apollo-server-express'

import schema from './schema'

const server = new ApolloServer({
  schema,
  context: (): any => {
    return {
      user: {
        id: 1
      }
    }
  }
})

export default server
