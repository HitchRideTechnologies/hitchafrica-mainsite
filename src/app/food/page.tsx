import Head from 'next/head';
import Hero from "@/pages/food/Hero";
import How from "@/pages/food/How";
import Become from "@/pages/food/Become";
import Seamless from "@/pages/home/Seamless";
import Work from "@/pages/food/Work";
import Explore from "@/pages/food/Explore";

export default function Home() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Head>
        <title>Hitch Africa - Hitch Food</title>
        <meta name="description" content="Discover Hitch Food, our food delivery service. Learn how it works, explore our offerings, and find out how to become a partner." />
        <meta name="keywords" content="Hitch Food, food delivery, partner, Hitch Africa" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hitch Africa - Hitch Food" />
        <meta property="og:description" content="Discover Hitch Food, our food delivery service. Learn how it works, explore our offerings, and find out how to become a partner." />
        <meta property="og:image" content="https://hitch.africa/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.52548336.png&w=256&q=75" />
        <meta property="og:url" content="https://hitch.africa" />
        <meta property="og:type" content="website" />
      </Head>
      <Hero />
      <Work />
      <Explore  />
      <How />
      <Become />
      <Seamless />
    </main>
  );
}