import why1 from "@/assets/why1.png";
import why2 from "@/assets/why2.png";
import Image from "next/image";
import Link from "next/link";

export default function Why() {
  return (
    <main className="flex flex-col gap-14 items-center py-10 px-5 md:px-24">
      <h3 className="why text-3xl md:text-[60px] font-[600] leading-tight">Why Book a ride with us?</h3>
      <div className="flex flex-col md:flex-row gap-14 md:gap-24 items-center justify-center">
        <figure>
          <Image src={why1} alt="" />
        </figure>
        <div className="flex flex-col gap-5 md:gap-10 md:w-[40%]">
          <b className="text-3xl md:text-[45px] font-[600] leading-tight">
            Smooth and easy pickup experience
          </b>
          <p className="text-2xl font-[500]">
            The process made easy from beginning to end. From ordering a ride,
            in-app chatting, and to finally meeting your driver.
          </p>
          <Link
            href="#"
            className="rounded-md px-12 h-12 flex justify-center items-center whybtn text-white w-fit min-w-fit"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-14 md:gap-24 items-center justify-center">
        <div className="flex flex-col gap-5 md:gap-10 md:w-[40%]">
          <b className="text-3xl md:text-[45px] font-[600] leading-tight">
            Worry not; our driver will be there for you
          </b>
          <p className="text-2xl font-[500]">
            Your safety and comfort are of utmost importance to us and our
            driver-partners. Whenever, wherever, go ahead and order.
          </p>
          <Link
            href="#"
            className="rounded-md px-12 h-12 flex justify-center items-center whybtn text-white w-fit min-w-fit"
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
