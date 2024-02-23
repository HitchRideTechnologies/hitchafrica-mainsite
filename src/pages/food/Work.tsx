import service1 from "@/assets/food1.png";
import service2 from "@/assets/food2.png";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <main className="flex flex-col gap-10 md:gap-20 items-center py-10 md:py-20 px-5 md:px-20">
      <h3 className="text-center text-3xl md:text-[40px] text-red font-[700]">
        <span className="text-purple">How work</span> should work
      </h3>
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center">
        <figure>
          <Image src={service1} alt="" className="" />
        </figure>
        <div className="flex flex-col gap-5 md:gap-10 md:w-fit md:min-w-fit">
          <b className="text-3xl md:text-[45px] font-[600] leading-tight">
            Discover your favorite
            <br className="hidden md:block" /> local restaurants
          </b>
          <p className="text-lg md:text-2xl md:font-[500]">
            Experience a global palate of flavors through{" "}
            <br className="hidden md:block" /> our extensive range of amazing
            restaurants, <br className="hidden md:block" /> whether {`it's`}{" "}
            your beloved neighborhood <br className="hidden md:block" /> eatery
            or a well-kept culinary treasure <br className="hidden md:block" />{" "}
            waiting to be discovered.
          </p>
          <a
            href="https://play.google.com/store/apps/developer?id=HITCHRIDE+TECHNOLOGY+LTD"
            className="rounded-md px-12 h-12 mt-5 flex justify-center items-center redGrad text-white w-fit min-w-fit"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-16 items-center justify-center">
        <div className="flex flex-col gap-5 md:gap-10 md:w-fit md:min-w-fit">
          <b className="text-3xl md:text-[45px] font-[600] leading-tight">
            Order and pay <br className="hidden md:block" /> with ease
          </b>
          <p className="text-lg md:text-2xl md:font-[500]">
            With just a few clicks, you can place your{" "}
            <br className="hidden md:block" /> order and make payment using your{" "}
            <br className="hidden md:block" /> preferred method, whether{" "}
            {`it's`} cash or <br className="hidden md:block" /> hitchpay
          </p>
          <a
            href="https://play.google.com/store/apps/developer?id=HITCHRIDE+TECHNOLOGY+LTD"
            className="rounded-md px-12 h-12 mt-5 flex justify-center items-center redGrad text-white w-fit min-w-fit"
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
