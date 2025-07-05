"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const phone = "6281232729502";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !message) {
      alert("Mohon isi semua data.");
      return;
    }

    const waMessage = encodeURIComponent(
      `Halo! Saya *${name}* ingin bertanya:\n\n${message}`
    );

    const url = `https://wa.me/${phone}?text=${waMessage}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />
      <main
        className="min-h-screen px-6 py-12"
        style={{ backgroundColor: "#F8F8F8" }}
      >
        <h1 className="text-2xl font-bold font-heading text-center text-black mb-8">
          Hubungi Kami
        </h1>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow space-y-4"
        >
          <div>
            <label className="block font-body mb-1 text-sm text-black">
              Nama
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama kamu"
              className="w-full border border-gray-300 rounded px-4 py-2 font-body text-black placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block font-body mb-1 text-sm text-black">
              Pesan
            </label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Apa yang ingin kamu tanyakan?"
              className="w-full border border-gray-300 rounded px-4 py-2 font-body text-black placeholder-gray-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#fe9313] text-white font-heading py-2 rounded hover:bg-orange-500 transition"
          >
            Kirim ke WhatsApp
          </button>
        </form>
      </main>
    </>
  );
}
