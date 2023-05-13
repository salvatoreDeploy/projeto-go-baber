import { hash } from "bcryptjs";
import { ICreateUsersDTO } from "../../reporitories/dtos/ICreateUsersDTO";
import { UsersRepository } from "../../reporitories/UsersRepository";
import { AppError } from "../../../../shared/error/AppError";


class CreateUsersUseCase {
  public async execute({ name, email, password }: ICreateUsersDTO) {
    const usersRepository = new UsersRepository();

    const userAlreadyExists = await usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already existing with this email.");
    }

    const hashedPassword = await hash(password, 8);

    const user = await usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export { CreateUsersUseCase };
