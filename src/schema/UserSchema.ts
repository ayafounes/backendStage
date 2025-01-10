import { pgTable, serial, text, date } from 'drizzle-orm/pg-core';

// Base user schema
export const user = pgTable('user', {
  id: serial('id').primaryKey(),
  firstName: text('firstName').notNull(),
  lastName: text('lastName').notNull(),
  birthDate: date('birthDate').notNull(),
  gender: text('gender').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  adress: text('adress').notNull(),
  city: text('city').notNull(),
  country: text('country').notNull(),
  username: text('username').notNull(),
  mdp: text('mdp').notNull(),
  role: text('role').notNull(),
  postalCode: text('postalCode').notNull(),
  profilePhoto: text('profilePhoto')
});

// Doctor schema inheriting from user
export const doctor = pgTable('doctor', {
  id: serial('id').primaryKey(),
  firstName: text('firstName').notNull(),
  lastName: text('lastName').notNull(),
  birthDate: date('birthDate').notNull(),
  gender: text('gender').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  adress: text('adress').notNull(),
  city: text('city').notNull(),
  country: text('country').notNull(),
  username: text('username').notNull(),
  mdp: text('mdp').notNull(),
  role: text('role').notNull(),
  postalCode: text('postalCode').notNull(),
  profilePhoto: text('profilePhoto')
});

// Secretary schema inheriting from user with additional fields
export const secretary = pgTable('secretary', {
  id: serial('id').primaryKey(),
  firstName: text('firstName').notNull(),
  lastName: text('lastName').notNull(),
  birthDate: date('birthDate').notNull(),
  gender: text('gender').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  adress: text('adress').notNull(),
  city: text('city').notNull(),
  country: text('country').notNull(),
  username: text('username').notNull(),
  mdp: text('mdp').notNull(),
  role: text('role').notNull(),
  postalCode: text('postalCode').notNull(),
  profilePhoto: text('profilePhoto'),
  // Secretary-specific fields
  hireDate: date('hireDate').notNull(),
  employmentStatus: text('employmentStatus').notNull()
});
