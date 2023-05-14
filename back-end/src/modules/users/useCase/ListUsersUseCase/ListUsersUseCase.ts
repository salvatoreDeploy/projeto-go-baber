import { UsersRepository } from "@modules/users/reporitories/UsersRepository";
import { Users } from "@prisma/client";


class ListUsersUseCase {
  async execute(): Promise<Users[]> {
    const usersRepository = new UsersRepository();

    const users = await usersRepository.list();

    return users;
  }
}

export { ListUsersUseCase };
