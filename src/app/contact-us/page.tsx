import Head from 'next/head';
import Start from "@/pages/get-started/Start";
import Seamless from "@/pages/home/Seamless";

export default function Home() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Head>
        <title>Hitch Africa - Contact Us</title>
        <meta name="description" content="Get in touch with us. We are here to help you with any questions or concerns you may have." />
        <meta name="keywords" content="contact us, support, Hitch Africa" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hitch Africa - Contact Us" />
        <meta property="og:description" content="Get in touch with us. We are here to help you with any questions or concerns you may have." />
        <meta property="og:image" content="https://hitch.africa/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.52548336.png&w=256&q=75" />
        <meta property="og:url" content="https://hitch.africa" />
        <meta property="og:type" content="website" />
      </Head>
      <Start />
      <Seamless />
    </main>
  );
}