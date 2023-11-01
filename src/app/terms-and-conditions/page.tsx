import Hero from "@/pages/terms/Hero";
import Terms from "@/pages/terms/Terms";
import Seamless from "@/pages/home/Seamless";
// import FAQ from "@/pages/home/FAQ";

export default function Home() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Hero />
      <Terms />
      <Seamless />
      {/* <FAQ /> */}
    </main>
  );
}
