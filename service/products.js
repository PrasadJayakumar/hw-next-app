import data from './products.json';

let allProducts = data;

// For demo purpose - Change the price randomly every 15 seconds
setInterval(() => {
  allProducts = allProducts.map((product) => {
    return {
      ...product,
      price: Math.floor(Math.random() * 200) + 100
    };
  });
}, 15000);

export function getProduct(productId) {
  let result = allProducts.filter((p) => p.id === parseInt(productId));
  if (result.length >= 1) return result[0];
  else return null;
}

// Fetch all products
export function getProducts() {
  const products = allProducts;
  return products;
}

// Fetch only first 2000 products
export function getProductIds() {
  const productIds = allProducts.filter((p) => p.id <= 2000).map((p) => p.id);
  return productIds;
}
