import data from './products.json';

export function getProduct(productId) {
  let result = data.filter((p) => p.id === parseInt(productId));
  if (result.length >= 1) return result[0];
  else return null;
}

// Fetch all products
export function getProducts() {
  const products = data;
  return products;
}

// Fetch only first 2000 products
export function getProductIds() {
  const productIds = data.filter((p) => p.id <= 2000).map((p) => p.id);
  return productIds;
}
