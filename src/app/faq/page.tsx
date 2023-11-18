import Head from 'next/head';
import Seamless from "@/pages/home/Seamless";
import Hero from "@/pages/faq/Hero";
import One from "@/pages/faq/One";
import Two from "@/pages/faq/Two";
import Three from "@/pages/faq/Three";
import Four from "@/pages/faq/Four";
import Five from "@/pages/faq/Five";
import Ask from "@/pages/faq/Ask";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Hitch Africa",
  description: "Find answers to frequently asked questions about Hitch Africa, our services, and how to use them.",
  keywords:
    "FAQ, questions, answers, Hitch Africa, ask Hitch Africa",
  openGraph: {
    title: "FAQ | Hitch Africa",
    description: "Find answers to frequently asked questions about Hitch Africa, our services, and how to use them.",
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

export default function FAQ() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Hero />
      <One />
      <Two />
      <Three />
      <Four />
      <Five />
      <Ask /> 
      <Seamless />
    </main>
  );
}