"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    alert("✅ Produk berhasil ditambahkan ke keranjang!");
  };

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center bg-[#F8F8F8]">
          <p className="font-body text-gray-600">Loading...</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main
        className="min-h-screen px-6 py-12 flex flex-col items-center"
        style={{ backgroundColor: "#F8F8F8" }}
      >
        {/* Tombol Kembali */}
        <button
          onClick={() => router.back()}
          className="self-start mb-6 flex items-center gap-2 border border-black text-black font-heading px-4 py-1.5 rounded transition-all duration-200 hover:bg-black hover:text-white active:bg-[#4a4a4a] focus:ring-2 focus:ring-[#fe9313] focus:outline-none"
        >
          <span className="text-lg">←</span> Kembali
        </button>

        {/* Detail Produk */}
        <div className="max-w-4xl w-full bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row gap-8">
          <img
            src={product.image}
            alt={product.title}
            className="w-full md:w-1/2 h-64 object-contain rounded"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold font-heading mb-4 text-black">
              {product.title}
            </h1>
            <p className="text-gray-700 font-body leading-relaxed mb-4">
              {product.description}
            </p>
            <p className="text-lg font-bold font-body mb-6 text-black">
              Rp {Math.round(product.price * 16000).toLocaleString()}
            </p>

            <button
              onClick={handleAddToCart}
              className="bg-[#fe9313] hover:bg-orange-500 text-white font-heading px-6 py-2 rounded transition"
            >
              Tambah ke Keranjang
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
