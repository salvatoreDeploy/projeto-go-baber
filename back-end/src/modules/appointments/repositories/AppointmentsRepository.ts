import { Appointments } from "@prisma/client";
import prismaClient from "@shared/infra/prisma";
import { IAppointmentsRepository } from "./IAppointmentsRepository";


class AppointmentsRepository implements IAppointmentsRepository {
  public async findByDate(date: Date): Promise<Appointments | null> {
    const findAppointment = await prismaClient.appointments.findFirst({
      where: {
        date,
      },
    });

    return findAppointment || null;
  }

  public async create({
    provider_id,
    date,
  }: ICreateAppointmentsDTO): Promise<Appointments> {
    const appointment = await prismaClient.appointments.create({
      data: {
        provider_id,
        date,
      },
    });
    return appointment;
  }

  public async list(): Promise<Appointments[]> {
    const appointments = await prismaClient.appointments.findMany();

    return appointments;
  }
}

export default AppointmentsRepository;
