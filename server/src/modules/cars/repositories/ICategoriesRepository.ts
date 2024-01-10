import { Category } from "../model/Category";

export interface ICreateCategoriesDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  findByName( name: string ): Category;
  create({ description, name }: ICreateCategoriesDTO): void;
  list(): Category[];
}

