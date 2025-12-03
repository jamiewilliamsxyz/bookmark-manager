import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://bookmark-manager-io.vercel.app"),

  title: "Bookmark Manager",
  description:
    "Stop losing important links. Save, tag and search them in a lightweight, streamlined interface",
  keywords: [
    "bookmark manager",
    "online bookmark manager",
    "bookmark management tool",
    "save links online",
    "link organiser",
    "web bookmark organiser",
    "cloud bookmark manager",
    "link manager",
    "bookmark storage",
    "manage bookmarks online",
    "bookmark app",
    "distraction-free bookmark manager",
    "minimalist bookmark tool",
  ],
  authors: [{ name: "Jamie Williams" }],
  openGraph: {
    type: "website",
    url: "https://bookmark-manager-io.vercel.app",
    title: "Bookmark Manager",
    description:
      "Stop losing important links. Save, tag and search them in a lightweight, streamlined interface",
    siteName: "Bookmark Manager",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bookmark Manager",
    description:
      "Stop losing important links. Save, tag and search them in a lightweight, streamlined interface",
  },
  icons: { icon: "/favicon.ico" },
  alternates: { canonical: "https://bookmark-manager-io.vercel.app" },
};
