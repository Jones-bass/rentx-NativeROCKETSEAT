import { Category } from '../entities/Category'

export interface ICreateCategoriesDTO {
  name: string
  description: string
}

export interface ICategoriesRepository {
  findByName(name: string): Promise<Category>
  create({ description, name }: ICreateCategoriesDTO): Promise<void>
  list(): Promise<Category[]>
}
