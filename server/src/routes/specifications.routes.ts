import { CreateSpecificationController } from '@modules/cars/useCases/createSpecifications/CreateSpecificationController'
import { ensureAuthenticated } from '@shared/middlewares/ensureAuthenticated'
import { Router } from 'express'

export const specificationsRoutes = Router()

const createSpecificationController = new CreateSpecificationController()

specificationsRoutes.use(ensureAuthenticated)

specificationsRoutes.post('/', createSpecificationController.handle)
