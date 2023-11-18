import Head from "next/head";
import Hero from "@/pages/home/Hero";
import Features from "@/pages/home/Features";
import How from "@/pages/home/How";
import Others from "@/pages/home/Others";
import Pay from "@/pages/home/Pay";
import Reviews from "@/pages/home/Reviews";
import Sub from "@/pages/home/Sub";
import Seamless from "@/pages/home/Seamless";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Hitch Africa",
  description: "Hitch - Your everyday app for Africans",
  keywords:
    "ride-hailing, delivery services, service providers, merchants, Hitch Africa, on-demand services, transportation, professionals network, all-in-one, package delivery, pay, shopping mart",
    metadataBase: new URL('https://hitch.africa'),
    openGraph: {
    title: "Hitch Africa",
    description: "Hitch - Your everyday app for Africans",
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

export default function Home() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Head>
        <title>Hitch Africa - Home</title>
        <meta
          name="description"
          content="Hitch - Your everyday app for Africans"
        />
        <meta
          name="keywords"
          content="ride-hailing, delivery services, service providers, merchants, Hitch Africa, on-demand services, transportation, professionals network, all-in-one, package delivery, pay, shopping mart"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hitch Africa - Home" />
        <meta
          property="og:description"
          content="Hitch - Your everyday app for Africans"
        />
        <meta
          property="og:image"
          content="https://hitch.africa/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.52548336.png&w=256&q=75"
        />
        <meta property="og:url" content="https://hitch.africa" />
        <meta property="og:type" content="website" />
      </Head>
      <Hero />
      <Features />
      <How />
      <Others />
      <Pay />
      <Seamless />
      <Reviews />
      <Sub />
    </main>
  );
}
