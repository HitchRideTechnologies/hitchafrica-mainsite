import Head from 'next/head';
import Release from "@/pages/press-and-media/Release";

export default function News() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Head>
        <title>Hitch Africa - News</title>
        <meta name="description" content="Stay updated with the latest news and press releases from Hitch Africa." />
        <meta name="keywords" content="news, press releases, updates, Hitch Africa" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hitch Africa - News" />
        <meta property="og:description" content="Stay updated with the latest news and press releases from Hitch Africa." />
        <meta property="og:image" content="https://hitch.africa/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.52548336.png&w=256&q=75" />
        <meta property="og:url" content="https://hitch.africa" />
        <meta property="og:type" content="website" />
      </Head>
      <Release />
    </main>
  );
}