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
          href="https://api.whatsapp.com/send?phone=2347055554168"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={whatsapp}
            alt=""
            className="fixed bottom-5 h-14 w-14 md:h-20 md:w-20 right-3 md:right-10 z-[9999]"
          />
        </a>
        <Footer />
      </body>
    </html>
  );
}
