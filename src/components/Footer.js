"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#fe9313] text-white font-heading py-4">
      <div className="flex flex-col items-center justify-between max-w-6xl gap-2 px-4 mx-auto md:flex-row">
        <p className="p-0 m-0 text-sm text-center md:text-left">
          © {new Date().getFullYear()} TAVEVE STORE. All rights reserved.
        </p>
        <div className="flex gap-4 p-0 m-0 text-sm">
          <Link href="/" className="hover:text-[#4A4A4A] transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-[#4A4A4A] transition">
            Produk
          </Link>
          <Link href="/contact" className="hover:text-[#4A4A4A] transition">
            Kontak
          </Link>
        </div>
      </div>
    </footer>
  );
}
