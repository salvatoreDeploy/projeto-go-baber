import { Request, Response } from "express";
import { CreateUsersUseCase } from "./CreateUsersUseCase";
import { UsersRepository } from "@modules/users/reporitories/prisma/UsersRepository";

class CreateUsersController {
  public async handle(request: Request, response: Response) {

    const userRepository = new UsersRepository()

    const { name, email, password } = request.body;

    const createUsersUseCase = new CreateUsersUseCase(userRepository);

    const result = await createUsersUseCase.execute({
      name,
      email,
      password,
    });

    return response.status(201).json(result);
  }
}

export { CreateUsersController };
