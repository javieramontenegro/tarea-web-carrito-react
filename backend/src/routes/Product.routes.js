import express from 'express';
import { addProduct, deleteProduct, getProducts } from '../controllers/Product.controller.js';
const router= express.Router();
router.get('/',getProducts);
router.post('/',addProduct);
router.delete('/:productId',deleteProduct);
export default router;