import { container } from 'tsyringe'

import './providers/DateProvider'
import './providers/MailProvider'

import { CategoriesRepository } from '../../modules/cars/infra/typeorm/repositories/CategoriesRepository'
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository'

import { SpecificationsRepositoryInMemory } from '../../modules/cars/infra/typeorm/repositories/SpecificationsRepositoryInMemory'
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository'

import { CarsRepository } from '../../modules/cars/infra/typeorm/repositories/CarsRepository'
import { ICarsRepository } from '../../modules/cars/repositories/ICarsRepository'

import { CarsImagesRepository } from '../../modules/cars/infra/typeorm/repositories/CarsImagesRepository'
import { ICarsImagesRepository } from '../../modules/cars/repositories/ICarsImagesRepository'

import { RentalsRepository } from '../../modules/rentals/infra/typeorm/repositories/RentalsRepository'
import { IRentalsRepository } from '../../modules/rentals/repositories/IRentalsRepository'

import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/UsersRepository'
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository'

import { UsersTokensRepository } from '../../modules/accounts/infra/typeorm/repositories/UsersTokensRepository'
import { IUsersTokensRepository } from '../../modules/accounts/repositories/IUsersTokensRepository'

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

container.registerSingleton<IRentalsRepository>(
  'RentalsRepository',
  RentalsRepository,
)

container.registerSingleton<IUsersTokensRepository>(
  'UsersTokensRepository',
  UsersTokensRepository,
)
