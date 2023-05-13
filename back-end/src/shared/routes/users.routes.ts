import { Router } from "express";
import multer from "multer";
import { CreateUsersController } from "../../modules/users/useCase/CreateUsersUseCase/CreateUsersController";
import { UpdateAvatarUserController } from "../../modules/users/useCase/UpdateAvatarUserUseCase/UpdateAvatarUserController";
import { ListUsersController } from "../../modules/users/useCase/ListUsersUseCase/ListUsersController";
import Upload from "../../config/Upload";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const createUsersController = new CreateUsersController();
const updateAvatarUserController = new UpdateAvatarUserController();
const listUsersController = new ListUsersController();

const usersRoutes = Router();
const upload = multer(Upload);

usersRoutes.post("/createuser", createUsersController.handle);
usersRoutes.patch(
  "/uploadavatar",
  ensureAuthenticated,
  upload.single("avatar"),
  updateAvatarUserController.handle
);
usersRoutes.get("/listusers", listUsersController.handle);

export { usersRoutes };
