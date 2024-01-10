import { CategoriesRepository } from "@modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "@modules/cars/service/CreateCategoryService";
import { Router } from "express";

export const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  
  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ description, name });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list()

  return response.json(all)
})
