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
  title: "Rescue Ready CPR & First Aid",
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
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
            {/* Brand */}
            <Link
              href="/"
              className="font-bold text-red-600 text-base sm:text-lg leading-tight whitespace-nowrap"
            >
              Rescue Ready CPR & First Aid
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-800">
              <Link href="/#training" className="hover:text-red-600">
                Training
              </Link>

              <Link href="/#faq" className="hover:text-red-600">
                FAQ
              </Link>

              <Link href="/pricing" className="hover:text-red-600">
                Pricing
              </Link>

              <Link
                href="/#pay"
                className="inline-flex items-center rounded-xl bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 whitespace-nowrap"
              >
                Book a Class
              </Link>
            </nav>

            {/* Mobile Menu */}
            <details className="md:hidden relative">
              <summary className="list-none cursor-pointer inline-flex items-center justify-center rounded-xl border px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50">
                Menu
              </summary>

              <div className="absolute right-0 mt-2 w-52 rounded-xl border bg-white shadow-lg overflow-hidden">
                <Link
                  href="/#training"
                  className="block px-4 py-3 text-sm text-gray-800 hover:bg-gray-50"
                >
                  Training
                </Link>

                <Link
                  href="/#faq"
                  className="block px-4 py-3 text-sm text-gray-800 hover:bg-gray-50"
                >
                  FAQ
                </Link>

                <Link
                  href="/pricing"
                  className="block px-4 py-3 text-sm text-gray-800 hover:bg-gray-50"
                >
                  Pricing
                </Link>

                <Link
                  href="/#pay"
                  className="block px-4 py-3 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800"
                >
                  Book a Class
                </Link>
              </div>
            </details>
          </div>
        </header>

        {/* Page content */}
        {children}
      </body>
    </html>
  );
}
