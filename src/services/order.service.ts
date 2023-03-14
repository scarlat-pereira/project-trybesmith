import orderModel from '../models/order.model';
import { Order } from '../interfaces/order';

const getAll = async (): Promise<Order[]> => {
  const orders = await orderModel.getAll();
  return orders;
};

export default {
  getAll,
};