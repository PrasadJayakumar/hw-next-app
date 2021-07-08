import { useState, useEffect } from 'react';
import axios from 'axios';

function Price({ productId, originalPrice }) {
  let [product, setProduct] = useState(null);

  useEffect(() => {
    console.log('checkme >>>', productId, originalPrice);
    if (!productId) return;

    axios
      .get(`/api/products/${productId}`)
      .then((resp) => {
        setProduct(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId, originalPrice]);

  let comp = <span>{'\u20B9' + originalPrice}</span>;

  if (product && originalPrice != product.price) {
    comp = (
      <span>
        <s>{'\u20B9' + originalPrice}</s>
        &nbsp; {'\u20B9' + product.price}
      </span>
    );
  }

  return comp;
}

export default Price;
