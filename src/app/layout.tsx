import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Starterpax",
  description: "Find the best starter items for various hobbies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col items-center justify-between p-10 min-h-full relative">
          <Navbar />
          <div className="pb-10">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
