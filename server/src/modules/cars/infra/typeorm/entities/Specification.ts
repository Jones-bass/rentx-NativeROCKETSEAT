import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('specifications')
export class Specification {
  @PrimaryGeneratedColumn('uuid')
  id?: string

  @Column({ type: 'text' })
  name: string

  @Column({ type: 'text' })
  description: string

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
