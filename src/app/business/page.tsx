import Head from "next/head";
import One from "@/pages/business/One";
import Two from "@/pages/business/Two";
import Three from "@/pages/business/Three";
import Four from "@/pages/business/Four";
import Five from "@/pages/business/Five";
import Six from "@/pages/business/Six";
import Seamless from "@/pages/home/Seamless";

export default function Business() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Head>
        <title>Hitch Africa - Business</title>
        <meta
          name="description"
          content="Explore business opportunities with Hitch. Join our network of service providers and merchants."
        />
        <meta
          name="keywords"
          content="business, opportunities, service providers, merchants, Hitch Africa"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hitch.Africa - Business" />
        <meta
          property="og:description"
          content="Explore business opportunities with Hitch. Join our network of service providers and merchants."
        />
        <meta
          property="og:image"
          content="https://hitch.africa/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.52548336.png&w=256&q=75"
        />
        <meta property="og:url" content="https://hitch.africa" />
        <meta property="og:type" content="website" />
      </Head>
      <One />
      <Two />
      <Three />
      <Four />
      <Five />
      <Six />
      <Seamless />
    </main>
  );
}
