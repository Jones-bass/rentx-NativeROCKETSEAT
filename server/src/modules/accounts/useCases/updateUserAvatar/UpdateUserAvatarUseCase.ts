import { IUsersRepository } from '@modules/accounts/infra/typeorm/repositories/IUsersRepository'
import { deleteFile } from '@shared/utils/file'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  user_id: string
  avatar_file: string
}

@injectable()
export class UpdateUserAvatarUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ user_id, avatar_file }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id)

    if (user.avatar) {
      await deleteFile(`../../../../../tmp/${user.avatar}`)
    }
    user.avatar = avatar_file

    await this.usersRepository.create(user)
  }
}
