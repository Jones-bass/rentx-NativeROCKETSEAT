import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'text' })
  name: string

  @Column({ type: 'text' })
  email: string

  @Column({ type: 'text' })
  password: string

  @Column({ type: 'text' })
  driver_license: string

  @Column({ type: 'boolean' })
  isAdmin: boolean

  @Column({ type: 'text' })
  avatar: string

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}
