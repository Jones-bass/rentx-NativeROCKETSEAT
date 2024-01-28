import { SpecificationsRepository } from '@modules/cars/repositories/SpecificationsRepository'
import { AppError } from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  name: string
  description: string
}

@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationRepository: SpecificationsRepository,
  ) {}

  async execute({ description, name }: IRequest): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationRepository.findByName(name)

    if (specificationAlreadyExists) {
      throw new AppError('Specification already exists!')
    }

    await this.specificationRepository.create({ name, description })
  }
}
