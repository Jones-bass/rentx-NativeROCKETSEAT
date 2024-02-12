/* eslint-disable no-use-before-define */
import { Repository } from 'typeorm'

import { AppDataSource } from 'data-source'
import { Category } from '@modules/cars/infra/typeorm/entities/Category'
import {
  ICategoriesRepository,
  ICreateCategoriesDTO,
} from '@modules/cars/repositories/ICategoriesRepository'

export class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>

  constructor() {
    this.repository = AppDataSource.getRepository(Category)
  }

  async create({ description, name }: ICreateCategoriesDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    })

    await this.repository.save(category)
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find()
    return categories
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ where: { name } })
    return category
  }
}
