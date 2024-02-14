import { AppDataSource } from 'data-source'
import { In, Repository } from 'typeorm'

import { Specification } from '../../../../../modules/cars/infra/typeorm/entities/Specification'
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '../../../../../modules/cars/repositories/ISpecificationsRepository'

export class SpecificationsRepositoryInMemory
  implements ISpecificationsRepository
{
  private repository: Repository<Specification>

  constructor() {
    this.repository = AppDataSource.getRepository(Specification)
  }

  async create({
    description,
    name,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = this.repository.create({
      description,
      name,
    })

    await this.repository.save(specification)

    return specification
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({ where: { name } })
    return specification
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const allSpecifications = await this.repository.find({
      where: {
        id: In(ids),
      },
    })

    return allSpecifications
  }
}
