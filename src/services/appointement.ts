
import { db } from '../db/connexion';
import { eq } from 'drizzle-orm';
import { appointement } from '../schema/AppointementSchema';


export class AppointementService {
  static getAllAppointement() {
      throw new Error('Method not implemented.');
  }
  async getAllAppointement() {
    return await db.select().from(appointement);
  }

  async getAppointementById(id: string) {
    return await db.select().from(appointement).where(eq(appointement.idAppointement, id));
  }

  async addAppointement(data: {
    
    dateAppointement: string;
    description: string;
    startTime: string ;
    endTime: string;
    typeAppointement: string;
  }) {
    return await db.insert(appointement).values(data).returning();
  }

  async updateAppointement(id: string, data: Partial<{
    dateAppointement:string;
    description: string;
    startTime: string ;
    endTime: string;
    typeAppointement: string;
  }>) {
    return await db.update(appointement).set(data).where(eq(appointement.idAppointement, id)).returning();
  }

}