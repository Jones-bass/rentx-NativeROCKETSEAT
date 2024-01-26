import { Category } from '@modules/cars/model/Category'
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository'

export class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list()

    return categories
  }
}
