import { IAppointmentsRepository } from "@modules/appointments/repositories/IAppointmentsRepository";
import { Appointments } from "@prisma/client";


class ListAppointmentsUseCase {

  constructor(private appointmentsRepository: IAppointmentsRepository) { }

  public async execute(): Promise<Appointments[]> {

    const appointements = await this.appointmentsRepository.list();

    return appointements;
  }
}

export { ListAppointmentsUseCase };
