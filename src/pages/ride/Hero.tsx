import Image from "next/image";
import playstore from "@/assets/playstore-w.png";
import appstore from "@/assets/appstore-w.png";
import hero from "@/assets/hero-ride.jpeg";

export default function Hero() {
  return (
    <section
      className="px-5 md:px-20 py-10 md:py-20 relative bg-[#04bbc633]"
    >
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-center z-0 relative">
        <div className="w-fit min-w-fit flex flex-col gap-10 pl-5">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl md:text-[64px] font-[600] leading-tight">
              <b className="grad2 font-[600] block">Book a ride </b>
              Go wherever <br className="hidden md:block" />and whenever
            </h2>
            <p className="text-xl md:text-2xl">
              Get picked up by a top-rated driver in minutes <br className="hidden md:block" /> and enjoy a
              comfortable ride to wherever <br className="hidden md:block" /> you’re going
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5 text-lg mx-auto md:mx-0">
            <button className="bg-secondary text-white flex py-3 px-8 gap-4 rounded-xl justify-center items-center w-fit">
              <Image src={playstore} alt="" className="h5" />
              <span className="text-start flex flex-col gap-1">
                <small className="text-xs">Download on</small> Google Play
              </span>
            </button>
            <button className="bg-secondary text-white flex py-3 px-8 gap-4 rounded-xl justify-center items-center w-fit">
              <Image src={appstore} alt="" className="h-" />
              <span className="text-start flex flex-col gap-1">
                <small className="text-xs">Download on</small> Apple Store
              </span>
            </button>
          </div>
        </div>
        <div className="md:max-w-[50%]">
          <Image src={hero} alt="" className="object-contain rounded-xl" />
        </div>
      </div>
    </section>
  );
}
