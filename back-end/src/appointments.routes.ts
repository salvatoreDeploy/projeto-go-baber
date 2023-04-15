import { Router } from "express";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";
import { CreateAppointmentsController } from "./useCase/CreateAppointmentsUseCase/CreateAppointmentsController";
import { ListAppointmentsController } from "./useCase/ListAppointmentsUseCase/ListAppointmentsController";

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

const createAppointmentsController = new CreateAppointmentsController();
const listAppointmentsController = new ListAppointmentsController();

appointmentsRouter.post(
  "/createappointments",
  createAppointmentsController.handle
);
appointmentsRouter.get("/listappointments", listAppointmentsController.handle);

export { appointmentsRouter };
