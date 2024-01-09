import Header from "./Header";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "./Footer";
const mont = Montserrat({ subsets: ["latin"] });


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
