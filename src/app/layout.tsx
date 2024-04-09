import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./component/sidebar";
import { personalData } from "../../data/page-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raffey's Portfolio",
  description: "Muhammad Raffey's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col sm:flex-row bg-lb text-white ${inter.className}`}
      >
        <Sidebar data={personalData} />
        <main className="grow-full p-16 w-full sm:basis-2/3 ml-auto ">
          {children}
        </main>
      </body>
    </html>
  );
}
