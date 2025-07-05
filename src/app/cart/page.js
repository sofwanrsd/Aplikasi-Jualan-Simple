"use client";

import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * 16000, 0);

  const phone = "6281232729502";

  const handleCheckoutWhatsApp = () => {
    if (cart.length === 0) {
      alert("Keranjang masih kosong!");
      return;
    }

    const message = encodeURIComponent(
      `Halo! Saya ingin memesan:\n\n${cart
        .map((item) => `- ${item.title}`)
        .join("\n")}\n\nTotal: Rp ${total.toLocaleString()}`
    );

    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen p-6" style={{ backgroundColor: "#F8F8F8" }}>
        <h1 className="text-2xl font-bold font-heading text-center text-black mb-8">
          Keranjang & Checkout
        </h1>

        {cart.length === 0 ? (
          <p className="text-center font-body text-gray-600">
            Keranjang kamu masih kosong.
          </p>
        ) : (
          <div className="max-w-2xl mx-auto space-y-4">
            {cart.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 shadow flex items-center justify-between"
              >
                <div className="font-body">
                  <p className="font-semibold text-black">{item.title}</p>
                  <p className="text-gray-600 text-sm">
                    Rp {Math.round(item.price * 16000).toLocaleString()}
                  </p>
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
            ))}

            <div className="text-right font-heading font-bold text-lg text-black pt-4 border-t">
              Total: Rp {total.toLocaleString()}
            </div>

            <button
              onClick={handleCheckoutWhatsApp}
              className="w-full mt-4 bg-[#fe9313] text-white font-heading py-2 rounded hover:bg-orange-500 transition"
            >
              Kirim ke WhatsApp
            </button>
          </div>
        )}
      </main>
    </>
  );
}
