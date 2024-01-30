import { IUsersRepository } from '@modules/accounts/infra/typeorm/repositories/IUsersRepository'
import { AppError } from '@shared/errors/AppError'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: {
    name: string
    email: string
  }
  token: string
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError('Email or password incorrect!')
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError('Email or password incorrect!')
    }

    const token = sign({}, 'e7ff0497d496f5f48201740a0860c8d3', {
      subject: user.id,
      expiresIn: '7d',
    })

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    }

    return tokenReturn
  }
}

export { AuthenticateUserUseCase }
