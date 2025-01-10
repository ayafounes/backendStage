
import { Hono } from 'hono';
import { AppointementController } from '../controllers/AppointementControllers';


const router = new Hono();
const appointementController = new AppointementController();

// Define routes and map them to controller methods
router.get('/', (c) => appointementController.addAppointement(c));
router.get('/:id', (c) => appointementController.getAppointementById(c));
router.post('/', (c) => appointementController.addAppointement(c));
router.put('/:id', (c) => appointementController.updateAppointement(c));

export default router;

