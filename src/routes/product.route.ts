import { Router } from 'express';
import productController from '../controllers/product.controller';
import validateProduct from '../middlewares/validateProduct';

const { validateName, validateAmount } = validateProduct;

const router = Router();

router.get('/', productController.getAll);
router.post('/', validateName, validateAmount, productController.createProduct);

export default router;