import jwt, { SignOptions } from 'jsonwebtoken';
import { User } from '../interfaces/user';
import userModel from '../models/user.model';

const JWT_SECRET = process.env.JWT_SECRET || 'batatinha';

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '15m',
};

const generateToken = (payload: User) => jwt.sign(payload, JWT_SECRET, JWT_CONFIG);

const create = async (user: User): Promise<string> => {
  const token = await generateToken(user);
  userModel.create(user);
  return token;
};

const selectId = async (user: string) => {
  const [[id]] = await userModel.selectId(user);
  console.log(id);

  return id;
};

export default {
  create,
  selectId,
};