import { integer } from 'drizzle-orm/pg-core';

import { db } from '../db/connexion';
import { eq } from 'drizzle-orm';
import { patient } from '../schema/PatientSchema';


export class PatientService {
  static getAllPatient() {
      throw new Error('Method not implemented.');
  }
  async getAllPatient() {
    return await db.select().from(patient);
  }

  async getPatientById(id: number) {
    return await db.select().from(patient).where(eq(patient.idPatient, id));
  }

  async addPatient(data: {
    firstName: string;
    lastName: string;
    birthDate: string;
    gender: string;
    maritalStatus: string;
    occupation: string;
    email: string;
    phone: string;
    adress: string;
    city: string;
    country: string;
    postalCode: string;
    allergy: string;
    bloodType: string;
    medicalRecordNumber: number;
  }) {
    return await db.insert(patient).values(data).returning();
  }

  async updatePatient(id: number, data: Partial<{
    firstName: string;
    lastName: string;
    birthDate: Date;
    gender: string;
    maritalStatus: string;
    occupation: string;
    email: string;
    phone: string;
    adress: string;
    city: string;
    country: string;
    postalCode: string;
    allergy: string;
    bloodType: string;
    medicalRecordNumber: string;
  }>) {
    return await db.select().from(patient).where(eq(patient.idPatient, id));
  }

}