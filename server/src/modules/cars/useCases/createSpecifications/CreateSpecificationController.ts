import { Response, Request } from 'express'
import { container } from 'tsyringe'

import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

export class CreateSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, description } = request.body

      const createSpecificationUseCase = container.resolve(
        CreateSpecificationUseCase,
      )

      await createSpecificationUseCase.execute({ name, description })
    } catch (err) {
      return response.status(409).send({ message: err.message })
    }

    return response.status(201).json({ Especificação: 'Criada com sucesso' })
  }
}
