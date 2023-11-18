import Head from 'next/head';
import Hero from "@/pages/services/Hero";
import Seamless from "@/pages/home/Seamless";
import Work from "@/pages/services/Work";
import How from "@/pages/services/How";
import Become from "@/pages/services/Become";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Services | Hitch Africa",
  description: "Discover our professional services. Learn how they work, explore our offerings, and find out how to become a partner.",
  keywords:
    "Professional Services, partner, Hitch Africa, Hitch Africa service provider, Hitch merchant",
  openGraph: {
    title: "Professional Services | Hitch Africa",
    description: "Discover our professional services. Learn how they work, explore our offerings, and find out how to become a partner.",
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

export default function ProfessionalService() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Hero />
      <Work />
      <How />
      <Become />
      <Seamless /> 
    </main>
  );
}