import become from "@/assets/food4.png";
import Image from "next/image";
import Link from "next/link";

export default function Become() {
  return (
    <main className="flex flex-col gap-14 items-center pt-10 pb-10 md:pb-0 md:pt-20 px-5 md:px-20 bg-[rgba(203,31,82,0.10)]">
      <div className="flex flex-col-reverse md:flex-row gap-14 md:gap-24 items-center justify-center">
        <div className="flex flex-col gap-5 md:gap-10 md:w-fit md:min-w-fit">
          <h2 className="text-3xl md:text-[60px] font-[600] leading-tight text-red">
            <b className="text-purple font-[600] md:block">Join Hitch:</b>{" "}
            Savor the Taste{" "}
            <br className="hidden md:block" />
            of Greatness
          </h2>
          <p className="text-lg md:text-2xl font-[500]">
            Amplify your business reach, attract{" "}
            <br className="hidden md:block" /> more customers, and savor the
            success <br className="hidden md:block" /> of a thriving
            partnership.
          </p>
          <Link
            href="#"
            className="rounded-md px-12 h-12 flex justify-center items-center redGrad text-white w-fit min-w-fit"
          >
            Become a Merchant
          </Link>
        </div>
        <figure>
          <Image src={become} alt="" />
        </figure>
      </div>
    </main>
  );
}
