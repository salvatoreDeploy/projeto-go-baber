import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";
import { UsersRepository } from "@modules/users/reporitories/prisma/UsersRepository";

class ListUsersController {
  async handle(request: Request, response: Response) {

    const userRepository = new UsersRepository()

    const listUsersUseCase = new ListUsersUseCase(userRepository);

    const allUsers = await listUsersUseCase.execute();

    return response.json(allUsers);
  }
}

export { ListUsersController };
