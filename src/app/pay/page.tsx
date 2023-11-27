import Head from "next/head";
import Hero from "@/pages/pay/Hero";
import Pay from "@/pages/pay/Pay";
import Seamless from "@/pages/home/Seamless";
import Sub from "@/pages/home/Sub";
import Work from "@/pages/pay/Work";
import Features from "@/pages/pay/Features";
import Become from "@/pages/pay/Become";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Hitch Africa",
  description: "Explore Hitch Pay, our innovative payment service designed to make transactions easy and secure. With Hitch Pay, you can send money, pay bills, and manage your finances with ease. Join us and become a partner in our mission to revolutionize payments in Africa.",
  keywords:
    "Hitch Pay, payment service, partner, Hitch Africa, seamless payment,",
  openGraph: {
    title: "Contact Us | Hitch Africa",
    description: "Explore Hitch Pay, our innovative payment service designed to make transactions easy and secure. With Hitch Pay, you can send money, pay bills, and manage your finances with ease. Join us and become a partner in our mission to revolutionize payments in Africa.",
    url: "https://hitch.africa/pay",
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
      <Features />
      <Work />
      <Pay />
      <Seamless />
      <Become />
      <Sub />
    </main>
  );
}
