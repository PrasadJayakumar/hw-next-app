import Link from 'next/link';

import { getProduct } from 'service/products.js';

function ProductItem({ product }) {
  return (
    <div>
      <p>
        <Link href="/">Home</Link>
      </p>
      <h1>{product.id}</h1>
      <p>{product.name}</p>
    </div>
  );
}

// Server-side Rendering: Fetch data on each request
export async function getServerSideProps({ query }) {
  const { productId } = query;
  let product = getProduct(productId);

  if (!product)
    return {
      notFound: true
    };

  return {
    props: { product }
  };
}

export default ProductItem;
