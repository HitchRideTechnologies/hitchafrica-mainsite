import Head from 'next/head';
import Hero from "@/pages/privacy/Hero";
import Policies from "@/pages/privacy/Policies";
import Seamless from "@/pages/home/Seamless";

export default function Privacy() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Head>
        <title>Hitch Africa - Privacy Policy</title>
        <meta name="description" content="Read our privacy policy to understand how we collect, use, protect, and handle your personal information." />
        <meta name="keywords" content="privacy policy, personal information, Hitch Africa" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hitch Africa - Privacy Policy" />
        <meta property="og:description" content="Read our privacy policy to understand how we collect, use, protect, and handle your personal information." />
        <meta property="og:image" content="https://hitch.africa/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.52548336.png&w=256&q=75" />
        <meta property="og:url" content="https://hitch.africa" />
        <meta property="og:type" content="website" />
      </Head>
      <Hero />
      <Policies />
      <Seamless />
    </main>
  );
}