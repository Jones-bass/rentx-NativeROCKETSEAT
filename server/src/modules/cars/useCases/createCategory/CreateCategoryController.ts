import { Response, Request } from 'express'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

export class CreateCategoryController {
  constructor(private ceateCategoryUseCase: CreateCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body

    await this.ceateCategoryUseCase.execute({ description, name })

    return response.status(201).send()
  }
}
