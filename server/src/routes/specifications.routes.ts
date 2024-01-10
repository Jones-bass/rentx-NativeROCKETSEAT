
import { SpecificationsRepository } from "@modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "@modules/cars/service/CreateSpecificationService";
import { Router } from "express";

export const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository()

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  
  const createSpecificationService = new CreateSpecificationService(specificationsRepository);

  createSpecificationService.execute({ description, name });

  return response.status(201).send();
});
