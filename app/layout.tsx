import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ScrollTop } from 'primereact/scrolltop';
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Albert Geoff S. Buison - Professional Portfolio",
  description: "Welcome to the professional portfolio of Albert Geoff S. Buison.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-zinc-50 dark:bg-black`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
