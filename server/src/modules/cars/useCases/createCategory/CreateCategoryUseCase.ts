import { CategoriesRepository } from '../../../../modules/cars/infra/typeorm/repositories/CategoriesRepository'
import { AppError } from '../../../../shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  name: string
  description: string
}

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: CategoriesRepository,
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists =
      await this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new AppError('Category already exists!')
    }

    await this.categoriesRepository.create({ name, description })
  }
}
