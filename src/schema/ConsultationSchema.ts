import { pgTable, serial, text, integer, date } from 'drizzle-orm/pg-core';
import { appointement } from './AppointementSchema';
import { patient } from './PatientSchema';


export const consultation = pgTable('consultation', {
    idConsultation: serial('idConsultation').primaryKey(),
    idPatient: integer('idPatient').references(() => patient.idPatient),
    idAppointement: integer('idAppointement').references(() => appointement.idAppointement),
    dateConsultation: date('dateConsultation').notNull(),
    diagnostic: text('diagnostic').notNull(),
    treatment: text('treatment').notNull(),
    statusPaiement: text('statusPaiement').notNull(),
    symptoms: text('symptoms').notNull(),
    cost: serial('cost').notNull()
  });