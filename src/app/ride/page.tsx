import Head from 'next/head';
import Hero from "@/pages/ride/Hero";
import Why from "@/pages/ride/Why";
import How from "@/pages/ride/How";
import Become from "@/pages/ride/Become";
import Seamless from "@/pages/home/Seamless";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ride | Hitch Africa",
  description: "Experience the future of transportation with Hitch Ride. Our service is designed to provide safe, comfortable, and affordable rides across Africa. Learn how it works, discover why people choose us, and find out how to become a driver partner.",
  keywords:
    "Hitch Ride, transportation, driver partner, Hitch Africa, Hitch Africa Rider, Hitch driver",
  openGraph: {
    title: "Ride | Hitch Africa",
    description: "Experience the future of transportation with Hitch Ride. Our service is designed to provide safe, comfortable, and affordable rides across Africa. Learn how it works, discover why people choose us, and find out how to become a driver partner.",
    url: "https://hitch.africa",
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

export default function Ride() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Hero />
      <Why />
      <How />
      <Become />
      <Seamless />
    </main>
  );
}