import { Container } from "inversify";
import AppointmentsRepository from "@modules/appointments/repositories/prisma/AppointmentsRepository";
import { IAppointmentsRepository } from "@modules/appointments/repositories/IAppointmentsRepository";
import CreateAppointmentsUseCase from "@modules/appointments/useCase/CreateAppointmentsUseCase/CreateAppointmentsUseCase";
import { IUserRepository } from "@modules/users/reporitories/IUserRepository";
import { UsersRepository } from "@modules/users/reporitories/prisma/UsersRepository";
import { CreateUsersUseCase } from "@modules/users/useCase/CreateUsersUseCase/CreateUsersUseCase";
import { ListAppointmentsUseCase } from "@modules/appointments/useCase/ListAppointmentsUseCase/ListAppointmentsUseCase";
import { ListUsersUseCase } from "@modules/users/useCase/ListUsersUseCase/ListUsersUseCase";
import { AuthenticatesessionsUseCase } from "@modules/users/useCase/SessionsUsecase/AuthenticateSessionsUseCase";
import { UpdateAvatarUserUseCase } from "@modules/users/useCase/UpdateAvatarUserUseCase/UpdateAvatarUserUseCase";
import IHashProvider from "@modules/users/providers/HashProvider/models/IHashProvider";
import { BCryptProvider } from "@modules/users/providers/HashProvider/implementations/BCryptProvider";
import { IStorageProvaider } from "@provider/StorageProvaider/models/IStorageProvaider";
import { LocalStorageProvaider } from "@provider/StorageProvaider/implementations/LocalStorageProvaider";

const container = new Container();

/* Dependecy Injection Investify */

/* Provider */

container.bind<IHashProvider>("HashProvider").to(BCryptProvider);

/* Appointemnsts */

container
  .bind<IAppointmentsRepository>("AppointmentsRepository")
  .to(AppointmentsRepository);
container
  .bind<CreateAppointmentsUseCase>(CreateAppointmentsUseCase)
  .to(CreateAppointmentsUseCase);
container
  .bind<ListAppointmentsUseCase>(ListAppointmentsUseCase)
  .to(ListAppointmentsUseCase);

/* Users */

container.bind<IUserRepository>("UsersRepository").to(UsersRepository);
container.bind<CreateUsersUseCase>(CreateUsersUseCase).to(CreateUsersUseCase);
container.bind<ListUsersUseCase>(ListUsersUseCase).to(ListUsersUseCase);
container
  .bind<AuthenticatesessionsUseCase>(AuthenticatesessionsUseCase)
  .to(AuthenticatesessionsUseCase);

/* Upload Files */

container
  .bind<IStorageProvaider>("LocalStorageProvaider")
  .to(LocalStorageProvaider);
container
  .bind<UpdateAvatarUserUseCase>(UpdateAvatarUserUseCase)
  .to(UpdateAvatarUserUseCase);

export { container };
