import Head from 'next/head';
import Hero from "@/pages/company/Hero";
import Statement from "@/pages/company/Statement";
import Tale from "@/pages/company/Tale";
import Team from "@/pages/company/Team";
import Seamless from "@/pages/home/Seamless";

export default function Company() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Head>
        <title>Hitch Africa - About Us</title>
        <meta name="description" content="Learn more about Hitch, our mission, our story, and our team. Join us in our journey to provide everyday services for Africans." />
        <meta name="keywords" content="about us, mission, story, team, Hitch Africa" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hitch Africa - About Us" />
        <meta property="og:description" content="Learn more about Hitch, our mission, our story, and our team. Join us in our journey to provide everyday services for Africans." />
        <meta property="og:image" content="https://hitch.africa/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.52548336.png&w=256&q=75" />
        <meta property="og:url" content="https://hitch.africa" />
        <meta property="og:type" content="website" />
      </Head>
      <Hero />
      <Statement />
      <Tale />
      <Team />
      <Seamless />
    </main>
  );
}