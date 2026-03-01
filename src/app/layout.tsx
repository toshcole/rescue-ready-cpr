import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Rescue Ready CPR",
  description: "CPR/BLS Training",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Top Nav */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-bold text-gray-900 text-lg">
              Rescue Ready CPR
            </Link>

            <nav className="flex items-center gap-6 text-sm font-medium text-gray-700">
              <Link href="/#training" className="hover:text-gray-900">
                Training
              </Link>
              <Link href="/pricing" className="hover:text-gray-900">
                Pricing
              </Link>
              <Link
                href="/#book"
                className="inline-flex items-center rounded-xl bg-gray-900 px-4 py-2 text-white hover:bg-gray-800"
              >
                Book a Class
              </Link>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
