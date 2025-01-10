
import { db } from '../db/connexion';
import { eq } from 'drizzle-orm';
import { prescreption } from '../schema/PrescreptionSchema';

export class PrescreptionService {
  static getAllPrescreption() {
      throw new Error('Method not implemented.');
  }
  async getAllPrescreption() {
    return await db.select().from(prescreption);
  }

  async getPrescreptionById(id: number) {
    return await db.select().from(prescreption).where(eq(prescreption.idPrescreption, id));
  }

  async addPrescreption(data: {
    datePrescreption: string;
    nameMedication: string;
    typeMedication: string;
    signature: number;
  }) {
    return await db.insert(prescreption).values(data).returning();
  }

  async updatePrescreption(id: number, data: Partial<{
    datePrescreption: string;
    nameMedication: string;
    typeMedication: string;
    signature: number;
  }>) {
    return await db.select().from(prescreption).where(eq(prescreption.idPrescreption, id));
  }

  
}