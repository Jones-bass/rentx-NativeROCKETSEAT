import { Category } from '@modules/cars/entities/Category'
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository'

export class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list()

    return categories
  }
}
