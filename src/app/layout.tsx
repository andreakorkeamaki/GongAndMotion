import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gongandmotion.com"),
  title: "Gong and Motion – Regenerate your body and mind",
  description:
    "Discover Qigong, massage, gong bath and Dancing Mindfulness: events and sessions for your holistic well-being. Book now!",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gong and Motion – Regenerate your body and mind",
    description:
      "Discover Qigong, massage, gong bath and Dancing Mindfulness: events and sessions for your holistic well-being. Book now!",
    url: "/",
    siteName: "Gong and Motion",
    type: "website",
    images: [
      {
        url: "/header-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Gong and Motion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gong and Motion – Regenerate your body and mind",
    description:
      "Discover Qigong, massage, gong bath and Dancing Mindfulness: events and sessions for your holistic well-being. Book now!",
    images: ["/header-bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-primary-dark font-sans`}>
        <Header />
        <main className="min-h-[80vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
