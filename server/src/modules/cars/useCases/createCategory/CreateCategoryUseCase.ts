import { CategoriesRepository } from '@modules/cars/repositories/CategoriesRepository'

interface IRequest {
  name: string
  description: string
}

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute({ description, name }: IRequest): Promise<void> {
    const categoryAlreadyExists =
      await this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error('Category already exists!')
    }

    this.categoriesRepository.create({ name, description })
  }
}
