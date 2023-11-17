import Head from "next/head";
import Hero from "@/pages/pay/Hero";
import Pay from "@/pages/pay/Pay";
import Seamless from "@/pages/home/Seamless";
import Sub from "@/pages/home/Sub";
import Work from "@/pages/pay/Work";
import Features from "@/pages/pay/Features";
import Become from "@/pages/pay/Become";

export default function Home() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Head>
        <title>Hitch Africa - Pay</title>
        <meta
          name="description"
          content="Explore Hitch Pay, our innovative payment service designed to make transactions easy and secure. With Hitch Pay, you can send money, pay bills, and manage your finances with ease. Join us and become a partner in our mission to revolutionize payments in Africa."
        />
        <meta
          name="keywords"
          content="Hitch Pay, payment service, partner, Hitch Africa"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hitch Africa - Pay" />
        <meta
          property="og:description"
          content="Explore Hitch Pay, our innovative payment service designed to make transactions easy and secure. With Hitch Pay, you can send money, pay bills, and manage your finances with ease. Join us and become a partner in our mission to revolutionize payments in Africa."
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
      <Work />
      <Pay />
      <Seamless />
      <Become />
      <Sub />
    </main>
  );
}
