import One from "@/pages/business/One";
import Two from "@/pages/business/Two";
import Three from "@/pages/business/Three";
import Four from "@/pages/business/Four"
import Five from "@/pages/business/Five"
import Six from "@/pages/business/Six"
import Seamless from "@/pages/home/Seamless";
import FAQ from "@/pages/home/FAQ";

export default function Home() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <One />
      <Two />
      <Three />
      <Four />
      <Five />
      <Six />
      <Seamless />
      <FAQ />
    </main>
  );
}
