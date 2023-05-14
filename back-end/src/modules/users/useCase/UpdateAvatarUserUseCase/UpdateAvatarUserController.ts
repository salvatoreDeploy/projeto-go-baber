import { Request, Response } from "express";
import { UpdateAvatarUserUseCase } from "./UpdateAvatarUserUseCase";
import { UsersRepository } from "@modules/users/reporitories/prisma/UsersRepository";

class UpdateAvatarUserController {
  async handle(request: Request, response: Response): Promise<Response> {

    const userRepository = new UsersRepository()

    const { id } = request.user;
    const avatarFileName = request.file?.filename

    const updateAvatarUser = new UpdateAvatarUserUseCase(userRepository);

    const result = await updateAvatarUser.execute({
      user_id: id,
      avatarFileName: avatarFileName,
    });

    return response.status(200).json(result);
  }
}

export { UpdateAvatarUserController };
