import connectMongo from '../../../lib/mongodb';
import Product from '../../../models/Product';

export default async function handler(req, res) {
  await connectMongo();

  const { category, sort } = req.query;
  let query = {};
  if (category) query.category = category;

  let products = await Product.find(query);

  if (sort === 'popular') {
    products = products.filter(p => p.isTrending);
  }

  res.status(200).json(products);
}
