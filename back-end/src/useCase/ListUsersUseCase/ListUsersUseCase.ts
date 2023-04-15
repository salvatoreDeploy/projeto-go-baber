import { Users } from "@prisma/client";
import { UsersRepository } from "../../repositories/UsersRepository";

class ListUsersUseCase {
  async execute(): Promise<Users[]> {
    const usersRepository = new UsersRepository();

    const users = await usersRepository.list();

    return users;
  }
}

export { ListUsersUseCase };
