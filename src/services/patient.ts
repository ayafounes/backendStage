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
    return await db.select().from(patient).where(eq(patient.idPatient, id.toString()));
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
    //medicalRecordNumber: number;
  }) {
    try {
      const birthDate = new Date(data.birthDate);
      if (isNaN(birthDate.getTime())) {
        throw new Error('Invalid birthdate');
      }
  
      return await db.insert(patient).values({
        firstName: data.firstName,
        lastName: data.lastName,
        birthDate: data.birthDate,
        gender: data.gender,
        maritalStatus: data.maritalStatus,
        occupation: data.occupation,
        email: data.email,
        phone: data.phone,
        adress: data.adress,
        city: data.city,
        country: data.country,
        postalCode: data.postalCode,
        allergy: data.allergy,
        bloodType: data.bloodType,
        //medicalRecordNumber: data.medicalRecordNumber,
      }).returning();
    } catch (error: any) {
      console.error('Error adding patient:', error);
      throw new Error(error.message || 'Database error');
    }
  }
  

  async updatePatient(
    id: number,
    data: Partial<{
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
    }>
  ) {
    return await db.select().from(patient).where(eq(patient.idPatient, id.toString()));
  }
}
