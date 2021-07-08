import dynamic from 'next/dynamic';

const PriceComp = dynamic(() => import('components/Price.js'), { ssr: false });

function PriceCard({ product }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* <img class="w-full" src="/mountain.jpg" alt="Mountain"> */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl">{product.name}</div>
        <div className="text-m mb-2">{' by ' + product.authors}</div>
        <p className="text-gray-700 text-base">
          <PriceComp productId={product.id} originalPrice={product.price} />
        </p>
      </div>
    </div>
  );
}

export default PriceCard;
