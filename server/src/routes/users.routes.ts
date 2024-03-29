import { Router } from 'express'

import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController'
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController'
import { ensureAuthenticated } from '../shared/middlewares/ensureAuthenticated'

import multer from 'multer'
import uploadConfig from '../config/upload'

const usersRoutes = Router()

const uploadAvatar = multer(uploadConfig)

const createUserController = new CreateUserController()
const updateUserAvatarController = new UpdateUserAvatarController()

usersRoutes.post('/', createUserController.handle)

usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle,
)

export { usersRoutes }
