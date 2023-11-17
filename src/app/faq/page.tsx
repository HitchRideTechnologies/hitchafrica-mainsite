import Head from 'next/head';
import Seamless from "@/pages/home/Seamless";
import Hero from "@/pages/faq/Hero";
import One from "@/pages/faq/One";
import Two from "@/pages/faq/Two";
import Three from "@/pages/faq/Three";
import Four from "@/pages/faq/Four";
import Five from "@/pages/faq/Five";
import Ask from "@/pages/faq/Ask";

export default function FAQ() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Head>
        <title>Hitch Africa - FAQ</title>
        <meta name="description" content="Find answers to frequently asked questions about Hitch Africa, our services, and how to use them." />
        <meta name="keywords" content="FAQ, questions, answers, Hitch Africa" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hitch Africa - FAQ" />
        <meta property="og:description" content="Find answers to frequently asked questions about Hitch Africa, our services, and how to use them." />
        <meta property="og:image" content="https://hitch.africa/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.52548336.png&w=256&q=75" />
        <meta property="og:url" content="https://hitch.africa" />
        <meta property="og:type" content="website" />
      </Head>
      <Hero />
      <One />
      <Two />
      <Three />
      <Four />
      <Five />
      <Ask />
      <Seamless />
    </main>
  );
}