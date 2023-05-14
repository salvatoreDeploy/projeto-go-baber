import AppointmentsRepository from "@modules/appointments/repositories/AppointmentsRepository";
import { Appointments } from "@prisma/client";


class ListAppointmentsUseCase {
  public async execute(): Promise<Appointments[]> {
    const appointementsRepository = new AppointmentsRepository();

    const appointements = await appointementsRepository.list();

    return appointements;
  }
}

export { ListAppointmentsUseCase };
