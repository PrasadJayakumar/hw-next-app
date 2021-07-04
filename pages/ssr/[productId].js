import Link from 'next/link';

import Card from 'components/Card.js';
import { getProduct } from 'service/products.js';

function ProductItem({ product }) {
  return (
    <div>
      <p className="py-3">
        <Link href="/">Home</Link>
      </p>
      <Card title={product.name} description={'\u20B9 ' + product.price} />
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
