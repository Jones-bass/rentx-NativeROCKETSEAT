import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

import { User } from './User'

@Entity('users_tokens')
export class UserTokens {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'text' })
  refresh_token: string

  @Column({ type: 'text' })
  user_id: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column({ type: 'text' })
  expires_date: Date

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
