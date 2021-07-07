import axios from 'axios';

async function hasuraApi(relPath) {
  const resp = await axios.get(`${process.env.API_BASE_URL}${relPath}`, {
    headers: {
      'x-hasura-admin-secret': process.env.API_SECRET_KEY
    }
  });
  return resp.data;
}

export async function getProduct(productId) {
  try {
    let resp = await hasuraApi(`/api/rest/books/${productId}`);
    if (resp.books_by_pk) return resp.books_by_pk;
  } catch (err) {
    console.error(err);
  }
  return null;
}

export async function getProducts() {
  try {
    let resp = await hasuraApi(`/api/rest/books`);
    return resp.books;
  } catch (err) {
    console.error(err);
  }
  return [];
}

// Fetch partial set of products
export async function getProductsId() {
  try {
    let resp = await hasuraApi(`/api/rest/books-id`);
    if (resp.books) return resp.books;
  } catch (err) {
    console.error(err);
  }
  return null;
}
