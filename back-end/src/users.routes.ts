import { Router } from "express";
import multer from "multer";
import uploadConfig from "../src/config/Upload";
import { CreateUsersController } from "./useCase/CreateUsersUseCase/CreateUsersController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";
import { UpdateAvatarUserController } from "./useCase/UpdateAvatarUserUseCase/UpdateAvatarUserController";
import { ListUsersController } from "./useCase/ListUsersUseCase/ListUsersController";

const createUsersController = new CreateUsersController();
const updateAvatarUserController = new UpdateAvatarUserController();
const listUsersController = new ListUsersController();

const usersRoutes = Router();
const upload = multer(uploadConfig);

usersRoutes.post("/createuser", createUsersController.handle);
usersRoutes.patch(
  "/uploadavatar",
  ensureAuthenticated,
  upload.single("avatar"),
  updateAvatarUserController.handle
);
usersRoutes.get("/listusers", listUsersController.handle);

export { usersRoutes };
