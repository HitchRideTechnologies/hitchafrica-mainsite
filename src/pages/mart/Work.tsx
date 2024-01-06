import service1 from "@/assets/mart1.png";
import service2 from "@/assets/mart2.png";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <main className="flex flex-col gap-10 md:gap-20 items-center py-10 md:py-20 px-5 md:px-20">
      <h3 className="text-center text-3xl md:text-[40px] text-red font-[700]">
        <span className="text-purple">Why Shop</span> With Us?
      </h3>
      <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center justify-center">
        <figure>
          <Image src={service1} alt="" className="" />
        </figure>
        <div className="flex flex-col gap-5 md:gap-10 md:w-fit md:min-w-fit">
          <b className="text-3xl md:text-[45px] font-[600] leading-tight">
            Easy Shopping <br className="hidden md:block" /> Experience and
            Swift <br className="hidden md:block" /> Delivery
          </b>
          <p className="text-lg md:text-2xl ">
            The process made easy from beginning
            <br className="hidden md:block" />
            to end. From adding an item to cart,
            <br className="hidden md:block" />
            making payments and checking out, the
            <br className="hidden md:block" />
            entire process has been streamlined.
          </p>
          <Link
            href="#"
            className="rounded-md px-12 h-12 mt-5 flex justify-center items-center btnbg text-white w-fit min-w-fit"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-20 items-center justify-center">
        <div className="flex flex-col gap-5 md:gap-10 md:w-fit md:min-w-fit">
          <b className="text-3xl md:text-[45px] font-[600] leading-tight">
            Value at an Affordable
            <br className="hidden md:block" />
            Rate from Top-Rated
            <br className="hidden md:block" />
            Vendors
          </b>
          <p className="text-lg md:text-2xl ">
            Shop value at an affordable price from{" "}
            <br className="hidden md:block" /> trusted vendors all over Nigeria.
            Our <br className="hidden md:block" /> vendors are top-rated.
          </p>
          <Link
            href="#"
            className="rounded-md px-12 h-12 mt-5 flex justify-center items-center btnbg text-white w-fit min-w-fit"
          >
            Get Started
          </Link>
        </div>
        <figure>
          <Image src={service2} alt="" className="" />
        </figure>
      </div>
    </main>
  );
}
