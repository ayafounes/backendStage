import { integer } from 'drizzle-orm/pg-core';

import { db } from '../db/connexion';
import { eq } from 'drizzle-orm';
import { consultation } from '../schema/ConsultationSchema';

export class ConsultationService {
  updateConsultation(id: number, data: any) {
      throw new Error('Method not implemented.');
  }
  static getAllConsultation() {
      throw new Error('Method not implemented.');
  }
  async getAllConsultation() {
    return await db.select().from(consultation);
  }

  async getConsultationById(id: number) {
    return await db.select().from(consultation).where(eq(consultation.idConsultation, id));
  }

  async addConsultation(data: {
    dateConsultation: string;
    diagnostic: string;
    treatment:string;
    statusPaiement: string;
    symptoms: string;
    cost: number;
  }) {
    return await db.insert(consultation).values(data).returning();
  }

  async updateSecretaire(id: number, data: Partial<{
    dateConsultation: string;
    diagnostic: string;
    treatment:string;
    statusPaiement: string;
    symptoms: string;
    cost: number;
  }>) {
    return await db.select().from(consultation).where(eq(consultation.idConsultation, id));
  }
}