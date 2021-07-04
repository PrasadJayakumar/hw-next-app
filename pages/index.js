import Link from 'next/link';

import { getProducts } from 'service/products.js';

function Home(props) {
  const { productList } = props;

  const sgEl = [];
  const ssrEl = [];
  const csrEl = [];
  productList.forEach((product) => {
    ssrEl.push(
      <li key={product.id.toString()} className="py-1">
        <Link href={`/ssr/${product.id}`}>{product.name}</Link>
      </li>
    );
    sgEl.push(
      <li key={product.id.toString()} className="py-1">
        <Link href={`/sg/${product.id}`}>{product.name}</Link>
      </li>
    );
    csrEl.push(
      <li key={product.id.toString()} className="py-1">
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
        <p className="font-bold text-xl mb-2 py-3">Products</p>
        <table id="products" className="shadow-lg bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm h-1">
              <th className="bg-blue-100 border text-center px-8 py-1">SSR</th>
              <th className="bg-blue-100 border text-center px-8 py-1">SG</th>
              <th className="bg-blue-100 border text-center px-8 py-1">CSR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-8 py-3">
                <ul>{ssrEl}</ul>
              </td>
              <td className="border px-8 py-3">
                <ul>{sgEl}</ul>
              </td>
              <td className="border px-8 py-3">
                <ul>{csrEl}</ul>
              </td>
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
