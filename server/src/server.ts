import 'reflect-metadata'

import express, { NextFunction, Request, Response } from 'express'
import { AppError } from '@shared/errors/AppError'
import 'express-async-errors'

import { router } from './routes'
import { AppDataSource } from 'data-source'

import swaggerUi from 'swagger-ui-express'
import swaggerFile from '../src/swagger.json'

import './shared/container'

AppDataSource.initialize().then(() => {
  const app = express()
  app.use(express.json())

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

  app.use(router)

  app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
      if (err instanceof AppError) {
        return response.status(err.statusCode).json({
          message: err.message,
        })
      }

      return response.status(500).json({
        status: 'error',
        message: `Internal server error - ${err.message}`,
      })
    },
  )

  app.listen(process.env.PORT, () => {
    console.log('🚀 Server started on port 3333!')
  })
})
