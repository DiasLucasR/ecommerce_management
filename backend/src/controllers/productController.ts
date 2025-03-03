import { Request, Response } from 'express';
import Product from '../models/productModel';

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
    const products = await Product.find().populate('category');
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};
