import { Router } from "express";
import { SessionsController } from "./useCase/SessionsUsecase/SessionsController";

const sessionsController = new SessionsController();

const sessionsRoutes = Router();

sessionsRoutes.post("/", sessionsController.handle);

export { sessionsRoutes };
