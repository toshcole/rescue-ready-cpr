import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  description: "CPR and First Aid Certification Training",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="flex justify-between items-center px-6 py-4 shadow-md">
          <h1 className="font-bold text-lg">Rescue Ready CPR</h1>
          <div className="space-x-6">
            <Link href="/" className="hover:text-red-600">Home</Link>
            <Link href="/pricing" className="hover:text-red-600">Pricing</Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
