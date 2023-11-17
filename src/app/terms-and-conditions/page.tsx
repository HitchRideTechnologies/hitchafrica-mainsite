import Head from 'next/head';
import Hero from "@/pages/terms/Hero";
import Terms from "@/pages/terms/Terms";
import Seamless from "@/pages/home/Seamless";

export default function Home() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Head>
        <title>Hitch Africa - Terms and Conditions</title>
        <meta name="description" content="Read our terms and conditions to understand the rules and guidelines that govern your use of our services." />
        <meta name="keywords" content="terms and conditions, rules, guidelines, Hitch Africa" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hitch Africa - Terms and Conditions" />
        <meta property="og:description" content="Read our terms and conditions to understand the rules and guidelines that govern your use of our services." />
        <meta property="og:image" content="https://hitch.africa/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.52548336.png&w=256&q=75" />
        <meta property="og:url" content="https://hitch.africa" />
        <meta property="og:type" content="website" />
      </Head>
      <Hero />
      <Terms />
      <Seamless />
    </main>
  );
}