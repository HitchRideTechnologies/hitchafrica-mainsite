import Hero from "@/pages/ride/Hero";
import Why from "@/pages/ride/Why";
import How from "@/pages/ride/How";
import Become from "@/pages/ride/Become";
import Seamless from "@/pages/home/Seamless";
// import FAQ from "@/pages/home/FAQ";

export default function Home() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Hero />
      <Why />
      <How />
      <Become />
      <Seamless />
      {/* <FAQ /> */}
    </main>
  );
}
