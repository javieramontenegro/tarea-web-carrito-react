import express from 'express';
import connectDB from './src/config/db.js';

import morgan from 'morgan';
import ProductRoutes from './src/routes/Product.routes.js';
import OrderRoutes from './src/routes/Order.routes.js';

connectDB();
const app= express();
app.use(express.json());
app.use(morgan('dev'));
const PORT = process.env.PORT || 5000;

//ruta//
app.use('/api/products',ProductRoutes);
app.use('/api/orders', OrderRoutes);

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
   
});