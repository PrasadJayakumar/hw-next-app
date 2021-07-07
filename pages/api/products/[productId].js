import { getProduct } from 'service/products.js';

export default async function handler(req, res) {
  const { productId } = req.query;

  let product = await getProduct(productId);
  if (product) return res.status(200).json(product);
  return res.status(404);
}
