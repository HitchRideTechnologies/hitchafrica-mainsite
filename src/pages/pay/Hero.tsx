import Image from "next/image";
import hero from "@/assets/hero-pay.png";
import playstore from "@/assets/playstore-w.png";
import appstore from "@/assets/appstore-w.png";

export default function Hero() {
  return (
    <section className="">
      <div className="flex flex-col md:flex-row justify-end items-center gap-10 md:gap-14 z-0 relative">
        <div className="flex flex-col gap-10 min-w-fit w-fit">
          <div className="px-5 md:px-0  py-10 md:py-0 flex flex-col gap-5">
            <h2 className="text-3xl md:text-[60px] font-[600] leading-normal">
              <span className="grad inline"> Send, Receive</span> and{" "}
              <br className="hidden md:block" />
              <span className="grad inline"> Manage Funds</span> in a{" "}
              <br className="hidden md:block" /> Secure Way
            </h2>
            <p className="text-xl md:text-2xl">
              Seamlessly Handle Your Financial Transactions{" "}
              <br className="hidden md:block" /> with Confidence and Security
            </p>
            <div className="flex flex-col md:flex-row gap-5 text-lg mx-auto md:mx-0">
              <a href="https://onelink.to/8ts9xt" className="bg-primary text-white flex py-3 px-8 gap-4 rounded-xl justify-center items-center w-fit min-w-fit">
                <Image src={playstore} alt="" className="h5" />
                <span className="text-start flex flex-col gap-1">
                  <small className="text-xs">Download on</small> Google Play
                </span>
              </a>
              <a href="https://onelink.to/8ts9xt" className="bg-primary text-white flex py-3 px-8 gap-4 rounded-xl justify-center items-center w-fit min-w-fit">
                <Image src={appstore} alt="" className="h-" />
                <span className="text-start flex flex-col gap-1">
                  <small className="text-xs">Download on</small> Apple Store
                </span>
              </a>
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
