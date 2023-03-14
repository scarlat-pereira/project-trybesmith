import productModel from '../models/product.model';
import { Product, Order } from '../interfaces/product';

const createProduct = async (product: Product) => {
  const newProduct = await productModel.createProduct(product);
  return newProduct;
};

const getAll = async (): Promise<Order[]> => {
  const products = await productModel.getAll();
  return products;
};

export default { createProduct, getAll };