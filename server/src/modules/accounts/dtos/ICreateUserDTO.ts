import { DataSource } from 'typeorm'
import { SeederFactoryManager } from 'typeorm-extension'

export interface ICreateUserDTO {
  name: string
  password: string
  email: string
  driver_license: string
  id?: string
  avatar?: string
  dataSource?: DataSource
  factoryManager?: SeederFactoryManager
}
