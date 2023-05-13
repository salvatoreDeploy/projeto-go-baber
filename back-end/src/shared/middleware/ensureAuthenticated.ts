import { NextFunction, Request, Response } from "express";
import { decode, verify } from "jsonwebtoken";
import { authConfig } from "../../config/Auth";
import { AppError } from "../error/AppError";


interface tokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  // Validar do Token JWT

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("JWT token is missing", 401);
  }

  // Tratamento(separando Bearer e o token)

  const [, token] = authHeader.split(" ");

  // Verificando o token

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    // Anexando a informação do usuario que esta fazendo a requisição

    const { sub } = decoded as tokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch (err) {
    throw new AppError("Invalid JWT token");
  }
}

export { ensureAuthenticated };
