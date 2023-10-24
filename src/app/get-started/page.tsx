import Start from "@/pages/get-started/Start";
import Seamless from "@/pages/home/Seamless";
import FAQ from "@/pages/home/FAQ";

export default function Home() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Start />
      <Seamless />
      <FAQ />
    </main>
  );
}
