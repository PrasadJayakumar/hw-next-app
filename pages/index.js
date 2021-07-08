import { getProducts } from 'service/products.js';

function Home(props) {
  const { productList } = props;

  const ssrEl = [];
  const ssgEl = [];
  const isrEl = [];
  const csrEl = [];
  productList.forEach((product) => {
    ssrEl.push(
      <li key={product.id.toString()} className="py-1">
        <a href={`/ssr/${product.id}`} target="rendering_frame">
          {product.name}
        </a>
      </li>
    );
    ssgEl.push(
      <li key={product.id.toString()} className="py-1">
        <a href={`/ssg-dynamic/${product.id}`} target="rendering_frame">
          {product.name}
        </a>
      </li>
    );
    isrEl.push(
      <li key={product.id.toString()} className="py-1">
        <a href={`/isr/${product.id}`} target="rendering_frame">
          {product.name}
        </a>
      </li>
    );
    csrEl.push(
      <li key={product.id.toString()} className="py-1">
        <a href={`/csr/${product.id}`} target="rendering_frame">
          {product.name}
        </a>
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
      <div className="grid grid-cols-3 gap-4">
        <div className="shadow-lg bg-white p-4">
          <p className="font-bold text-xl mb-2 py-3">Products</p>

          <div>
            <p className="font-bold bg-blue-100 border text-center px-8 py-1">
              SSR
            </p>
            <ul>{ssrEl}</ul>
          </div>

          <div>
            <p className="font-bold bg-blue-100 border text-center px-8 py-1">
              SSG
            </p>
            <ul>{ssgEl}</ul>
          </div>

          <div>
            <p className="font-bold bg-blue-100 border text-center px-8 py-1">
              ISR
            </p>
            <ul>{isrEl}</ul>
          </div>

          <div>
            <p className="font-bold bg-blue-100 border text-center px-8 py-1">
              CSR
            </p>
            <ul>{csrEl}</ul>
          </div>
        </div>
        {/* <div className="col-span-2">
          <iframe name="rendering_frame" frameBorder="0" width="600px" />
        </div> */}
      </div>
    );
  }
}

// Static Generation: Fetch data at build time
export async function getStaticProps(context) {
  return {
    props: { productList: await getProducts() }
  };
}

export default Home;
