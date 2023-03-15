import { Router } from 'express';
import userController from '../controllers/user.controller';
import validateUser from '../middlewares/validateUser';

const { validateUsername, validateVocation, validateLevel, validatePassword } = validateUser;

const router = Router();

router
  .post('/', validateUsername, validateVocation, validateLevel, validatePassword, userController
    .create);

export default router;