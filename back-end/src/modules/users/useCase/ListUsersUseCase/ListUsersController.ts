import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
  async handle(request: Request, response: Response) {
    const listUsersUseCase = new ListUsersUseCase();

    const allUsers = await listUsersUseCase.execute();

    return response.json(allUsers);
  }
}

export { ListUsersController };
