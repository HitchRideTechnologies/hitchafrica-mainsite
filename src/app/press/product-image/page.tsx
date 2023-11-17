import Head from 'next/head';
import Images from "@/pages/press-and-media/Images";

export default function Home() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Head>
        <title>Hitch Africa - Product Images</title>
        <meta name="description" content="Explore high-quality images of our products and services." />
        <meta name="keywords" content="product images, high-quality, Hitch Africa" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hitch Africa - Product Images" />
        <meta property="og:description" content="Explore high-quality images of our products and services." />
        <meta property="og:image" content="https://hitch.africa/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.52548336.png&w=256&q=75" />
        <meta property="og:url" content="https://hitch.africa" />
        <meta property="og:type" content="website" />
      </Head>
      <Images />
    </main>
  );
}