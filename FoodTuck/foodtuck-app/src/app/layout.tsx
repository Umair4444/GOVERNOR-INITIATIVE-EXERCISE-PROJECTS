import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";
import Navbar from "@/components/NewNavbar";
import Footer from "@/components/Footer";
import { Hamburger } from "@/components/Hamburger";

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
        <Navbar />
        {/* <Hamburger /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
