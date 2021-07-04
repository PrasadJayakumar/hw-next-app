function Card({ title, description }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* <img class="w-full" src="/mountain.jpg" alt="Mountain"> */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}

export default Card;
