import Image from "next/image";
import playstore from "@/assets/playstore-c.png";
import appstore from "@/assets/appstore-c.png";
import phone from "@/assets/phone.png";

export default function Seemless() {
  return (
    <div className="bg-primary shadow-[0px_0px_52px_21px_rgba(203,31,82,0.20)] rounded-3xl mx-5 md:mx-20 md:h-[85vh] pt-14 md:pt-0 px-5 md:px-20 my-10 md:my-20 flex flex-col md:grid grid-cols-[1.5fr_2fr] grid-rows-1 gap-10 items-center">
      <div className="flex flex-col gap-7 md:gap-20 text-white">
        <h3 className="text-3xl md:text-[36px] font-[700] leading-normal">
          We Offer Seamless Services for Your Every Day Need: Hitch, Deliver,
          Excel.
        </h3>
        <div className="flex flex-col gap-4">
          <p>Available on</p>
          <div className="flex flex-row gap-5">
            <button className="bg-white flex flex-col py-2 md:py-3 px-3 md:px-8 gap-1 rounded-md md:rounded-xl justify-center items-center w-fit min-w-fit min-h-fit">
              <small className="text-xs text-[#101010]">Download on</small>
              <span className="flex items-center gap-2 text-[#101010] text-sm md:text-base font-[600]">
                <Image src={playstore} alt="" className="" />
                Play Store
              </span>
            </button>
            <button className="bg-white flex flex-col py-2 md:py-3 px-3 md:px-8 gap-1 rounded-md md:rounded-xl justify-center items-center w-fit min-w-fit min-h-fit">
              <small className="text-xs text-[#101010]">Download on</small>
              <span className="flex items-center gap-2 text-[#101010] text-sm md:text-base font-[600]">
                <Image src={appstore} alt="" className="" />
                App Store
              </span>
            </button>
          </div>
        </div>
      </div>
      <figure className="w-full h-full flex items-end">
        <Image
          src={phone}
          alt=""
          className="object-contain h-full bg-red-400"
          unoptimized
        />
      </figure>
    </div>
  );
}
