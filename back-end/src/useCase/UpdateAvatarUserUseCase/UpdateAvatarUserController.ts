import { Request, Response } from "express";
import { UpdateAvatarUserUseCase } from "./UpdateAvatarUserUseCase";

class UpdateAvatarUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const avatarFileName = request.file.filename;

    const updateAvatarUser = new UpdateAvatarUserUseCase();

    const result = await updateAvatarUser.execute({
      user_id: id,
      avatarFileName: avatarFileName,
    });

    return response.status(200).json(result);
  }
}

export { UpdateAvatarUserController };
