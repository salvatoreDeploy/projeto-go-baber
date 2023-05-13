import { startOfHour } from "date-fns";
import AppointmentsRepository from "../../repositories/AppointmentsRepository";
import { AppError } from "../../../../shared/error/AppError";

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
