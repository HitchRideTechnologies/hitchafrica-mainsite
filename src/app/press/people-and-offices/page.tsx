import Head from 'next/head';
import People from "@/pages/press-and-media/People";

export default function Home() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Head>
        <title>Hitch Africa - People and Offices</title>
        <meta name="description" content="Meet the people behind Hitch Africa and explore our offices across the continent." />
        <meta name="keywords" content="people, offices, team, Hitch Africa" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hitch Africa - People and Offices" />
        <meta property="og:description" content="Meet the people behind Hitch Africa and explore our offices across the continent." />
        <meta property="og:image" content="https://hitch.africa/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.52548336.png&w=256&q=75" />
        <meta property="og:url" content="https://hitch.africa" />
        <meta property="og:type" content="website" />
      </Head>
      <People />
    </main>
  );
}