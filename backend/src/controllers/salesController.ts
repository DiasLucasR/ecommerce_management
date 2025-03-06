import { Request, Response } from 'express';
import Product from '../models/productModel';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createSale = async (req: Request, res: Response): Promise<void> => {
    try {


        res.status(201).json([]);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};

export const getSales = async (req: Request, res: Response): Promise<void> => {

    try {
        const page = 1;
        const pageSize = 10; 

        const sales = await prisma.sales.findMany({
            skip: (page - 1) * pageSize,
            take: pageSize, 
            select: {
                id: true,
                totalPrice: true,
                salesProduct: {
                    select: {
                        quantity: true,
                    },
                },
            },
        }).then(sales =>
            sales.map(sale => ({
                IDSale: sale.id,
                SaleTotal: sale.totalPrice,
                ItemsTotal: sale.salesProduct.reduce((sum, sp) => sum + sp.quantity, 0),
            }))
        );
        res.status(200).json(sales);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    } finally {
        await prisma.$disconnect();
    }
};