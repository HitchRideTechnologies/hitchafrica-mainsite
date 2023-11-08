import Image from "next/image";
import Link from "next/link";
import playstore from "@/assets/playstore-b.png";
import appstore from "@/assets/appstore-b.png";
import bg from "@/assets/foodbg.png";
import location from "@/assets/location.png";
export default function Explore() {
  return (
    <main className="h-fit md:h-[140vh] z-[0] py-10 px-5 w-full flex flex-col gap-10 items-center text-center text-white bg-[linear-gradient(180deg,_#000_0%,_#000_100%)] relative bg-no-repeat">
      <Image
        src={bg}
        alt=""
        className="absolute object-cover object-bottom top-0 left-0 w-full h-full z-[-1]"
      />
      <b className="text-2xl md:text-[50px] font-[600] md:mt-[10%] leading-tight">
        Explore your favorite meal, from <br className="hidden md:block" /> your
        favorite restaurants
      </b>
      <form className="flex h-14 md:h-20 w-full md:w-3/5 py-2 items-center bg-white text-[#1E1E1E] rounded-md">
        <button className="hidden md:flex gap-1 items-center w-fit min-w-fit py-2 md:px-5">
          <Image src={location} alt="" className="h-4 w-4 md:w-[unset] md:h-[unset]" />
          Ibadan
        </button>
        <input
          type="text"
          placeholder="Search for your favorite restaurant"
          className="px-2 md:px-5 h-full w-full bg-inherit md:border-l-[4px] border-red text-sm md:text-lg font-[500]"
        />
        <Link
          href="#"
          className="rounded-md px-4 md:px-12 mr-1 md:mr-5 h-full flex justify-center items-center redGrad text-white w-fit min-w-fit"
        >
          Order food
        </Link>
      </form>
      <div className="flex flex-col md:flex-row gap-5 md:text-lg mx-auto">
        <button className="bg-white text-[#1E1E1E] flex py-3 px-8 gap-4 rounded-xl justify-center items-center w-fit min-w-fit">
          <Image src={playstore} alt="" className="h5" />
          <span className="text-start flex flex-col gap-1">
            <small className="text-xs">Download on</small> Google Play
          </span>
        </button>
        <button className="bg-white text-[#1E1E1E] flex py-3 px-8 gap-4 rounded-xl justify-center items-center w-fit min-w-fit">
          <Image src={appstore} alt="" className="h-" />
          <span className="text-start flex flex-col gap-1">
            <small className="text-xs">Download on</small> Apple Store
          </span>
        </button>
      </div>
    </main>
  );
}
