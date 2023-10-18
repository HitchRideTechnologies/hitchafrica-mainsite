import Image from "next/image";
import hero from "@/assets/hero-service.png";

export default function Hero() {
  return (
    <section className="bg-[rgba(153,113,195,0.10)]">
      <div className="flex flex-col md:flex-row justify-end items-center gap-10 md:gap-14 z-0 relative">
        <div className="flex flex-col gap-10 min-w-fit">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl md:text-[60px] font-[600] leading-normal grad">
              Find the Best <br className="hidden md:block" /> Talents with Ease
            </h2>
            <p className="text-xl md:text-2xl">
            The best local talents to you or remote to <br className="hidden md:block" /> complete assigned tasks
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image src={hero} alt="" className="object-cover w-full" />
        </div>
      </div>
    </section>
  );
}
