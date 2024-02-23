import service1 from "@/assets/delivery1.png";
import service2 from "@/assets/delivery2.png";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <main className="flex flex-col gap-10 md:gap-20 items-center py-10 md:py-20 px-5 md:px-20">
      <h3 className="text-center text-3xl md:text-[40px] text-red font-[700]">
        <span className="text-purple">How work</span> should work
      </h3>
      <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center justify-center">
        <figure>
          <Image src={service1} alt="" className="" />
        </figure>
        <div className="flex flex-col gap-5 md:gap-10 md:w-fit md:min-w-fit">
          <b className="text-3xl md:text-[45px] font-[600] leading-tight">
          Let’s Start Shipping
          </b>
          <p className="text-lg md:text-2xl ">
          The process made easy from beginning <br className="hidden md:block" /> to end. From ordering a ride, in-app <br className="hidden md:block" /> chatting, and to finally meeting your <br className="hidden md:block" /> driver. 
          </p>
          <a
            href="https://play.google.com/store/apps/developer?id=HITCHRIDE+TECHNOLOGY+LTD"
            className="rounded-md px-12 h-12 mt-5 flex justify-center items-center btnbg text-white w-fit min-w-fit"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-20 items-center justify-center">
        <div className="flex flex-col gap-5 md:gap-10 md:w-fit md:min-w-fit">
          <b className="text-3xl md:text-[45px] font-[600] leading-tight">
          Worry not; our driver
           <br className="hidden md:block" />
           will be there for you 
          </b>
          <p className="text-lg md:text-2xl ">
          Your safety and comfort are of utmost <br className="hidden md:block" /> importance to us and our driver-partners. <br className="hidden md:block" /> Whenever, wherever, go ahead and <br className="hidden md:block" /> order.
          </p>
          <a
            href="https://onelink.to/7h7bx5"
            className="rounded-md px-12 h-12 mt-5 flex justify-center items-center btnbg text-white w-fit min-w-fit"
          >
            Get Started
          </a>
        </div>
        <figure>
          <Image src={service2} alt="" className="" />
        </figure>
      </div>
    </main>
  );
}
