# 🛒 TAVEVE STORE - E-Commerce Aplikasi Premium Legal

**TAVEVE STORE** adalah proyek E-Commerce sederhana berbasis **Next.js App Router** dan **Tailwind CSS** yang menjual berbagai **aplikasi digital premium 100% legal** seperti Netflix, Canva, dan lainnya.

---

## 🚀 Fitur Utama

- ✅ Halaman Home dengan efek ketik dinamis
- ✅ Daftar produk dari API (https://fakestoreapi.com)
- ✅ Filter kategori: Streaming, AI, Education
- ✅ Halaman detail produk
- ✅ Sistem keranjang belanja (Cart)
- ✅ Checkout langsung ke WhatsApp
- ✅ Halaman kontak → kirim pesan ke WhatsApp
- ✅ UI bersih, responsif, dan konsisten dengan branding `#fe9313`
- ✅ Menggunakan `Poppins` untuk heading dan `Lato` untuk body text

---

## 🛠️ Teknologi

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** React Context API
- **API Produk:** [FakeStoreAPI](https://fakestoreapi.com/)
- **Checkout:** WhatsApp Redirect (`wa.me`)

---

## 📁 Struktur Proyek

```
src/
├── app/
│   ├── page.js                # Halaman home
│   ├── products/page.js       # Daftar produk
│   ├── product/[id]/page.js   # Detail produk
│   ├── cart/page.js           # Keranjang + Checkout ke WhatsApp
│   ├── contact/page.js        # Halaman hubungi kami
│
├── components/
│   ├── Navbar.js              # Navigasi atas
│   ├── Footer.js              # Footer brand
│   └── ProductCard.js         # Kartu produk
│
├── context/
│   └── CartContext.js         # Global cart state
│
├── styles/
│   └── globals.css            # Styling dasar
│
├── tailwind.config.js         # Konfigurasi Tailwind
└── ...
```

---

## 📦 Cara Menjalankan Proyek di Lokal

```bash
# 1. Clone repository
git clone https://github.com/sofwanrsd/Aplikasi-Jualan-Simple
cd taveve-store

# 2. Install dependensi
npm install

# 3. Jalankan di lokal
npm run dev
```

Akses di: [http://localhost:3000](http://localhost:3000)

---

## 📲 WhatsApp Checkout

Checkout produk akan langsung membuka WhatsApp dengan isi pesan otomatis:

```
Halo! Saya ingin memesan:
- Netflix Premium
- Canva Pro 6 bulan

Total: Rp xxx.xxx
```

---

## 🙌 Kontribusi

Proyek ini dibuat sebagai mini-project pribadi untuk pembelajaran Web Development menggunakan Next.js.  
Jika kamu ingin mengembangkan fitur seperti payment gateway, admin panel, atau autentikasi, feel free to fork & explore!

---

## 📄 Lisensi

MIT License — bebas digunakan dan dimodifikasi.
