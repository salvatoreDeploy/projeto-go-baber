import { Users } from "@prisma/client";
import prismaClient from "../prisma";
import { ICreateUsersDTO } from "./dtos/ICreateUsersDTO";

class UsersRepository {
  public async findByEmail(email: string) {
    const findEmailExists = await prismaClient.users.findFirst({
      where: {
        email,
      },
    });

    return findEmailExists || null;
  }

  public async findById(id: string): Promise<Users> {
    const findEmailExists = await prismaClient.users.findFirst({
      where: {
        id,
      },
    });

    return findEmailExists;
  }

  public async create({ name, email, password }: ICreateUsersDTO) {
    const user = await prismaClient.users.create({
      data: {
        name,
        email,
        password,
      },
    });
    return user;
  }

  public async update({ user_id, avatar }: IUpdateAvatarDTO) {
    const user = await prismaClient.users.update({
      where: {
        id: user_id,
      },
      data: {
        avatar,
      },
    });
  }

  public async list(): Promise<Users[]> {
    const users = await prismaClient.users.findMany();

    return users;
  }
}

export { UsersRepository };
