import im from "@/assets/buss3.png";
import Image from "next/image";
import Link from "next/link";

export default function Four() {
  return (
    <main className="flex flex-col gap-14 items-center py-10 md:py-20 px-5 md:px-20 bg-[#F9FFF0]">
      <div className="flex flex-col md:flex-row gap-14 md:gap-24 items-center justify-center">
        <figure>
          <Image src={im} alt="" />
        </figure>
        <div className="flex flex-col gap-5 md:gap-10 md:w-fit md:min-w-fit">
          <h2 className="text-3xl md:text-[60px] font-[600] leading-tight text-purple">
            <b className="text-green font-[600] block">Access to funds</b>
          </h2>
          <p className="text-lg md:text-2xl md:font-[500]">
            Apply for finance products to help better
            <br className="hidden md:block" />
            manage your cash flow.
          </p>
          <Link
            href="#"
            className="rounded-md px-12 h-12 flex justify-center items-center greenGrad text-white w-fit min-w-fit"
          >
            Become a Merchant Partner
          </Link>
        </div>
      </div>
    </main>
  );
}
