import { container } from 'tsyringe'

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/in-memory/UsersRepository'
import { IUsersRepository } from '@modules/accounts/infra/typeorm/repositories/IUsersRepository'

import { CategoriesRepository } from '@modules/cars/infra/typeorm/repositories/CategoriesRepository'
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository'

import { SpecificationsRepositoryInMemory } from '@modules/cars/infra/typeorm/repositories/SpecificationsRepositoryInMemory'
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository'

import { CarsRepository } from '@modules/cars/infra/typeorm/repositories/CarsRepository'
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository'

import { CarsImagesRepository } from '@modules/cars/infra/typeorm/repositories/CarsImagesRepository'
import { ICarsImagesRepository } from '@modules/cars/repositories/ICarsImagesRepository'

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

container.registerSingleton<ICarsImagesRepository>(
  'CarsImagesRepository',
  CarsImagesRepository,
)
