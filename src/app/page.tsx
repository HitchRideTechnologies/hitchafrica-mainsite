import Hero from "@/pages/home/Hero";
import Features from "@/pages/home/Features";
import How from "@/pages/home/How";
import Others from "@/pages/home/Others";
import Pay from "@/pages/home/Pay";
import Reviews from "@/pages/home/Reviews";
import Sub from "@/pages/home/Sub";
import FAQ from "@/pages/home/FAQ";
import Seamless from "@/pages/home/Seamless";

export default function Home() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Hero />
      <Features />
      <How />
      <Others />
      <Pay />
      <Seamless />
      <Reviews />
      <FAQ />
      <Sub />
    </main>
  );
}
