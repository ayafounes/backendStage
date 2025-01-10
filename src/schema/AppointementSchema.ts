import { pgTable, serial, text, integer, date, time} from 'drizzle-orm/pg-core';
import { patient } from './PatientSchema';


export const appointement = pgTable('appointement', {
    idAppointement: serial('idAppointement').primaryKey(),
    idPatient: integer('idPatient').references(() => patient.idPatient),
    dateAppointement: date('dateAppointement').notNull(),
    description: text('description').notNull(),
    startTime: time('startTime').notNull(),
    endTime: time('endTime').notNull(),
    typeAppointement: text('typeAppointement').notNull()
  });