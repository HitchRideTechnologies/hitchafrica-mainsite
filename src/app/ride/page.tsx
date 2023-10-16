import Hero from "@/pages/ride/Hero"
import Why from "@/pages/ride/Why";
import How from "@/pages/ride/How"
import Become from "@/pages/ride/Become"
import Seemless from "@/utils/Seemless";
import FAQ from "@/utils/FAQ";

export default function Home() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Hero />
      <Why />
      <How />
      <Become  />
      <Seemless />
      <FAQ />
    </main>
  );
}
