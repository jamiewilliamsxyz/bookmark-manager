import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { ModalProvider } from "@/context/ModalContext";
import ModalHandler from "@/components/modal/ModalHandler";
import RouteGuard from "@/app/RouteGuard";

export const metadata: Metadata = {
  title: "Bookmark Manager",
  description:
    "A simple bookmark manager to keep track of important links - made with Next.js, Supabase, TypeScript & TailwindCSS",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col`}
      >
        <AuthProvider>
          <ModalProvider>
            <ModalHandler>
              <Navbar />
              <main className="flex-1 flex flex-col">
                <RouteGuard>{children}</RouteGuard>
              </main>
              <Footer />
            </ModalHandler>
          </ModalProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
