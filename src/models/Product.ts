import mongoose, { Document } from 'mongoose'

export type ProductDocument = Document & {
  name: string;
  category: string;
  price: number;
  description?: string;
}

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: [
    {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'category',
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  description: String,
})

export default mongoose.model<ProductDocument>('product', ProductSchema)
