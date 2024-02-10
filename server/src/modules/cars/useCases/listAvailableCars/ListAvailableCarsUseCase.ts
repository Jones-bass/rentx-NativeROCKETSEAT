import { ICarsRepository } from '@modules/cars/dtos/ICarsRepository'
import { Car } from '@modules/cars/entities/Car'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  category_id?: string
  brand?: string
  name?: string
}

@injectable()
export class ListAvailableCarsUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) {}

  async execute({ category_id, brand, name }: IRequest): Promise<Car[]> {
    const cars = await this.carsRepository.findAvailable(
      brand,
      category_id,
      name,
    )
    return cars
  }
}
