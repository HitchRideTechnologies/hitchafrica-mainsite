import Image from "next/image";
import Link from "next/link";
import playstore from "@/assets/playstore-b.png";
import appstore from "@/assets/appstore-b.png";
import bg from "@/assets/foodbg.png";
import location from "@/assets/location.png";
export default function Explore() {
  return (
    <main className="md:h-[140vh] z-[0] px-5 w-full flex flex-col gap-10 items-center text-center text-white bg-[linear-gradient(180deg,_#000_0%,_#000_100%)] relative bg-no-repeat">
      <Image
        src={bg}
        alt=""
        className="absolute object-cover object-bottom top-0 left-0 w-full h-full z-[-1]"
      />
      <b className="text-[50px] font-[600] mt-[10%]">
        Explore your favorite meal, from <br className="hidden md:block" /> your
        favorite restaurants
      </b>
      <form className="flex h-20 md:w-3/5 py-2 items-center bg-white text-[#1E1E1E] rounded-md">
        <button className="flex gap-1 items-center w-fit min-w-fit px-5">
          <Image src={location} alt="" />
          Ibadan
        </button>
        <input
          type="text"
          placeholder="Search for your favorite restaurant"
          className="px-5 h-full w-full bg-inherit border-l-[4px] border-red text-lg font-[500]"
        />
        <Link
          href="#"
          className="rounded-md px-12 mr-5 h-full flex justify-center items-center redGrad text-white w-fit min-w-fit"
        >
          Order food
        </Link>
      </form>
      <div className="flex flex-col md:flex-row gap-5 text-lg mx-auto">
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
