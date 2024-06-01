import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mangala Devi Singh Foundation",
  description: "A social Leader",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" href="/images/rahul.png" sizes="any" />  
      </Head> */}
      <body className={inter.className}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <main className=" flex flex-col min-h-screen items-center justify-between overflow-x-hidden p-0 m-0 ">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
