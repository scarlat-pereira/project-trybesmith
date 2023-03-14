import productModel from '../models/product.model';
import { Product } from '../interfaces/product';

const createProduct = async (product: Product) => {
  const newProduct = await productModel.createProduct(product);
  return newProduct;
};

export default { createProduct };