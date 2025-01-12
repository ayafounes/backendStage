import { Hono } from 'hono';
import { checkDbConnection } from './db/connexion';  // Adjust path if needed
import userRoutes from './routes/user.route';  // Adjust path if needed
import appointementRoutes from './routes/appointement.route';  // Adjust path if needed
import consultationRoutes from './routes/consultation.route';  // Adjust path if needed
import prescreptionRoutes from './routes/prescreption.route';  // Adjust path if needed
import patientRoutes from './routes/patient.route';  // Adjust path if needed

// Initialize Hono app
const app = new Hono();
app.route('/api/user', userRoutes);
app.route('/api/appointement', appointementRoutes);
app.route('/api/consultation', consultationRoutes);
app.route('/api/prescreption', prescreptionRoutes);
app.route('/api/patient', patientRoutes);

// Log and check database connection when the app starts
console.log('App is starting...');
checkDbConnection();

// Define a route with Hono
app.get('/', (c) => {
  return c.text('Hello from Hono in Next.js!');
});



