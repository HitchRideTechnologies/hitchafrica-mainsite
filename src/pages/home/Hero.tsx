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
      className="px-5 md:px-24 py-10 relative bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* <div className="absolute top-0 right-0 w-1/3 hidden md:block h-full bg-[#F8F2FF] z-[-1]"></div> */}
      <div className="flex flex-col md:grid grid-cols-2 gap-10 items-center z-0 relative">
        <div className="w-full flex flex-col gap-10 pl-5">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl md:text-[60px] font-[600] leading-normal grad">
              Hitch - Your everyday app for Africans
            </h2>
            <p className="text-xl md:text-2xl">
              Connecting Journeys, Delivering Convenience: Hitch Africa-Your
              All-in-One Service Companion
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5 text-lg mx-auto md:mx-0">
            <button className="bg-primary text-white flex py-3 px-8 gap-4 rounded-2xl justify-center items-center w-fit">
              <Image src={playstore} alt="" className="h5" />
              <span className="text-start flex flex-col gap-1">
                <small className="text-xs">Download on</small> Google Play
              </span>
            </button>
            <button className="bg-primary text-white flex py-3 px-8 gap-4 rounded-2xl justify-center items-center w-fit">
              <Image src={appstore} alt="" className="h-" />
              <span className="text-start flex flex-col gap-1">
                <small className="text-xs">Download on</small> Apple Store
              </span>
            </button>
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
              <p>Over 10k Users all Over Africa</p>
            </nav>
          </div>
        </div>
        <div className="w-full h-full">
          <Image src={hero} alt="" className="w-full h-full object-contain" />
        </div>
      </div>
    </section>
  );
}
