import express from 'express';
import connectDB from './src/config/db.js';

import morgan from 'morgan';
import ProductRoutes from './src/routes/Product.routes.js';
import OrderRoutes from './src/routes/Order.routes.js';

import cors from 'cors';

connectDB();
const app= express();
app.use(express.json());
app.use(morgan('dev'));
const PORT = process.env.PORT || 5000;

//ruta//
app.use('/api/products',ProductRoutes);
app.use('/api/orders', OrderRoutes);

// Configurar CORS
app.use(cors()); // Esto permite que el frontend haga peticiones al backend

app.listen(PORT, '0.0.0.0', ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);

});