"use client";

import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition hover:shadow-lg">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 object-contain p-4 bg-[#F8F8F8]"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-base font-bold font-heading text-black mb-2 line-clamp-2">
          {product.title}
        </h2>
        <p className="text-sm font-body text-gray-700 mb-4">
          Rp {Math.round(product.price * 16000).toLocaleString()}
        </p>
        <Link href={`/product/${product.id}`} className="mt-auto">
          <button className="w-full font-heading bg-[#fe9313] text-white px-4 py-2 rounded hover:bg-orange-500 transition">
            Lihat Detail
          </button>
        </Link>
      </div>
    </div>
  );
}
