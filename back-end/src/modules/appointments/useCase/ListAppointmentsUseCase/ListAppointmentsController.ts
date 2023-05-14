import { Request, Response } from "express";
import { ListAppointmentsUseCase } from "./ListAppointmentsUseCase";
import AppointmentsRepository from "@modules/appointments/repositories/prisma/AppointmentsRepository";

class ListAppointmentsController {
  public async handle(request: Request, response: Response): Promise<Response> {

    const appointmentsRepository = new AppointmentsRepository()

    const listAppointmentsUseCase = new ListAppointmentsUseCase(appointmentsRepository);

    const allAppointments = await listAppointmentsUseCase.execute();

    return response.json(allAppointments);
  }
}

export { ListAppointmentsController };
