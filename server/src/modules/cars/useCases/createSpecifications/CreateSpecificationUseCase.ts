import { AppError } from '../../../../shared/errors/AppError'
import { inject, injectable } from 'tsyringe'
import { SpecificationsRepositoryInMemory } from '../../../../modules/cars/infra/typeorm/repositories/SpecificationsRepositoryInMemory'

interface IRequest {
  name: string
  description: string
}

@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationRepository: SpecificationsRepositoryInMemory,
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
