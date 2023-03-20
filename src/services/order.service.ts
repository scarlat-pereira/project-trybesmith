import orderModel from '../models/order.model';
import productModel from '../models/product.model';
import { Order } from '../interfaces/order';

const getAll = async (): Promise<Order[]> => {
  const orders = await orderModel.getAll();
  return orders;
};

const addOrder = async (userId: number, productsIds: number[]) => {
  const orderId = await orderModel.addOrder(userId);
  productsIds.forEach((e) => productModel.insert(orderId, e)); 
};
export default { getAll, addOrder };