import { Request, Response } from 'express';
import Product from '../models/productModel';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, description, price, category } = req.body;
    const product = await Product.create({ name, description, price, category });
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export const getProducts = async (req: Request, res: Response): Promise<void> => {

  try {

    const page = 1;
    const pageSize = 10; 

    const products = await prisma.product.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  } finally {
    await prisma.$disconnect(); 
  }
};