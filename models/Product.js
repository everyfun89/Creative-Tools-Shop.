import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  category: { type: String, enum: ['craft', 'drawing', 'trending'], required: true },
  supplierUrl: { type: String },
  isTrending: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
