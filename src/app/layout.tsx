import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/nav-bar/NavBar";
import Footer from "@/components/layout/footer/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { BookmarksProvider } from "@/context/BookmarksContext";
import { ModalProvider } from "@/context/ModalContext";
import ModalHandler from "@/components/modal/ModalHandler";
import RouteGuard from "@/components/features/auth/RouteGuard";

export const metadata: Metadata = {
  title: "Bookmark Manager",
  description:
    "A simple bookmark manager to keep track of important links - made with Next.js, Supabase, TypeScript & TailwindCSS",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  fallback: ["system-ui", "sans-serif"],
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
          <BookmarksProvider>
            <ModalProvider>
              <ModalHandler>
                <NavBar />
                <main className="flex-1 flex flex-col">
                  <RouteGuard>{children}</RouteGuard>
                </main>
                <Footer />
              </ModalHandler>
            </ModalProvider>
          </BookmarksProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
