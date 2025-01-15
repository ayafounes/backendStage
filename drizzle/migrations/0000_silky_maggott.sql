CREATE TABLE "patient" (
	"idPatient" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"firstName" text NOT NULL,
	"lastName" text NOT NULL,
	"birthDate" date NOT NULL,
	"gender" text NOT NULL,
	"maritalStatus" text NOT NULL,
	"occupation" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL,
	"adress" text NOT NULL,
	"city" text NOT NULL,
	"country" text NOT NULL,
	"postalCode" text NOT NULL,
	"allergy" text NOT NULL,
	"bloodType" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "consultation" (
	"idConsultation" serial PRIMARY KEY NOT NULL,
	"idPatient" integer,
	"idAppointement" integer,
	"dateConsultation" date NOT NULL,
	"diagnostic" text NOT NULL,
	"treatment" text NOT NULL,
	"statusPaiement" text NOT NULL,
	"symptoms" text NOT NULL,
	"cost" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE "doctor" (
	"id" serial PRIMARY KEY NOT NULL,
	"firstName" text NOT NULL,
	"lastName" text NOT NULL,
	"birthDate" date NOT NULL,
	"gender" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL,
	"adress" text NOT NULL,
	"city" text NOT NULL,
	"country" text NOT NULL,
	"username" text NOT NULL,
	"mdp" text NOT NULL,
	"role" text NOT NULL,
	"postalCode" text NOT NULL,
	"profilePhoto" text
);
--> statement-breakpoint
CREATE TABLE "secretary" (
	"id" serial PRIMARY KEY NOT NULL,
	"firstName" text NOT NULL,
	"lastName" text NOT NULL,
	"birthDate" date NOT NULL,
	"gender" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL,
	"adress" text NOT NULL,
	"city" text NOT NULL,
	"country" text NOT NULL,
	"username" text NOT NULL,
	"mdp" text NOT NULL,
	"role" text NOT NULL,
	"postalCode" text NOT NULL,
	"profilePhoto" text,
	"hireDate" date NOT NULL,
	"employmentStatus" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"firstName" text NOT NULL,
	"lastName" text NOT NULL,
	"birthDate" date NOT NULL,
	"gender" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL,
	"adress" text NOT NULL,
	"city" text NOT NULL,
	"country" text NOT NULL,
	"username" text NOT NULL,
	"mdp" text NOT NULL,
	"role" text NOT NULL,
	"postalCode" text NOT NULL,
	"profilePhoto" text
);
--> statement-breakpoint
ALTER TABLE "consultation" ADD CONSTRAINT "consultation_idPatient_patient_idPatient_fk" FOREIGN KEY ("idPatient") REFERENCES "public"."patient"("idPatient") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "consultation" ADD CONSTRAINT "consultation_idAppointement_appointement_idAppointement_fk" FOREIGN KEY ("idAppointement") REFERENCES "public"."appointement"("idAppointement") ON DELETE no action ON UPDATE no action;