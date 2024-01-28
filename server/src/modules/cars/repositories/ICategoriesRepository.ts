import { Category } from '../entities/Category'

export interface ICreateCategoriesDTO {
  name: string
  description: string
}

export interface ICategoriesRepository {
  create({ description, name }: ICreateCategoriesDTO): Promise<void>
  list(): Promise<Category[]>
}
