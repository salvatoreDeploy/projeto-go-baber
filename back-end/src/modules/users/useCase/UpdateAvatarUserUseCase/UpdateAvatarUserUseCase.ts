import { UsersRepository } from "@modules/users/reporitories/UsersRepository";
import { LocalStorageProvaider } from "@provider/StorageProvaider/implementations/LocalStorageProvaider";
import { AppError } from "@shared/error/AppError";


interface IRequest {
  user_id: string;
  avatarFileName: string;
}

class UpdateAvatarUserUseCase {
  public async execute({ user_id, avatarFileName }: IRequest) {
    const usersRepository = new UsersRepository();
    const storageProvaider = new LocalStorageProvaider();

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("Only authenticated users can change avatar", 401);
    }

    if (user.avatar) {
      await storageProvaider.delete(user.avatar);
    }

    user.avatar = avatarFileName;

    await storageProvaider.save(avatarFileName);

    await usersRepository.update({ user_id, avatar: avatarFileName });

    return user;
  }
}

export { UpdateAvatarUserUseCase };
