import pay1 from "@/assets/pay1.png";
import pay2 from "@/assets/pay2.svg";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <main className="flex flex-col gap-10 md:gap-20 items-center py-10 md:py-20 px-5 md:px-20">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center justify-center">
        <figure>
          <Image src={pay1} alt="" className="" />
        </figure>
        <div className="flex flex-col gap-5 md:gap-10 md:w-fit md:min-w-fit">
          <span className="grad font-[600] text-xl">Hitch Pay</span>
          <div className="flex flex-col items-start gap-5">
            <b className="text-3xl md:text-[48px] font-[600] leading-normal">
              Your phone + our app <br className="hidden md:block" />= simpler
              life.
            </b>
            <span className="w-[100px] h-[5px] under"></span>
          </div>
          <p className="text-lg md:text-2xl md:font-[500]">
            We designed a app for your lifestyle, and you{" "}
            <br className="hidden md:block" /> can get t make payment with ease.{" "}
            {`That's`} all <br className="hidden md:block" /> you need to make
            the right money moves.
          </p>
          <a
            href="https://onelink.to/8ts9xt"
            className="rounded-md px-12 h-12 md:mt-5 flex justify-center items-center btnbg text-white w-fit min-w-fit"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-16 items-center justify-center">
        <div className="flex flex-col gap-5 md:gap-10 md:w-fit md:min-w-fit">
          <span className="grad font-[600] text-xl">Hitch Pay</span>
          <div className="flex flex-col items-start gap-5">
            <b className="text-3xl md:text-[48px] font-[600] leading-normal">
              Simple solutions to <br className="hidden md:block" /> power your
              business
            </b>
            <span className="w-[100px] h-[5px] under"></span>
          </div>
          <p className="text-lg md:text-2xl md:font-[500]">
            In addition to our versatile digital wallet, {`we're`} thrilled to{" "}
            <br className="hidden md:block" /> introduce seamless Point of Sale
            (POS) integration.
            <br className="hidden md:block" /> Whether {`you're`} a small business
            proprietor or a frequent <br className="hidden md:block" /> shopper,
            our POS system guarantees swift, secure, and{" "}
            <br className="hidden md:block" /> trouble-free payments.
          </p>
          <a
            href="https://onelink.to/8ts9xt"
            className="rounded-md px-12 h-12 mt-5 flex justify-center items-center btnbg text-white w-fit min-w-fit"
          >
            Get Started
          </a>
        </div>
        <figure>
          <Image src={pay2} alt="" className="" />
        </figure>
      </div>
    </main>
  );
}
