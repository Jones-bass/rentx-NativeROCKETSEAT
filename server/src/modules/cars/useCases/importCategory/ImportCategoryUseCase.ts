import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository'
import { Parser } from 'csv-parse'

import fs from 'fs'

interface IImportCategory {
  name: string
  description: string
}

export class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path)
      const categories: IImportCategory[] = []

      const parseFile = new Parser({
        delimiter: ',',
        columns: true,
      })

      stream.pipe(parseFile)
      parseFile
        .on('data', (line) => {
          const { name, description } = line
          categories.push({
            name,
            description,
          })
          console.error('CSV file:', line)
        })

        .on('end', () => {
          fs.promises.unlink(file.path)
          resolve(categories)
        })

        .on('error', (error) => {
          reject(error)
        })
    })
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file)

    categories.map(async (category) => {
      const { name, description } = category

      const existCategory = this.categoriesRepository.findByName(name)

      if (!existCategory) {
        this.categoriesRepository.create({
          name,
          description,
        })
      }
    })
  }
}
