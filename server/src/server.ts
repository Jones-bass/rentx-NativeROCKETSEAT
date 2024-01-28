import { router } from './routes'
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from '../src/swagger.json'
import { AppDataSource } from 'data-source'

AppDataSource.initialize().then(() => {
  const app = express()
  app.use(express.json())

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

  app.use(router)

  app.listen(process.env.PORT, () => {
    console.log('🚀 Server started on port 3333!')
  })
})
