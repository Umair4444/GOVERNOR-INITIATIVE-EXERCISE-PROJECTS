import type { Metadata } from "next";
import { Inter, Roboto, Great_Vibes  } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["500"] });
const great_Vibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });


export const metadata: Metadata = {
  title: "Food Tuck App",
  description: "Quality Online Restaurant App for foodies lovers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
