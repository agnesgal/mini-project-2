import express from 'express';
import { createProduct } from '../controllers/product.controller.js';

const router = express.Router();
router.post('/', createProduct);  // POST /api/products
export default router;