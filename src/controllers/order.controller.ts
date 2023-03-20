import { Request, Response } from 'express';
import orderService from '../services/order.service';
import userService from '../services/user.service';

const getAll = async (_req: Request, res: Response) => {
  const orders = await orderService.getAll();
  res.status(200).json(orders);
};

const createOrder = async (req: Request, res: Response) => {
  const { productsIds } = req.body;
  // console.log(productsIds);

  const { user } = req.body;
  // console.log(user);
  const a = await userService.selectId(user.username);
  // console.log(userId[0]);
  const result = {
    userId: a.id,
    productsIds,
  };
  await orderService.addOrder(a.id, productsIds);
  return res.status(201).json(result);
};

export default {
  getAll,
  createOrder,
};