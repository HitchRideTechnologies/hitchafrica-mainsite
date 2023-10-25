import { FaArrowRight } from "react-icons/fa";
import company1 from "@/assets/company5.png";
import company2 from "@/assets/company6.png";
import Image from "next/image"
export default function Statement() {
  return (
    <section
      className="flex flex-col"
    >
      <div className=" w-full flex flex-col md:grid grid-cols-2">
        <div
          className="flex flex-col gap-5 w-full bg-[#CBEEF4]"
        >
          <div className="w-full flex flex-col gap-5 px-5 md:px-20 py-10 md:py-20">
              <h3 className="text-3xl md:text-[48px] font-[600] leading-snug other1">
                Our Vision
              </h3>
            <p className="text-xl md:text-2xl">
            At Hitch, we are creating the future for <br className="hidden md:block" /> Africans. 
            </p>
          </div>
          <figure className="w-full">
            <Image src={company1} alt="" className="w-full" />
          </figure>
        </div>
        <div
          className="flex flex-col gap-5 w-full bg-[#F3EDF9]"
        >
          <div className="w-full flex flex-col gap-5 px-5 md:px-20 py-10 md:py-20">
              <h3 className="text-3xl md:text-[48px] font-[600] leading-snug grad">
                Our Mission
              </h3>
            <p className="text-xl md:text-2xl">
            At Hitch, we are creating the future for <br className="hidden md:block" /> Africans. 
            </p>
          </div>
          <figure className="w-full">
            <Image src={company2} alt="" className="w-full" />
          </figure>
        </div>
      </div>
    </section>
  );
}
