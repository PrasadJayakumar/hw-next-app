import { useRouter } from 'next/router';
import Link from 'next/link';

import { getProductIds, getProduct } from 'service/products.js';

function ProductItem({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

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

// Static Generation: Fetch data at build time.
export async function getStaticProps({ params }) {
  let product = getProduct(params.productId);

  if (!product)
    return {
      notFound: true
    };

  return {
    props: { product }
  };
}

// Static Generation: Specify dynamic routes to pre-render pages based on data.
export async function getStaticPaths() {
  let data = getProductIds();

  const paths = data.map((productId) => ({
    params: { productId: productId.toString() }
  }));

  return { paths, fallback: true };
}

export default ProductItem;
