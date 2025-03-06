import { Router } from 'express';
import { createSale, getSales } from '../controllers/salesController';

const router = Router();

router.post('/', createSale);
router.get('/', getSales);

export default router;
