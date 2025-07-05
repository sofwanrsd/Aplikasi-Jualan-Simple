"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Produk", href: "/products" },
  { label: "Kontak", href: "/contact" },
  { label: "🛒 Cart", href: "/cart" }, // ← Tambahkan ini
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-[#fe9313] px-6 py-4 flex justify-between items-center">
      <Link
        href="/"
        className="text-white font-bold text-xl font-heading hover:text-[#4A4A4A] transition"
      >
        TAVEVE STORE
      </Link>
      <ul className="flex gap-4 text-sm font-medium">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`px-3 py-1 rounded transition ${
                  isActive
                    ? "text-[#4A4A4A]"
                    : "text-white hover:text-[#4A4A4A]"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
