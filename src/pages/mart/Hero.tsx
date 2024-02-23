import Image from "next/image";
import hero from "@/assets/hero-mart.png";
import playstore from "@/assets/playstore-w.png";
import appstore from "@/assets/appstore-w.png";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="flex flex-col md:flex-row justify-end items-center gap-10 md:gap-14 z-0 relative">
        <div className="px-5 md:px-0 py-10 md:py-0 flex flex-col gap-10 min-w-fit w-fit md:mx-auto">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl md:text-[60px] font-[600] leading-tight">
              <span className="text-purple inline">Shop</span> Seamlessly,
              <br className="hidden md:block" />
              <span className="text-purple inline">Discover</span> Convenience,
              <br className="hidden md:block" />
              <span className="text-purple inline">Swift</span> Delivery
            </h2>
            <p className="text-xl md:text-2xl">
              Shop your items from top-rated vendors in{" "}
              <br className="hidden md:block" /> minutes and enjoy swift
              delivery to your door step <br className="hidden md:block" /> or
              preferred location.
            </p>
            <div className="flex flex-col md:flex-row gap-5 text-lg mx-auto md:mx-0">
              <a href="https://play.google.com/store/apps/developer?id=HITCHRIDE+TECHNOLOGY+LTD" className="bg-primary text-white flex py-3 px-8 gap-4 rounded-xl justify-center items-center w-fit min-w-fit">
                <Image src={playstore} alt="" className="h5" />
                <span className="text-start flex flex-col gap-1">
                  <small className="text-xs">Download on</small> Google Play
                </span>
              </a>
              <a href="https://play.google.com/store/apps/developer?id=HITCHRIDE+TECHNOLOGY+LTD" className="bg-primary text-white flex py-3 px-8 gap-4 rounded-xl justify-center items-center w-fit min-w-fit">
                <Image src={appstore} alt="" className="h-" />
                <span className="text-start flex flex-col gap-1">
                  <small className="text-xs">Download on</small> Apple Store
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[40%] bg-[rgba(236,219,255,0.50)] flex justify-start">
          <Image
            src={hero}
            alt=""
            className="object-contain w-full max-h-screen md:mr-auto"
          />
        </div>
      </div>
    </section>
  );
}
