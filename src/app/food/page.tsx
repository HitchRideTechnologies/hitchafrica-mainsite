import Head from 'next/head';
import Hero from "@/pages/food/Hero";
import How from "@/pages/food/How";
import Become from "@/pages/food/Become";
import Seamless from "@/pages/home/Seamless";
import Work from "@/pages/food/Work";
import Explore from "@/pages/food/Explore";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food | Hitch Africa",
  description: "Discover Hitch Food, our food delivery service. Learn how it works, explore our offerings, and find out how to become a partner.",
  keywords:
    "Hitch Food, food delivery, partner, Hitch Africa, Hitch food, order Hitch food",
  openGraph: {
    title: "Food | Hitch Africa",
    description: "Discover Hitch Food, our food delivery service. Learn how it works, explore our offerings, and find out how to become a partner.",
    url: "https://hitch.africa/food",
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
      <Hero />
      <Work />
      <Explore  />
      <How />
      <Become />
      <Seamless /> 
    </main>
  );
}