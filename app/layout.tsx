import type { Metadata } from "next";
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
  title: "دارالترجمه رسمی استار ترانس | ترجمه متون تخصصی و عمومی",
  description: "دارالترجمه رسمی با مجوز قوه قضاییه | ترجمه متون انگلیسی به فارسی و فارسی به انگلیسی | ترجمه تخصصی مقالات، مدارک دانشگاهی، قراردادها و کتب | تحویل فوری و کیفیت تضمینی",
   keywords: [
    "دارالترجمه میرداماد",
    "دفتر ترجمه میرداماد",
    "دارالترجمه پاسداران",
    "دفترترجمه پاسداران"
  ],
  icons: {
    icon: "/logo.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
