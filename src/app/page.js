"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const fullText = `Kami hadir untuk memenuhi kebutuhan digitalmu dengan berbagai aplikasi premium pilihan. Nikmati hiburan tanpa batas dengan Netflix, tingkatkan kreativitasmu dengan Canva, dan jelajahi aplikasi lainnya yang kami tawarkan. Di TAVEVE Store, kami berkomitmen memberikan kemudahan, keamanan, dan harga yang bersahabat untuk pengalaman digital terbaikmu.`;

export default function HomePage() {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 15);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <>
      <Navbar />

      <main
        className="min-h-screen overflow-hidden flex flex-col items-center justify-center text-center px-6"
        style={{ backgroundColor: "#F8F8F8" }}
      >
        {/* Judul */}
        <h1 className="text-4xl font-bold font-heading text-black mb-6">
          Selamat Datang di TAVEVE STORE!
        </h1>

        {/* Deskripsi dengan efek ketik */}
        <p className="text-black font-body font-medium text-lg max-w-2xl mb-6 whitespace-pre-wrap leading-relaxed">
          {displayedText}
          {index < fullText.length && <span className="animate-pulse">|</span>}
        </p>

        {/* Tombol muncul setelah efek ketik selesai */}
        {index >= fullText.length && (
          <Link href="/products">
            <button className="font-heading bg-[#fe9313] text-white px-6 py-2 rounded hover:bg-orange-500 transition">
              Lihat Produk
            </button>
          </Link>
        )}
      </main>
    </>
  );
}
