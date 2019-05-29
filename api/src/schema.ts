import { makeExecutableSchema } from 'graphql-tools'
import { gql } from 'apollo-server-express'
import merge from 'lodash/merge'

import User from './types/User'

import userQueries from './queries/user'

const Root = gql`
  type Query {
    dummy: String
  }

  type Mutation {
    dummy: String
  }
`

const resolvers = merge(userQueries)

const schema = makeExecutableSchema({
  typeDefs: [Root, User],
  resolvers
})

export default schema
