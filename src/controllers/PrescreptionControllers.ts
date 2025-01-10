
import { Context } from 'hono';
import { PrescreptionService } from '../services/prescreption';

const prescreptionService = new PrescreptionService();

export class PrescreptionController {
  async getAllPrescreption(c: Context) {
    try {
      const prescreption = await prescreptionService.getAllPrescreption();
      return c.json(prescreption, 200);
    } catch (error) {
      return c.json({ message: 'Error fetching prescreption', error }, 500);
    }
  }

  async getPrescreptionById(c: Context) {
    try {
      const id = Number(c.req.param('id')); //prend l'id passé dans l'url de la requete et le convertit en number
      const prescreption = await prescreptionService.getPrescreptionById(id);
      if (!prescreption) {
        return c.json({ message: 'Prescreption not found' }, 404);
      }
      return c.json(prescreption, 200);
    } catch (error) {
      return c.json({ message: 'Error fetching prescreption', error }, 500);
    }
  }

  async addPrescreption(c: Context) {
    try {
      const data = await c.req.json();
      const newPrescription = await prescreptionService.addPrescreption(data);
      return c.json(newPrescription, 201); //201: new seretaire created
    } catch (error) {
      return c.json({ message: 'Error adding prescreption', error }, 500);
    }
  }

  async updatePrescreption(c: Context) {
    try {
      const id = Number(c.req.param('id'));// recupere l'id du secretaire a mettere a jour depuis l'url
      const data = await c.req.json();
      const updatedPrescreption = await prescreptionService.updatePrescreption(id, data);
      if (!updatedPrescreption) {
        return c.json({ message: 'Prescreption not found' }, 404);
      }
      return c.json(updatedPrescreption, 200);
    } catch (error) {
      return c.json({ message: 'Error updating prescreption', error }, 500);
    }
  }

}