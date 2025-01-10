import { PatientService } from '../services/patient';

import { Context } from 'hono';

const patientService = new PatientService();

export class PatientController {
  async getAllPatient(c: Context) {
    try {
      const patient = await patientService.getAllPatient();
      return c.json(patient, 200);
    } catch (error) {
      return c.json({ message: 'Error fetching patient', error }, 500);
    }
  }

  async getPatientById(c: Context) {
    try {
      const id = Number(c.req.param('id')); //prend l'id passé dans l'url de la requete et le convertit en number
      const patient = await patientService.getPatientById(id);
      if (!patient) {
        return c.json({ message: 'Patient not found' }, 404);
      }
      return c.json(patient, 200);
    } catch (error) {
      return c.json({ message: 'Error fetching patient', error }, 500);
    }
  }

  async addPatient(c: Context) {
    try {
      const data = await c.req.json();
      const newPatient = await patientService.addPatient(data);
      return c.json(newPatient, 201); //201: new patient created
    } catch (error) {
      return c.json({ message: 'Error adding patient', error }, 500);
    }
  }

  async updatePatient(c: Context) {
    try {
      const id = Number(c.req.param('id'));// recupere l'id du secretaire a mettere a jour depuis l'url
      const data = await c.req.json();
      const updatedPatient = await patientService.updatePatient(id, data);
      if (!updatedPatient) {
        return c.json({ message: 'Patient not found' }, 404);
      }
      return c.json(updatedPatient, 200);
    } catch (error) {
      return c.json({ message: 'Error updating patient', error }, 500);
    }
  }

}