import { router } from './routes'
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from '../src/swagger.json'

import './data-source'

export const app = express()

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)
