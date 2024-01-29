import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, username, password, driver_license } = request.body

      const createUserUseCase = container.resolve(CreateUserUseCase)

      await createUserUseCase.execute({
        name,
        username,
        email,
        password,
        driver_license,
      })
    } catch (err) {
      return response.status(409).send({ message: err.message })
    }

    return response.status(201).send({ User: 'Criado com sucesso' })
  }
}
