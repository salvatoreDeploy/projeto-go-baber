import { startOfHour } from "date-fns";
import { AppError } from "../../error/AppError";
import prismaClient from "../../prisma";
import AppointmentsRepository from "../../repositories/AppointmentsRepository";

class CreateAppointmentsUseCase {
  async execute({ provider_id, date }: ICreateAppointmentsDTO) {
    const appointmentDate = startOfHour(date);

    const appointmentsRepository = new AppointmentsRepository();

    const findAppointmentInSameDate = await appointmentsRepository.findByDate(
      appointmentDate
    );

    if (findAppointmentInSameDate) {
      throw new AppError("This appointment is already booked");
    }

    const appointment = await appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentsUseCase;
