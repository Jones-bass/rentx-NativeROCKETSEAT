import { Response, Request } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export class CreateCategoryController {
  constructor(private ceateCategoryUseCase: CreateCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;
  
    this.ceateCategoryUseCase.execute({ description, name });
  
    return response.status(201).send();
  
  }
}

