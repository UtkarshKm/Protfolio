import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Utkarsh Kumawat - Resume",
  description: "Computer Science student from Jaipur, passionate about problem-solving and software development.",
  keywords: ["Utkarsh Kumawat", "Resume", "Computer Science", "Software Developer", "Jaipur"],
  authors: [{ name: "Utkarsh Kumawat" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSlab.variable} font-roboto-slab antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
