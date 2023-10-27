import why1 from "@/assets/why1.png";
import why2 from "@/assets/why2.png";
import Image from "next/image";
import Link from "next/link";

export default function Why() {
  return (
    <main className="flex flex-col gap-8 md:gap-14 items-center py-10 px-5 md:px-20">
      <h3 className="why text-center text-3xl md:text-[60px] font-[600] leading-tight">Why Book a ride with us?</h3>
      <div className="flex flex-col md:flex-row gap-14 md:gap-24 items-center justify-center">
        <figure>
          <Image src={why1} alt="" />
        </figure>
        <div className="flex flex-col gap-5 md:gap-10 md:w-fit md:min-w-fit">
          <b className="text-3xl md:text-[45px] font-[600] leading-tight">
            Smooth and easy <br className="hidden md:block" /> pickup experience
          </b>
          <p className="text-lg md:text-2xl md:font-[500]">
            The process made easy from beginning <br className="hidden md:block" /> to end. From ordering a ride,
            in-app <br className="hidden md:block" /> chatting, and to finally meeting your <br className="hidden md:block" /> driver.
          </p>
          <Link
            href="#"
            className="rounded-md px-12 h-12 mt-5 flex justify-center items-center whybtn text-white w-fit min-w-fit"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-14 md:gap-24 items-center justify-center">
        <div className="flex flex-col gap-5 md:gap-10 md:w-fit md:min-w-fit">
          <b className="text-3xl md:text-[45px] font-[600] leading-tight">
            Worry not; our driver <br className="hidden md:block" /> will be there for you
          </b>
          <p className="text-lg text-2xl md:font-[500]">
            Your safety and comfort are of utmost <br className="hidden md:block" /> importance to us and our
            driver-partners.<br className="hidden md:block" /> Whenever, wherever, go ahead and <br className="hidden md:block" /> order.
          </p>
          <Link
            href="#"
            className="rounded-md px-12 h-12 mt-5 flex justify-center items-center whybtn text-white w-fit min-w-fit"
          >
            Get Started
          </Link>
        </div>
        <figure>
          <Image src={why2} alt="" />
        </figure>
      </div>
    </main>
  );
}
