import mongoose from 'mongoose'

export type CategoryDocument = mongoose.Document & {
  name: string;
}

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
})

const Category = mongoose.model<CategoryDocument>('category', CategorySchema)

export default Category
