import type { Metadata } from "next";
import "./globals.css";

// Archivo que se va encargar de nuestras fuentes
import {inter} from "../config/font";

export const metadata: Metadata = {
  title: "Teslo | Shop",
  description: "Una tienda virtual para comprar productos ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
