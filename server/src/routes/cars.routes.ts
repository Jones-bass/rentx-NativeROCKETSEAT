import { Router } from 'express'
import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController'
import { ensureAuthenticated } from '@shared/middlewares/ensureAuthenticated'

export const carsRoutes = Router()

const createCarController = new CreateCarController()

carsRoutes.post('/', ensureAuthenticated, createCarController.handle)
