
import { Hono } from 'hono';
import { UserController } from '../controllers/UserControllers';

const router = new Hono();
const userController = new UserController();
// Define routes and map them to controller methods
router.get('/', (c) => userController.addSecretary(c));
router.get('/:id', (c) => userController.getSecretaryById(c));
router.post('/', (c) => userController.addSecretary(c));
router.put('/:id', (c) => userController.updateSecretary(c));

router.get('/', (c) => userController.addDoctor(c));
router.get('/:id', (c) => userController.getDoctorById(c));
router.post('/', (c) => userController.addDoctor(c));
router.put('/:id', (c) => userController.updateDoctor(c));

export default router;

