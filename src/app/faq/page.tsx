import Seamless from "@/pages/home/Seamless";
import One from "@/pages/faq/One";
import Two from "@/pages/faq/Two";
import Three from "@/pages/faq/Three";
import Four from "@/pages/faq/Four";
import Five from "@/pages/faq/Five";
import Ask from "@/pages/faq/Ask";

export default function Home() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <One />
      <Two />
      <Three />
      <Four />
      <Five />
      <Ask />
      <Seamless />
    </main>
  );
}
