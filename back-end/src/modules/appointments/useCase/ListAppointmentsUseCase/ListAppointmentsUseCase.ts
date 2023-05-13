import { Appointments } from "@prisma/client";
import AppointmentsRepository from "../../repositories/AppointmentsRepository";

class ListAppointmentsUseCase {
  public async execute(): Promise<Appointments[]> {
    const appointementsRepository = new AppointmentsRepository();

    const appointements = await appointementsRepository.list();

    return appointements;
  }
}

export { ListAppointmentsUseCase };
