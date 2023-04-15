import { Request, Response } from "express";
import { ListAppointmentsUseCase } from "./ListAppointmentsUseCase";

class ListAppointmentsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const listAppointmentsUseCase = new ListAppointmentsUseCase();

    const allAppointments = await listAppointmentsUseCase.execute();

    return response.json(allAppointments);
  }
}

export { ListAppointmentsController };
