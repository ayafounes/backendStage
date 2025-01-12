
import { Hono } from 'hono';
import { ConsultationController } from '../controllers/ConsultationControllers';


const router = new Hono();
const consultationController = new ConsultationController();

// Define routes and map them to controller methods
router.get('/:id', (c) =>consultationController.getConsultationById(c));
router.post('/', (c) => consultationController.addConsultation(c));
router.put('/:id', (c) => consultationController.updateConsultation(c));

export default router;

