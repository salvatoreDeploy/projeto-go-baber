import { Request, Response } from "express";
import { AuthenticatesessionsUseCase } from "./AuthenticateSessionsUseCase";
import { UsersRepository } from "@modules/users/reporitories/prisma/UsersRepository";

class SessionsController {
  public async handle(request: Request, response: Response) {

    const userRepository = new UsersRepository()

    const { email, password } = request.body;

    const authenticateSessionsUseCase = new AuthenticatesessionsUseCase(userRepository);

    const { user, token } = await authenticateSessionsUseCase.execute({
      email,
      password,
    });

    return response.json({ user, token });
  }
}

export { SessionsController };
