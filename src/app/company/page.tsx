import Seamless from "@/pages/home/Seamless";
import FAQ from "@/pages/home/FAQ";
import Hero from "@/pages/company/Hero"
import Statement from "@/pages/company/Statement"
import Tale from "@/pages/company/Tale"
import Team from "@/pages/company/Team"

export default function Home() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Hero />
      <Statement />
      <Tale />
      <Team />
      <Seamless />
      <FAQ />
    </main>
  );
}
