import { Response, Request } from 'express'
import { container } from 'tsyringe'

import { CreateCategoryUseCase } from './CreateCategoryUseCase'

export class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, description } = request.body

      const createCategoryUseCase = container.resolve(CreateCategoryUseCase)

      await createCategoryUseCase.execute({
        name,
        description,
      })
    } catch (err) {
      return response.status(409).send({ message: err.message })
    }

    return response.status(201).json({ Categoria: 'Criada com sucesso' })
  }
}
