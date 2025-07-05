"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter((product) => {
    if (category === "streaming") return product.category === "electronics";
    if (category === "ai") return product.category === "jewelery";
    if (category === "education") return product.category === "men's clothing";
    return true;
  });

  const buttonClass = (value) =>
    `w-full px-4 py-2 rounded text-left font-heading transition ${
      category === value
        ? "bg-black text-white"
        : "bg-[#fe9313] text-black hover:bg-orange-400"
    }`;

  return (
    <>
      <Navbar />
      <main className="min-h-screen p-6" style={{ backgroundColor: "#F8F8F8" }}>
        <h1 className="mb-8 text-2xl font-bold text-center text-black font-heading">
          Daftar Produk
        </h1>

        <div className="flex flex-col gap-6 md:flex-row">
          {/* Sidebar filter */}
          <aside className="w-full space-y-4 md:w-48">
            <button onClick={() => setCategory("")} className={buttonClass("")}>
              Semua
            </button>
            <button
              onClick={() => setCategory("streaming")}
              className={buttonClass("streaming")}
            >
              Streaming
            </button>
            <button
              onClick={() => setCategory("ai")}
              className={buttonClass("ai")}
            >
              AI
            </button>
            <button
              onClick={() => setCategory("education")}
              className={buttonClass("education")}
            >
              Education
            </button>
          </aside>

          {/* Produk list */}
          <section className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
