import Head from 'next/head';
import Images from "@/pages/press-and-media/Images";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Images | Hitch Africa",
  description: "Explore high-quality images of our products and services.",
  keywords:
    "product images, high-quality, Hitch Africa, Hitch App images",
  openGraph: {
    title: "Product Images | Hitch Africa",
    description: "Explore high-quality images of our products and services.",
    url: "https://hitch.africa/press/product-image",
    siteName: "Hitch.Africa",
    images: [
      {
        url: "https://hitch.africa/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.52548336.png&w=256&q=75",
        width: 800,
        height: 600,
      },
      {
        url: "https://hitch.africa/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.52548336.png&w=256&q=75",
        width: 1800,
        height: 1600,
        alt: "icon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  assets: ["https://hitch.africa/press/brand-assets"],
};

export default function Home() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Images />
    </main>
  );
}