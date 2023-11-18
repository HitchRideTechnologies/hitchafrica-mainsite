import One from "@/pages/business/One";
import Two from "@/pages/business/Two";
import Three from "@/pages/business/Three";
import Four from "@/pages/business/Four";
import Five from "@/pages/business/Five";
import Six from "@/pages/business/Six";
import Seamless from "@/pages/home/Seamless";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business | Hitch Africa",
  description:
    "Explore business opportunities with Hitch. Join our network of service providers and merchants.",
  keywords:
    "business, ride hailing, opportunities, service providers, merchants, Hitch Africa, Hitch Africa business, ride hailing, hitch pay, hitch food, hitch shopping mart, hitch service provider",
  openGraph: {
    title: "Business | Hitch Africa",
    description:
      "Explore business opportunities with Hitch. Join our network of service providers and merchants.",
    url: "https://hitch.africa/business",
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

export default function Business() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <One />
      <Two />
      <Three />
      <Four />
      <Five />
      <Six />
      <Seamless />
    </main>
  );
}
