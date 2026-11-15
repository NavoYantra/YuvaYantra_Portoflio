import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YuvaYantra Technology | Indigenous Technology for Classrooms & Industry",
  description: "We design and manufacture robotics, AI, IoT, drone and automation technology, and set up future-ready labs for schools, colleges and industry.",
  icons: {
    icon: [
      { url: "/images/yuvayantra-mark.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/images/yuvayantra-mark.png",
    apple: "/images/yuvayantra-mark.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
