import { pgTable, serial, text, date, time, uuid } from 'drizzle-orm/pg-core';
import { patient } from './PatientSchema';

export const appointement = pgTable('appointement', {
  idAppointement: uuid('idAppointement').primaryKey(), // Clé primaire pour l'appointement
  idPatient: uuid('idPatient').references(() => patient.idPatient), // Référence à la clé primaire 'idPatient' de la table 'patient'
  dateAppointement: date('dateAppointement').notNull(), // Date de l'appointement
  description: text('description').notNull(), // Description de l'appointement
  startTime: time('startTime').notNull(), // Heure de début de l'appointement
  endTime: time('endTime').notNull(), // Heure de fin de l'appointement
  typeAppointement: text('typeAppointement').notNull(), 
  
  // Type d'appointement (par exemple, consultation, suivi, etc.)
});
