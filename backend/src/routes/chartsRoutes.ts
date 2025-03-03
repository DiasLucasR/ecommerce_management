import { Router } from 'express';
import { createCategory, getCategories } from '../controllers/categoryController';
import { averageStockTime, averageTicket, customerRecurrence, dailyWeeklyMonthlyRevenue, getAllCharts, quarterlyRevenueGrowth, salesByProductCategory, salesByRegion, topSellingProducts } from '../controllers/chartController';

const router = Router();

router.get('/', getAllCharts);
router.get('/revenue', dailyWeeklyMonthlyRevenue);
router.get('/sales-by-product-category', salesByProductCategory);
router.get('/sales-by-region', salesByRegion);
router.get('/average-ticket', averageTicket);
router.get('/top-products', topSellingProducts);
router.get('/stock-duration', averageStockTime);
router.get('/customer-recurrence', customerRecurrence);
router.get('/quarterly-revenue', quarterlyRevenueGrowth);


export default router;
