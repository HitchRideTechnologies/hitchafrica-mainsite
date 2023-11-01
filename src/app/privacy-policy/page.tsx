import Hero from "@/pages/privacy/Hero";
import Policies from "@/pages/privacy/Policies";
import Seamless from "@/pages/home/Seamless";
// import FAQ from "@/pages/home/FAQ";

export default function Home() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Hero />
      <Policies />
      <Seamless />
      {/* <FAQ /> */}
    </main>
  );
}
