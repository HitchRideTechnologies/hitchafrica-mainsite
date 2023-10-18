import service1 from "@/assets/service1.png";
import service2 from "@/assets/service2.png";
import service3 from "@/assets/service3.png";
import Image from "next/image";
import Link from "next/link";
import playstore from "@/assets/playstore-w.png";
import appstore from "@/assets/appstore-w.png";


export default function Work() {
  return (
    <main className="flex flex-col gap-10 md:gap-20 items-center py-10 md:py-20 px-5 md:px-20">
      <h3 className="text-3xl md:text-[40px] text-red font-[700]">
        <span className="text-purple">How work</span> should work
      </h3>
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center justify-center">
        <figure>
          <Image src={service1} alt="" className="" />
        </figure>
        <div className="flex flex-col gap-5 md:gap-10 md:w-fit md:min-w-fit">
          <b className="text-3xl md:text-[45px] font-[600] leading-tight">
            No cost to join and
            <br className="hidden md:block" /> secure to use
          </b>
          <p className="text-2xl font-[500]">
            Register and browse professionals, explore{" "}
            <br className="hidden md:block" /> projects, or even book a
            consultation.
          </p>
          <Link
            href="#"
            className="rounded-md px-12 h-12 mt-5 flex justify-center items-center btnbg text-white w-fit min-w-fit"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-16 items-center justify-center">
        <div className="flex flex-col gap-5 md:gap-10 md:w-fit md:min-w-fit">
          <b className="text-3xl md:text-[45px] font-[600] leading-tight">
            Work with the best— <br className="hidden md:block" />
            without breaking the <br className="hidden md:block" /> bank
          </b>
          <p className="text-2xl font-[500]">
            Hitch makes it affordable to up your work{" "}
            <br className="hidden md:block" /> and take advantage of low
            transaction <br className="hidden md:block" /> rates.
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
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center justify-center">
        <figure>
          <Image src={service3} alt="" className="" />
        </figure>
        <div className="flex flex-col gap-5 md:gap-10 md:w-fit md:min-w-fit">
          <b className="text-3xl md:text-[45px] font-[600] leading-tight">
            Find talent your
            <br className="hidden md:block" />
            way with ease
          </b>
          <p className="text-2xl font-[500]">
            Work with the largest network of <br className="hidden md:block" />{" "}
            independent professionals and get <br className="hidden md:block" />
            things done—from quick turnarounds to{" "}
            <br className="hidden md:block" /> big transformations.
          </p>
          <div className="flex flex-col md:flex-row gap-5 text-lg mx-auto md:mx-0">
            <button className="bg-primary text-white flex py-3 px-8 gap-4 rounded-xl justify-center items-center w-fit min-w-fit">
              <Image src={playstore} alt="" className="h5" />
              <span className="text-start flex flex-col gap-1">
                <small className="text-xs">Download on</small> Google Play
              </span>
            </button>
            <button className="bg-primary text-white flex py-3 px-8 gap-4 rounded-xl justify-center items-center w-fit min-w-fit">
              <Image src={appstore} alt="" className="h-" />
              <span className="text-start flex flex-col gap-1">
                <small className="text-xs">Download on</small> Apple Store
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
