import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mangala Devi Singh Foundation",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=" flex flex-col min-h-screen items-center justify-between overflow-x-hidden p-0 m-0 ">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
