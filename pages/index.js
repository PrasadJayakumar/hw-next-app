import Link from 'next/link';

import { getProducts } from 'service/products.js';

function Home(props) {
  const { productList } = props;

  const sgEl = [];
  const ssrEl = [];
  const csrEl = [];
  productList.forEach((product) => {
    ssrEl.push(
      <li key={product.id.toString()}>
        <Link href={`/ssr/${product.id}`}>{product.name}</Link>
      </li>
    );
    sgEl.push(
      <li key={product.id.toString()}>
        <Link href={`/sg/${product.id}`}>{product.name}</Link>
      </li>
    );
    csrEl.push(
      <li key={product.id.toString()}>
        <Link href={`/csr/${product.id}`}>{product.name}</Link>
      </li>
    );
  });

  if (ssrEl.length === 0) {
    return (
      <div>
        <h1>No Products</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Products</h1>
        <table id="products">
          <thead>
            <tr>
              <th>SSR</th>
              <th>SG</th>
              <th>CSR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{ssrEl}</td>
              <td>{sgEl}</td>
              <td>{csrEl}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

// Static Generation: Fetch data at build time
export async function getStaticProps(context) {
  return {
    props: { productList: getProducts() }
  };
}

export default Home;
