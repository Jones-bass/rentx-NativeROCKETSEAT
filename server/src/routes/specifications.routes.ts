import { createSpecificationController } from '@modules/cars/useCases/createSpecifications'
import { Router } from 'express'

export const specificationsRoutes = Router()

specificationsRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response)
})
