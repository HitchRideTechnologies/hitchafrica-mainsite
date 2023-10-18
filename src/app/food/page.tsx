import Hero from "@/pages/food/Hero";
import How from "@/pages/food/How";
import Become from "@/pages/food/Become";
import Seamless from "@/pages/home/Seamless";
import FAQ from "@/pages/home/FAQ";
import Work from "@/pages/food/Work";
import Explore from "@/pages/food/Explore";

export default function Home() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Hero />
      <Work />
      <Explore  />
      <How />
      <Become />
      <Seamless />
      <FAQ />
    </main>
  );
}
