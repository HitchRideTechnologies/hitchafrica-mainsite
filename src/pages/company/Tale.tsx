import bg from "@/assets/talebg.png";
import Image from "next/image"
import tale from "@/assets/company7.png"

export default function Tale() {
  return (
    <main
      className="py-10 md:py-24 flex flex-col gap-7 md:gap-14 text-lg text-center justify-center items-center text-white px-5 md:px-20 bg-primary"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="flex flex-col gap-4 md:gap-8 text-center justify-center items-center">

<h1 className="text-center text-3xl md:text-[72px] font-[600]">The Tale of Us</h1>
<p className="text-lg md:text-3xl font-[400]">It all began with a vision to change the game.</p>
  </div>
  {/* <video controls poster="../../assets/company7.png" className="w-full object-cover">
    <source src={taleVideo} type="video/mp4" /> 
  </video> */}
  <figure className="w-full">
    <Image src={tale} alt="" className="w-full object-cover" /> 
    </figure>
    </main>
  );
}
