import User from '../entities/User'

export const getUserById = (id: number): Promise<User | undefined> =>
  User.findOne(id)

export const getUserByEmail = (email: string): Promise<User | undefined> =>
  User.findOne({ where: { email } })
