// pages/api/hello.ts
import { Hono } from 'hono';
import { NextApiRequest, NextApiResponse } from 'next';
import { checkDbConnection } from './db/connexion';  // Adjust path if needed

// Initialize Hono app
const app = new Hono();

// Log and check database connection when the app starts
console.log('App is starting...');
checkDbConnection();

// Define a route with Hono
app.get('/', (c) => {
  return c.text('Hello from Hono in Next.js!');
});


