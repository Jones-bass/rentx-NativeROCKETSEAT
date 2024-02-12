import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

import { Category } from './Category'
import { Specification } from './Specification'

@Entity('cars')
export class Car {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'text' })
  name: string

  @Column({ type: 'text' })
  description: string

  @Column({ type: 'boolean' })
  daily_rate: number

  @Column({ type: 'text' })
  available: boolean

  @Column({ type: 'text' })
  license_plate: string

  @Column({ type: 'text' })
  fine_amount: number

  @Column({ type: 'text' })
  brand: string

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category

  @Column({ type: 'text' })
  category_id: string

  @ManyToMany(() => Specification)
  @JoinTable({
    name: 'specifications_cars',
    joinColumns: [{ name: 'car_id' }],
    inverseJoinColumns: [{ name: 'specification_id' }],
  })
  specifications: Specification[]

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
      this.available = true
    }
  }
}
