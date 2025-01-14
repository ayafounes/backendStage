import { pgTable, serial, text, integer, date } from 'drizzle-orm/pg-core';


export const patient = pgTable('patient', {
    idPatient: serial('idPatient').primaryKey().notNull(),
    firstName: text('firstName').notNull(),
    lastName: text('lastName').notNull(),
    birthDate: date('birthDate').notNull(),
    gender: text('gender').notNull(),
    maritalStatus: text('maritalStatus').notNull(),
    occupation: text('occupation').notNull(),
    email: text('email').notNull(),
    phone: text('phone').notNull(),
    adress: text('adress').notNull(),
    city: text('city').notNull(),
    country: text('country').notNull(),
    postalCode: text('postalCode').notNull(),
    allergy: text('allergy').notNull(),
    bloodType: text('bloodType').notNull(),
    //medicalRecordNumber: integer('medicalRecordNnumber').notNull(),
  });