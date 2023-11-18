import Head from "next/head";
import Hero from "@/pages/company/Hero";
import Statement from "@/pages/company/Statement";
import Tale from "@/pages/company/Tale";
import Team from "@/pages/company/Team";
import Seamless from "@/pages/home/Seamless";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Hitch Africa",
  description:
    "Learn more about Hitch, our mission, our story, and our team. Join us in our journey to provide everyday services for Africans.",
  keywords:
    "about us, mission, story, team, Hitch Africa, about Hitch Africa, Hitch Africa team",
  openGraph: {
    title: "About Us | Hitch Africa",
    description:
      "Learn more about Hitch, our mission, our story, and our team. Join us in our journey to provide everyday services for Africans.",
    url: "https://hitch.africa/company",
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

export default function Company() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Hero />
      <Statement />
      <Tale />
      <Team />
      <Seamless />
    </main>
  );
}
