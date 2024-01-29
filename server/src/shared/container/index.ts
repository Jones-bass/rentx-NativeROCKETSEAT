import { container } from 'tsyringe'

import { CategoriesRepository } from '@modules/cars/repositories/CategoriesRepository'
import { SpecificationsRepository } from '@modules/cars/repositories/SpecificationsRepository'
import { IUsersRepository } from '@modules/accounts/infra/typeorm/repositories/IUsersRepository'
import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository'
import { ICategoriesRepository } from '@modules/cars/dtos/ICategoriesRepository'
import { ISpecificationsRepository } from '@modules/cars/dtos/ISpecificationsRepository'

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
