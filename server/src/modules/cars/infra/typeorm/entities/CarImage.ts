import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

@Entity('cars_image')
export class CarImage {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'text' })
  car_id: string

  @Column({ type: 'text' })
  image_name: string

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}
