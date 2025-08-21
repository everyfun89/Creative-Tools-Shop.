import connectMongo from '../../../lib/mongodb';
import Product from '../../../models/Product';

export default async function handler(req, res) {
  await connectMongo();

  const { id } = req.query;

  try {
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}
