
export interface ICreateCategoriesDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  create({ description, name }: ICreateCategoriesDTO): void;
}

