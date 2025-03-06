import { Request, Response } from 'express';
import Category from '../models/categoryModel';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, description } = req.body;
    const category = await Category.create({ name, description });
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export const getCategories = async (req: Request, res: Response): Promise<void> => {
  try {

    const page = 1;
    const pageSize = 10; 

    const categories = await prisma.category.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize});
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  } finally {
    await prisma.$disconnect(); 
  }
};
