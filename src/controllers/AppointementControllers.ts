
import { Context } from 'hono';
import { AppointementService } from '../services/appointement';

const appointementService = new AppointementService();

export class AppointementController {
  async getAllAppointement(c: Context) {
    try {
      const appointement = await appointementService.getAllAppointement();
      return c.json(appointement, 200);
    } catch (error) {
      return c.json({ message: 'Error fetching appointement', error }, 500);
    }
  }

  async getAppointementById(c: Context) {
    try {
      const id = Number(c.req.param('id')); //prend l'id passé dans l'url de la requete et le convertit en number
      const appointement = await appointementService.getAppointementById(id);
      if (!appointement) {
        return c.json({ message: 'Appointement not found' }, 404);
      }
      return c.json(appointement, 200);
    } catch (error) {
      return c.json({ message: 'Error fetching appointement', error }, 500);
    }
  }

  async addAppointement(c: Context) {
    try {
      const data = await c.req.json();
      const newAppointement = await appointementService.addAppointement(data);
      return c.json(newAppointement, 201); //201: new seretaire created
    } catch (error) {
      return c.json({ message: 'Error adding appointement', error }, 500);
    }
  }

  async updateAppointement(c: Context) {
    try {
      const id = Number(c.req.param('id'));// recupere l'id du secretaire a mettere a jour depuis l'url
      const data = await c.req.json();
      const updatedAppointement = await appointementService.updateAppointement(id, data);
      if (!updatedAppointement) {
        return c.json({ message: 'Appointement not found' }, 404);
      }
      return c.json(updatedAppointement, 200);
    } catch (error) {
      return c.json({ message: 'Error updating appointement', error }, 500);
    }
  }

}