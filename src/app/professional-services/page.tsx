import Head from 'next/head';
import Hero from "@/pages/services/Hero";
import Seamless from "@/pages/home/Seamless";
import Work from "@/pages/services/Work";
import How from "@/pages/services/How";
import Become from "@/pages/services/Become";

export default function ProfessionalService() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Head>
        <title>Hitch Africa - Professional Services</title>
        <meta name="description" content="Discover our professional services. Learn how they work, explore our offerings, and find out how to become a partner." />
        <meta name="keywords" content="Professional Services, partner, Hitch Africa" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hitch Africa - Professional Services" />
        <meta property="og:description" content="Discover our professional services. Learn how they work, explore our offerings, and find out how to become a partner." />
        <meta property="og:image" content="https://hitch.africa/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.52548336.png&w=256&q=75" />
        <meta property="og:url" content="https://hitch.africa" />
        <meta property="og:type" content="website" />
      </Head>
      <Hero />
      <Work />
      <How />
      <Become />
      <Seamless />
    </main>
  );
}