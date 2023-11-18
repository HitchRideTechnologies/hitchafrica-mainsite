import Head from 'next/head';
import People from "@/pages/press-and-media/People";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "People & Offices | Hitch Africa",
  description: "Meet the people behind Hitch Africa and explore our offices across the continent.",
  keywords:
    "people, offices, team, Hitch Africa, Hitch Africa team, Hitch Africa location",
  openGraph: {
    title: "People & Offices | Hitch Africa",
    description: "Meet the people behind Hitch Africa and explore our offices across the continent.",
    url: "https://hitch.africa/press/people-and-offices",
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
      <Head>
        <title>Hitch Africa - People and Offices</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hitch Africa - People and Offices" />
        <meta property="og:description" content="Meet the people behind Hitch Africa and explore our offices across the continent." />
        <meta property="og:image" content="https://hitch.africa/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.52548336.png&w=256&q=75" />
        <meta property="og:url" content="https://hitch.africa" />
        <meta property="og:type" content="website" />
      </Head>
      <People />
    </main>
  );
}