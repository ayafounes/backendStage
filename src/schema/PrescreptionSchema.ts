import { pgTable, serial, text, integer, date } from 'drizzle-orm/pg-core';
import { patient } from './PatientSchema';
import { consultation } from './ConsultationSchema';


export const prescreption = pgTable('prescreption', {
    idPrescreption: serial('idPrescreption').primaryKey(),
    idPatient: integer('idPatient').references(() => patient.idPatient),
    idConsultation: integer('idConsultation').references(() => consultation.idConsultation),
    datePrescreption: date('datePrescreption').notNull(),
    nameMedication: text('nameMedication').notNull(),
    typeMedication: text('typeMedication').notNull(),
    signature: integer('signature').notNull(),
  });