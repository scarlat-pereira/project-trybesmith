import { Request, Response, NextFunction } from 'express';

import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'batatinha';

const authToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send({ message: 'Token not found' });
  }
  try {
    const payload = jwt.verify(token, secret);
    req.body.user = payload;

    return next();
  } catch (e) {
    return res.status(401).send({ message: 'Invalid token' });
  }
};

export default { authToken };