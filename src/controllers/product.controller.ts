import { Request, Response } from 'express';
import productService from '../services/product.service';

const createProduct = async (req: Request, res: Response) => {
  const newProduct = await productService.createProduct(req.body);
  res.status(201).json(newProduct);
};

export default { createProduct };