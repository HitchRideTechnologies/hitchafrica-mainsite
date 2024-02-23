import Image from "next/image";
import playstore from "@/assets/playstore-w.png";
import appstore from "@/assets/appstore-w.png";
import hero from "@/assets/hero.png";
import bg from "@/assets/herobg.png";
import heroUsers from "@/assets/hero-users.png";
import { FaStar } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="px-5 md:px-20 py-10 relative bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="flex flex-col md:flex-row gap-10 md:gap-14 justify-center items-center z-0 relative">
        <div className="flex flex-col gap-10 pl-5 min-w-fit w-fit">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl md:text-[60px] font-[600] leading-normal grad">
              Your Everyday <br className="hidden md:block" /> Super App{" "}
              <br className="hidden md:block" /> For Africans
            </h2>
            <p className="text-xl md:text-2xl">
              Connecting Journeys, Delivering Convenience:
              <br className="hidden md:block" />Your All-in-One
              Service Companion
            </p>
          </div>
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
          <div className="flex items-center gap-4">
            <Image src={heroUsers} alt="" className="" />
            <nav className="flex flex-col gap-2 px-4 border-l ">
              <b className="font-[500] text-lg">Trusted Users</b>
              <span className="flex gap-1 items-center text-xl text-primary">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <p>Over 2k Users all Over Africa</p>
            </nav>
          </div>
        </div>
        <div className="">
          <Image src={hero} alt="" className="object-contain" />
        </div>
      </div>
    </section>
  );
}
