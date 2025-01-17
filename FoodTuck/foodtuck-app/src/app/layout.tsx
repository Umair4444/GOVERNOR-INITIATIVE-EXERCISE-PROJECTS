import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Hamburger } from "@/components/Hamburger";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FoodTuck Parlor",
  description: "Online App for Foodies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
