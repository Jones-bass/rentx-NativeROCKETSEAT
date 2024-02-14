import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

import { Car } from '../../../../../modules/cars/infra/typeorm/entities/Car'

@Entity('rentals')
export class Rental {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Car)
  @JoinColumn({ name: 'car_id' })
  car: Car

  @Column({ type: 'text' })
  car_id: string

  @Column({ type: 'text' })
  user_id: string

  @Column({ type: 'text' })
  start_date: Date

  @Column({ type: 'text' })
  end_date: Date

  @Column({ type: 'text' })
  expected_return_date: Date

  @Column({ type: 'text' })
  total: number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}
