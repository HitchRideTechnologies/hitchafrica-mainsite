import Hero from "@/pages/services/Hero";
import Seamless from "@/pages/home/Seamless";
import FAQ from "@/pages/home/FAQ";
import Work from "@/pages/services/Work";
import How from "@/pages/services/How";
import Become from "@/pages/services/Become";

export default function Home() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Hero />
      <Work />
      <How />
      <Become />
      <Seamless />
      <FAQ />
    </main>
  );
}
