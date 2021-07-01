import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

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
      <p>
        <Link href="/">Home</Link>
      </p>
      <h1>{product.id}</h1>
      <p>{product.name}</p>
    </div>
  );
}

export default ProductItem;
