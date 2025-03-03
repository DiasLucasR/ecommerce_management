import { Request, Response } from 'express';
import Logistics from '../models/logisticsModel';

export const updateStock = async (req: Request, res: Response): Promise<void> => {
  try {
    const { productId, stock, location } = req.body;
    const logistics = await Logistics.findOneAndUpdate(
      { productId, location },
      { stock },
      { upsert: true, new: true }
    );
    res.status(200).json(logistics);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export const getLogistics = async (req: Request, res: Response): Promise<void> => {
  try {
    const logistics = await Logistics.find().populate('productId');
    res.status(200).json(logistics);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};
