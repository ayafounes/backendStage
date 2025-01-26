
import { db } from '../db/connexion';
import { eq } from 'drizzle-orm';
import { prescription } from '../schema/PrescriptionSchema';

export class PrescreptionService {
  static getAllPrescreption() {
      throw new Error('Method not implemented.');
  }
  async getAllPrescreption() {
    return await db.select().from(prescription);
  }

  async getPrescreptionById(id: string) {
    return await db.select().from(prescription).where(eq(prescription.idPrescription, id));
  }

  async addPrescreption(data: {
    datePrescription: string;
    nameMedication: string;
    typeMedication: string;
    signature: number;
  }) {
    return await db.insert(prescription).values(data).returning();
  }

  async updatePrescreption(id: string, data: Partial<{
    datePrescreption: string;
    nameMedication: string;
    typeMedication: string;
    signature: number;
  }>) {
    return await db.select().from(prescription).where(eq(prescription.idPrescription, id));
  }

  
}