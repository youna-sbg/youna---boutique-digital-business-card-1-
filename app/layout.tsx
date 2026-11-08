import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "YOUNA - Boutique Digital Business Card",
  description: "Premium digital business card for YOUNA women's fashion boutique, featuring editorial typography, RTL support, store information, and direct contact actions.",
  openGraph: {
    title: "YOUNA - Boutique Digital Business Card",
    description: "Premium digital business card for YOUNA women's fashion boutique, featuring editorial typography, RTL support, store information, and direct contact actions.",
    type: "website",
    locale: "fa_IR",
    siteName: "YOUNA Boutique",
  },
  twitter: {
    card: "summary_large_image",
    title: "YOUNA - Boutique Digital Business Card",
    description: "Premium digital business card for YOUNA women's fashion boutique, featuring editorial typography, RTL support, store information, and direct contact actions.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#761D32",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-[#F7F3ED] text-[#191919] font-['Vazirmatn',sans-serif] antialiased selection:bg-[#761D32] selection:text-[#F7F3ED]">
        {children}
      </body>
    </html>
  );
}
