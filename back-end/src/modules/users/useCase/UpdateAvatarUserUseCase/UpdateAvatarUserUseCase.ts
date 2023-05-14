import { IUserRepository } from "@modules/users/reporitories/IUserRepository";
import { LocalStorageProvaider } from "@provider/StorageProvaider/implementations/LocalStorageProvaider";
import { AppError } from "@shared/error/AppError";


interface IRequest {
  user_id: string;
  avatarFileName?: string;
}

class UpdateAvatarUserUseCase {

  constructor(private usersRepository: IUserRepository) { }

  public async execute({ user_id, avatarFileName }: IRequest) {
    const storageProvaider = new LocalStorageProvaider();

    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("Only authenticated users can change avatar", 401);
    }

    if (user.avatar) {
      await storageProvaider.delete(user.avatar);
    }

    if (avatarFileName) {
      user.avatar = avatarFileName;

      await storageProvaider.save(avatarFileName);

      await this.usersRepository.update({ user_id, avatar: avatarFileName });
    }

    return user;
  }
}

export { UpdateAvatarUserUseCase };
