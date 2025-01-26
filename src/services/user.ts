// DoctorService.ts
import { db } from '../db/connexion';
import { eq } from 'drizzle-orm';
import { doctor, secretary} from '../schema/UserSchema';

export class DoctorService {
  async getAllDoctors() {
    return await db.select().from(doctor);
  }

  async getDoctorById(id: number) {
    return await db.select().from(doctor).where(eq(doctor.id, id.toString()));
  }

  async addDoctor(data: {
    firstName: string;
    lastName: string;
    birthDate: string;
    gender: string;
    email: string;
    phone: string;
    adress: string;
    city: string;
    country: string;
    username: string;
    password: string;
    role: string;
    postalCode: string;
    profilePhoto?: string;
  }) {
    const doctorData = {
      ...data,
      role: 'doctor' // Ensure role is set correctly
    };
    return await db.insert(doctor).values(doctorData).returning();
  }

  async updateDoctor(id: number, data: Partial<{
    firstName: string;
    lastName: string;
    birthDate: string;
    gender: string;
    email: string;
    phone: string;
    adress: string;
    city: string;
    country: string;
    username: string;
    password: string;
    postalCode: string;
    profilePhoto?: string;
  }>) {
    return await db
      .update(doctor)
      .set(data)
      .where(eq(doctor.id, id.toString()))
      .returning();
  }

}

// SecretaryService.ts

export class SecretaryService {
  async getAllSecretaries() {
    return await db.select().from(secretary);
  }

  async getSecretaryById(id: number) {
    return await db.select().from(secretary).where(eq(secretary.id, id.toString()));
  }

  async addSecretary(data: {
    firstName: string;
    lastName: string;
    birthDate: string;
    gender: string;
    email: string;
    phone: string;
    adress: string;
    city: string;
    country: string;
    username: string;
    password: string;
    role: string;
    postalCode: string;
    profilePhoto?: string;
    hireDate: string;
    employmentStatus: string;
  }) {
    const secretaryData = {
      ...data,
      role: 'secretary' // Ensure role is set correctly
    };
    return await db.insert(secretary).values(secretaryData).returning();
  }

  async updateSecretary(id: number, data: Partial<{
    firstName: string;
    lastName: string;
    birthDate: string;
    gender: string;
    email: string;
    phone: string;
    adress: string;
    city: string;
    country: string;
    username: string;
    password: string;
    postalCode: string;
    profilePhoto?: string;
    hireDate: string;
    employmentStatus: string;
  }>) {
    return await db
      .update(secretary)
      .set(data)
      .where(eq(secretary.id, id.toString()))
      .returning();
  }


}


