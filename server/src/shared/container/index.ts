import { container } from 'tsyringe'

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository'
import { IUsersRepository } from '@modules/accounts/infra/typeorm/repositories/IUsersRepository'

import { CategoriesRepository } from '@modules/cars/repositories/CategoriesRepository'
import { ICategoriesRepository } from '@modules/cars/dtos/ICategoriesRepository'

import { SpecificationsRepository } from '@modules/cars/repositories/SpecificationsRepository'
import { ISpecificationsRepository } from '@modules/cars/dtos/ISpecificationsRepository'

import { CarsRepository } from '@modules/cars/repositories/CarsRepository'
import { ICarsRepository } from '@modules/cars/dtos/ICarsRepository'

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
)

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
)

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)

container.registerSingleton<ICarsRepository>('CarsRepository', CarsRepository)
