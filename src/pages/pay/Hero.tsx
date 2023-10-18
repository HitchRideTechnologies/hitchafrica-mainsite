import Image from "next/image";
import hero from "@/assets/hero-pay.png";
import playstore from "@/assets/playstore-w.png";
import appstore from "@/assets/appstore-w.png";

export default function Hero() {
  return (
    <section className="">
      <div className="flex flex-col md:flex-row justify-end items-center gap-10 md:gap-14 z-0 relative">
        <div className="flex flex-col gap-10 min-w-fit">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl md:text-[60px] font-[600] leading-normal text-red">
              The food you love, <br className="hidden md:block" /> delivered
              fast
            </h2>
            <p className="text-xl md:text-2xl">
              The Hitch Food app makes it simple for anybody to{" "}
              <br className="hidden md:block" /> use a mobile device to look
              over the menu of the <br className="hidden md:block" /> best
              vendors and place an order for home delivery.
            </p>
            <div className="flex flex-col md:flex-row gap-5 text-lg mx-auto md:mx-0">
              <button className="bg-red text-white flex py-3 px-8 gap-4 rounded-xl justify-center items-center w-fit min-w-fit">
                <Image src={playstore} alt="" className="h5" />
                <span className="text-start flex flex-col gap-1">
                  <small className="text-xs">Download on</small> Google Play
                </span>
              </button>
              <button className="bg-red text-white flex py-3 px-8 gap-4 rounded-xl justify-center items-center w-fit min-w-fit">
                <Image src={appstore} alt="" className="h-" />
                <span className="text-start flex flex-col gap-1">
                  <small className="text-xs">Download on</small> Apple Store
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image src={hero} alt="" className="object-cover w-full" />
        </div>
      </div>
    </section>
  );
}
