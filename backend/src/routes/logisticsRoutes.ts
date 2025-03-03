import { Router } from 'express';
import { updateStock, getLogistics } from '../controllers/logisticsController';

const router = Router();

router.post('/logistics', updateStock);
router.get('/logistics', getLogistics);

export default router;
