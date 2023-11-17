import Head from 'next/head';
import Hero from "@/pages/ride/Hero";
import Why from "@/pages/ride/Why";
import How from "@/pages/ride/How";
import Become from "@/pages/ride/Become";
import Seamless from "@/pages/home/Seamless";

export default function Ride() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Head>
        <title>Hitch Africa - Ride</title>
        <meta name="description" content="Experience the future of transportation with Hitch Ride. Our service is designed to provide safe, comfortable, and affordable rides across Africa. Learn how it works, discover why people choose us, and find out how to become a driver partner." />
        <meta name="keywords" content="Hitch Ride, transportation, driver partner, Hitch Africa" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hitch Africa - Ride" />
        <meta property="og:description" content="Experience the future of transportation with Hitch Ride. Our service is designed to provide safe, comfortable, and affordable rides across Africa. Learn how it works, discover why people choose us, and find out how to become a driver partner." />
        <meta property="og:image" content="https://hitch.africa/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.52548336.png&w=256&q=75" />
        <meta property="og:url" content="https://hitch.africa" />
        <meta property="og:type" content="website" />
      </Head>
      <Hero />
      <Why />
      <How />
      <Become />
      <Seamless />
    </main>
  );
}