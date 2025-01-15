import { pgTable, text, date, uuid, integer } from 'drizzle-orm/pg-core';
import { patient } from './PatientSchema';
import { consultation } from './ConsultationSchema';

export const prescription = pgTable('prescription', { // Correction de 'prescreption' à 'prescription'
  idPrescription: uuid('idPrescription').primaryKey().defaultRandom(), // Correction du nom de 'idPrescreption' à 'idPrescription'
  idPatient: uuid('idPatient').references(() => patient.idPatient), // Référence à l'idPatient de la table patient
  idConsultation: uuid('idConsultation').references(() => consultation.idConsultation), // Référence à l'idConsultation de la table consultation
  datePrescription: date('datePrescription').notNull(), // Correction du nom de 'datePrescreption' à 'datePrescription'
  nameMedication: text('nameMedication').notNull(), // Nom du médicament
  typeMedication: text('typeMedication').notNull(), // Type de médicament
  signature: integer('signature').notNull(), // Signature (type integer, si c'est un numéro)
});
