import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import videoRoutes from './routes/videos.js';
import cors from 'cors';

// Cargar las variables de entorno
dotenv.config();

const app = express();

// Configurar CORS para permitir solicitudes desde http://localhost:8080
//Asegúrate de que app.use(cors()) está antes de cualquier middleware que 
//gestione las solicitudes, como express.json() y las rutas. 
//Esto asegura que CORS sea verificado antes de procesar las solicitudes.

app.use(cors({
  origin: 'http://localhost:8081', // Cambia esto al origen de tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Encabezados permitidos
}));

// Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/videos', videoRoutes);

const PORT = process.env.PORT || 4000;

// Conectar a MongoDB usando Mongoose
mongoose.connect(process.env.MONGODB_URI, {
  //useNewUrlParser: true, esta opcion ya no es necesaria
  //useUnifiedTopology: true, esta opcion ya no es necesaria

  serverSelectionTimeoutMS: 5000 // Agrega esta opción para evitar advertencias de tiempo de espera
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
