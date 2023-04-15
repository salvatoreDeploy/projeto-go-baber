import { Request, Response } from "express";
import { parseISO } from "date-fns";
import CreateAppointmentsUseCase from "./CreateAppointmentsUseCase";

class CreateAppointmentsController {
  async handle(request: Request, response: Response) {
    const { provider_id, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointmentsUsecase = new CreateAppointmentsUseCase();

    const result = await createAppointmentsUsecase.execute({
      provider_id,
      date: parsedDate,
    });

    return response.status(201).json(result);
  }
}

export { CreateAppointmentsController };
