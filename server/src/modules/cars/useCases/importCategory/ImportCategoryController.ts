import { Request, Response } from 'express'
import { ImportCategoryUseCase } from './ImportCategoryUseCase'

import { container } from 'tsyringe'

export class ImportCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request

    try {
      const importCategoryUseCase = container.resolve(ImportCategoryUseCase)

      await importCategoryUseCase.execute(file)
    } catch (err) {
      return response.status(409).send({ message: err.message })
    }

    return response.status(201).send({ file })
  }
}
