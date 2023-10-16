import Image from "next/image";
import playstore from "@/assets/playstore-w.png";
import appstore from "@/assets/appstore-w.png";
import hero from "@/assets/hero-ride.png";

export default function Hero() {
  return (
    <section className="px-5 md:px-20 py-10 md:py-20 relative bg-[#9971c31a]">
      <div className="flex flex-col md:grid grid-cols-2 gap-10 items-center z-0 relative">
        <div className="w-full flex flex-col gap-10 pl-5">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl md:text-[60px] font-[600] leading-normal grad">
              Find the Best Talents with Ease
            </h2>
            <p className="text-xl md:text-2xl">
              The best local talents to you or remote to complete assigned tasks
            </p>
          </div>
        </div>
        <div className="w-full h-full">
          <Image
            src={hero}
            alt=""
            className="w-full h-full rounded-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
