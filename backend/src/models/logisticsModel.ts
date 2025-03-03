import mongoose, { Schema, Document } from 'mongoose';

export interface ILogistics extends Document {
  productId: mongoose.Schema.Types.ObjectId;
  stock: number;
  location: string;
}

const logisticsSchema: Schema = new Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  stock: { type: Number, required: true },
  location: { type: String, required: true },
});

const Logistics = mongoose.model<ILogistics>('Logistics', logisticsSchema);
export default Logistics;
