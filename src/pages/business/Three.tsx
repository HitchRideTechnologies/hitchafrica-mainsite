import become from "@/assets/buss2.png";
import Image from "next/image";
import Link from "next/link";

export default function Three() {
  return (
    <main className="flex flex-col gap-14 items-center py-10 md:py-20 px-5 md:px-20">
      <div className="flex flex-col-reverse md:flex-row gap-14 md:gap-24 items-center justify-center">
        <div className="flex flex-col gap-5 md:gap-10 md:w-fit md:min-w-fit">
          <h2 className="text-3xl md:text-[60px] font-[600] leading-tight">
            <b className="text-red font-[600] block">Easy to manage</b>
          </h2>
          <p className="text-lg md:text-2xl md:font-[500]">
            Manage all your payments through the
            <br className="hidden md:block" />
            merchant-partner portal and app.
          </p>
          <Link
            href="#"
            className="rounded-md px-12 h-12 flex justify-center items-center redGrad text-white w-fit min-w-fit"
          >
            Become a Merchant Partner
          </Link>
        </div>
        <figure>
          <Image src={become} alt="" />
        </figure>
      </div>
    </main>
  );
}
