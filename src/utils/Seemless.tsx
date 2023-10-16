import Image from "next/image";
import playstore from "@/assets/playstore-c.png";
import appstore from "@/assets/appstore-c.png";
import phone from "@/assets/phone.png";

export default function Seemless() {
  return (
    <main className="flex flex-col">
        <div className="bg-primary shadow-xl rounded-[25px] mx-5 md:mx-20 md:h-[85vh] my-10 md:my-20 py-14 md:py-0 px-5 md:px-24 flex flex-col md:grid grid-cols-[1.5fr_2fr] grid-rows-1 gap-10 items-center">
        <div className="flex flex-col gap-10 md:gap-20 text-white">
          <h3 className="text-[36px] font-[700]">
            Seamless Services for Your Every Need: Hitch, Deliver, Excel.
          </h3>
          <div className="flex flex-col gap-4">
            <p>Available on </p>
            <div className="flex flex-col md:flex-row gap-5 text-lg">
              <button className="bg-white flex flex-col py-2 px-5 gap-1 rounded-2xl justify-center w-fit min-w-fit">
                <small className="text-xs text-[#101010]">Download on</small>
                <span className="flex gap-4 text-[#101010] font-[700]">
                  <Image src={playstore} alt="" className="h-" />
                  Play Store
                </span>
              </button>
              <button className="bg-white flex flex-col py-2 px-5 gap-1 rounded-2xl justify-center w-fit min-w-fit">
                <small className="text-xs text-[#101010]">Download on</small>
                <span className="flex gap-4 text-[#101010] font-[700]">
                  <Image src={appstore} alt="" className="h-" />
                  App Store
                </span>
              </button>
            </div>
          </div>
        </div>
        <figure className="w-full h-full">
          <Image src={phone} alt="" className="h-full w-full object-contain" />
        </figure>
      </div>
    </main>
  )
}
