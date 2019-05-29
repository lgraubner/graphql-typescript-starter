import { getUserById } from '../../repositories/user'
import User from '../../entities/User'

export default async (
  _parent: {},
  _args: {},
  context: any
): Promise<User | undefined> => {
  return getUserById(context.user.id)
}
