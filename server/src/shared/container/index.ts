import { container } from 'tsyringe'

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository'
import { IUsersRepository } from '@modules/accounts/infra/typeorm/repositories/IUsersRepository'

import { CategoriesRepository } from '@modules/cars/repositories/in-memory/CategoriesRepository'
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository'

import { SpecificationsRepositoryInMemory } from '@modules/cars/repositories/in-memory/SpecificationsRepositoryInMemory'
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository'

import { CarsRepository } from '@modules/cars/repositories/in-memory/CarsRepository'
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository'

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
)

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepositoryInMemory,
)

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)

container.registerSingleton<ICarsRepository>('CarsRepository', CarsRepository)
