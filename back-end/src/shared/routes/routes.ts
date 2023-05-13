import { Router } from "express";
import { appointmentsRouter } from "./appointments.routes";
import { sessionsRoutes } from "./sessions.routes";
import { usersRoutes } from "./users.routes";

const routes = Router();

/* Appointments */
routes.use("/appointments", appointmentsRouter);

/* Users */
routes.use("/users", usersRoutes);

/* Autheticated */
routes.use("/", sessionsRoutes);

export { routes };
