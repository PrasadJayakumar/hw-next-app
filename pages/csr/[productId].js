import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Card from 'components/Card.js';
import axios from 'axios';

function ProductItem() {
  const router = useRouter();
  const { productId } = router.query;

  let [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get(`/api/products/${productId}`)
      .then((resp) => {
        setProduct(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);

  if (!product)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  return (
    <div>
      <p className="py-3">
        <Link href="/">Home</Link>
      </p>
      <Card title={product.name} description={'\u20B9 ' + product.price} />
    </div>
  );
}

export default ProductItem;
