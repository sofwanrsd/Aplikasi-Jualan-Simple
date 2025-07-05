import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Footer from "@/components/Footer";

export const metadata = {
  title: "TAVEVE STORE",
  description: "Aplikasi Premium Legal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-black font-body bg-[#F8F8F8] min-h-screen">
        <CartProvider>
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
