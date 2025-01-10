import { consultation } from './../schema/ConsultationSchema';


import { Context } from 'hono';
import { ConsultationService } from '../services/consultation';

const consultationService = new ConsultationService();

export class ConsultationController {
  async getAllConsultation(c: Context) {
    try {
      const consultation = await consultationService.getAllConsultation();
      return c.json(consultation, 200);
    } catch (error) {
      return c.json({ message: 'Error fetching consultation', error }, 500);
    }
  }

  async getConsultationById(c: Context) {
    try {
      const id = Number(c.req.param('id')); //prend l'id passé dans l'url de la requete et le convertit en number
      const consultation = await consultationService.getConsultationById(id);
      if (!consultation) {
        return c.json({ message: 'Consultation not found' }, 404);
      }
      return c.json(consultation, 200);
    } catch (error) {
      return c.json({ message: 'Error fetching consultation', error }, 500);
    }
  }

  async addConsultation(c: Context) {
    try {
      const data = await c.req.json();
      const newConsultation = await consultationService.addConsultation(data);
      return c.json(newConsultation, 201); //201: new seretaire created
    } catch (error) {
      return c.json({ message: 'Error adding consultation', error }, 500);
    }
  }

  async updateConsultation(c: Context) {
    try {
      const id = Number(c.req.param('id'));// recupere l'id du secretaire a mettere a jour depuis l'url
      const data = await c.req.json();
      const updatedConsultation = await consultationService.updateSecretaire(id, data);
      if (!updatedConsultation) {
        return c.json({ message: 'Consultation not found' }, 404);
      }
      return c.json(updatedConsultation, 200);
    } catch (error) {
      return c.json({ message: 'Error updating consultation', error }, 500);
    }
  }

}