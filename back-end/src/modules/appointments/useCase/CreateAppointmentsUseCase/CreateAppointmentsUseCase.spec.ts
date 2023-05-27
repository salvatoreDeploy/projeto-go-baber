import { InMemoryAppointmentRepository } from "@modules/appointments/repositories/in-memory/inMemoryAppointmentsRepository";
import { beforeEach, describe, expect, it } from "vitest";
import CreateAppointmentsUseCase from "./CreateAppointmentsUseCase";

let inMemoryAppointmentRepository: InMemoryAppointmentRepository
let sut: CreateAppointmentsUseCase

describe('Create Appointments Use Case', () => {

  beforeEach(() => {
    inMemoryAppointmentRepository = new InMemoryAppointmentRepository();
    sut = new CreateAppointmentsUseCase(inMemoryAppointmentRepository)
  })

  it('Should be able to create new appointment', async () => {

    const appointment = await sut.execute({
      provider_id: 'provider-id-teste-01',
      date: new Date()
    })

    expect(appointment.id).toEqual(expect.any(String))
    expect(appointment).toHaveProperty('provider_id')
    expect(appointment).toEqual(expect.objectContaining({ provider_id: 'provider-id-teste-01' }))
  })

  it('Should not be able to create two appointment on the same time', async () => { })
})