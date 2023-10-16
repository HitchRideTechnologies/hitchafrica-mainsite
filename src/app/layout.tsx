import Header from "./Header";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "./Footer";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hitch Africa",
  description: "Hitch - Your everyday app for Africans",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
