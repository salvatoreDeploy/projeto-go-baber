import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UsersRepository } from "../../reporitories/UsersRepository";
import { Users } from "@prisma/client";
import { AppError } from "../../../../shared/error/AppError";
import { authConfig } from "../../../../config/Auth";


interface IRequest {
  email: string;
  password: string;
}

interface Response {
  user: Users;
  token: string;
}

class AuthenticatesessionsUseCase {
  public async execute({ email, password }: IRequest): Promise<Response> {
    const usersRespository = new UsersRepository();

    const user = await usersRespository.findByEmail(email);

    if (!user) {
      throw new AppError("Email or Password incorrect!", 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError("Email or Password incorrect!", 401);
    }

    const { expiresIn, secret } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export { AuthenticatesessionsUseCase };
