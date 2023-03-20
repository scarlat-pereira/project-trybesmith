import { Router } from 'express';
import orderController from '../controllers/order.controller';
import validateToken from '../middlewares/validateToken';
import validateOrder from '../middlewares/validateOrder';

const { validateProductsIds } = validateOrder;
const { authToken } = validateToken;

const router = Router();

router.get('/', orderController.getAll);
router.post('/', authToken, validateProductsIds, orderController.createOrder);

export default router;