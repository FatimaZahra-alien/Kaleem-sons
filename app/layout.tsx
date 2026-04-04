import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { CartProvider } from "@/context/CartContext";
import CartSidebar from "@/components/CartSidebar";
import AuthModal from "@/components/AuthModal";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Kaleem Sons",
  description: "Elegant Design. Smart Solutions.",
};

// This is still a Server Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=Prata&family=Montserrat:wght@800;900&family=Bebas+Neue&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0,1" />
      </head>
      <body>
        <Providers>
          <CartProvider>
            {children}
            <CartSidebar />
            <AuthModal />
            {/* WhatsAppButton moved here — it works because it's a Client Component */}
            <WhatsAppButton />
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}