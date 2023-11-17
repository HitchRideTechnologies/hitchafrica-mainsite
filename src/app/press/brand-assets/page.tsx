import Head from 'next/head';
import Brand from "@/pages/press-and-media/Brand";

export default function Home() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Head>
        <title>Hitch Africa - Brand Assets</title>
        <meta name="description" content="Explore our brand assets, including logos, images, and guidelines for their use." />
        <meta name="keywords" content="brand assets, logos, images, guidelines, Hitch Africa" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hitch Africa - Brand Assets" />
        <meta property="og:description" content="Explore our brand assets, including logos, images, and guidelines for their use." />
        <meta property="og:image" content="https://hitch.africa/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.52548336.png&w=256&q=75" />
        <meta property="og:url" content="https://hitch.africa" />
        <meta property="og:type" content="website" />
      </Head>
      <Brand />
    </main>
  );
}