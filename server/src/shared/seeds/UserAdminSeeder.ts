/* eslint-disable @typescript-eslint/no-unused-vars */
import bcrypt from 'bcrypt'
import { DataSource } from 'typeorm'
import { Seeder, SeederFactoryManager } from 'typeorm-extension'

import { User } from '../../modules/accounts/infra/typeorm/entities/User'

export class UserAdminSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    const userRepository = dataSource.getRepository(User)

    const userData = {
      name: 'Jonesadmin',
      email: 'jonesadmin@email.com',
      driver_license: '122490',
      isAdmin: true,

      password: await bcrypt.hash('tb122490', 8),
    }

    const userExists = await userRepository.findOneBy({ email: userData.email })

    if (!userExists) {
      const newUser = userRepository.create(userData)
      await userRepository.save(newUser)
    }
  }
}
