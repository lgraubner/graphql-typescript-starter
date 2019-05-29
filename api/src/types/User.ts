import { gql } from 'apollo-server-express'

const User = gql`
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
  }

  extend type Query {
    currentUser: User
  }
`

export default User
