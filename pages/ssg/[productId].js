import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

import Card from 'components/Card.js';
import { getProductsId, getProduct } from 'service/products.js';

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
      <Head>
        <title>SSG - {product.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p className="py-3">
        <Link href="/">Home</Link>
      </p>
      <Card
        title={product.name}
        subtitle={' by ' + product.author}
        description={'\u20B9 ' + product.price}
      />
    </div>
  );
}

// Static Generation: Fetch data at build time.
export async function getStaticProps({ params }) {
  let product = await getProduct(params.productId);

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
  let data = await getProductsId();

  const paths = data.map((product) => ({
    params: { productId: product.id.toString() }
  }));

  return { paths, fallback: false };
}

export default ProductItem;
