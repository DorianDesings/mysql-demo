import cors from 'cors';
import express, { json } from 'express';
import userRoutes from './routes/user.routes.js';
const app = express();

// Rutas

// Middlewares para cliente
app.use(cors());
app.use(json());

// Uso de rutas
app.use('/api', userRoutes);

//Errors
app.use((err, req, res, next) => {
  res.send({ error: err.message });
});

app.listen(3000, () => console.log('Servidor en ejecución en el puerto 3000'));
