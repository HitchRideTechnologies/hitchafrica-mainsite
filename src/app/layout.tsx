import Header from "./Header";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "./Footer";
import whatsapp from "@/assets/whatsapp.png";
import Image from "next/image";
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
        <a
          href="https://api.whatsapp.com/send?phone=4407713030"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={whatsapp}
            alt=""
            className="fixed bottom-5 h-12 w-12 md:h-16 md:w-16 right-3 md:right-10 z-[9999]"
          />
        </a>
        <Footer />
      </body>
    </html>
  );
}
