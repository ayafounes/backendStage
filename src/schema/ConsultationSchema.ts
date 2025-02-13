import { pgTable, serial, text, date, integer, uuid } from 'drizzle-orm/pg-core';
import { appointement } from './AppointementSchema';
import { patient } from './PatientSchema';

export const consultation = pgTable('consultation', {
  idConsultation: uuid('idConsultation').primaryKey(), // Clé primaire pour la consultation
  idPatient: uuid('idPatient').references(() => patient.idPatient), // Référence à 'idPatient' de la table 'patient'
  idAppointement: uuid('idAppointement').references(() => appointement.idAppointement), // Correspondance exacte avec 'appointement'
  dateConsultation: date('dateConsultation').notNull(), // Date de la consultation
  diagnostic: text('diagnostic').notNull(), // Diagnostic de la consultation
  treatment: text('treatment').notNull(), // Traitement prescrit
  symptoms: text('symptoms').notNull(), // Symptômes rapportés
  cost: integer('cost').notNull(), // Coût de la consultation
});
