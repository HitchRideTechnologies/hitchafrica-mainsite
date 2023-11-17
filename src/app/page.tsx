import Head from "next/head";
import Hero from "@/pages/home/Hero";
import Features from "@/pages/home/Features";
import How from "@/pages/home/How";
import Others from "@/pages/home/Others";
import Pay from "@/pages/home/Pay";
import Reviews from "@/pages/home/Reviews";
import Sub from "@/pages/home/Sub";
import Seamless from "@/pages/home/Seamless";

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
        <meta property="og:image" content="https://hitch.africa/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.52548336.png&w=256&q=75" />
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
