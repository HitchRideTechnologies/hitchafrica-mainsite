import become from "@/assets/mart3.png";
import Image from "next/image";
import Link from "next/link";

export default function Become() {
  return (
    <main className="flex flex-col gap-14 items-center py-10 md:py-20 px-5 md:px-20 bg-[#F6EDFF]">
      <div className="flex flex-col md:flex-row gap-14 md:gap-24 items-center justify-center">
        <div className="flex flex-col gap-5 md:gap-10 md:w-fit md:min-w-fit">
          <h2 className="text-3xl md:text-[60px] font-[600] leading-tight text-red">
            <b className="text-purple font-[600] block">Sell with Hitch: </b>
            Turn Listings <br className="hidden md:block" />
            Into Sales
          </h2>
          <p className="text-lg md:text-2xl md:font-[500]">
            Unlock a world of selling possibilities with Hitch,
            <br className="hidden md:block" /> where your listings take center
            stage in a dynamic
            <br className="hidden md:block" /> marketplace.
          </p>
          <Link
            href="#"
            className="rounded-md px-5 md:px-12 h-12 flex justify-center items-center btnbg text-white w-fit min-w-fit"
          >
            Become a Merchant Partner
          </Link>
        </div>
        <figure>
          <Image src={become} alt="" className="max-h-[80vh] object-contain" />
        </figure>
      </div>
    </main>
  );
}
