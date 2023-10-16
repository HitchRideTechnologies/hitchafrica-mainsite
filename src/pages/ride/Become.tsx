import become from "@/assets/why1.png";
import Image from "next/image";
import Link from "next/link";

export default function Become() {
  return (
    <main className="flex flex-col gap-14 items-center py-10 md:py-20 px-5 md:px-20 bg-[#03464a0f]">
      <div className="flex flex-col-reverse md:flex-row gap-14 md:gap-24 items-center justify-center">
        <div className="flex flex-col gap-5 md:gap-10 md:w-[40%]">
          <h2 className="text-3xl md:text-[60px] font-[600] leading-tight text-purple">
            <b className="grad2 font-[600] block">Drive with Hitch: </b>
            Earn On Your Own Time
          </h2>
          <p className="text-2xl font-[500]">
            Our platform empowers you to drive and earn on your own schedule,
            giving you the flexibility and control you deserve.
          </p>
          <Link
            href="#"
            className="rounded-md px-12 h-12 flex justify-center items-center whybtn text-white w-fit min-w-fit"
          >
            Become a Driver
          </Link>
        </div>
        <figure>
          <Image src={become} alt="" />
        </figure>
      </div>
    </main>
  );
}
