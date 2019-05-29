import { Entity, PrimaryGeneratedColumn, BaseEntity, Column } from 'typeorm'
import bcrypt from 'bcrypt'

@Entity('user')
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  firstName: string

  @Column()
  lastName: string

  async verifyPassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password)
  }
}
