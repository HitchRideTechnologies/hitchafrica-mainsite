import bg from "@/assets/hero-press.png";
import Image from "next/image";
import company1 from "@/assets/company1.png";
import company2 from "@/assets/company2.png";
import company3 from "@/assets/company3.png";
import company4 from "@/assets/company4.png";

export default function Hero() {
  return (
    <main className="flex flex-col">
      <div
        className="flex flex-col gap-14 text-lg justify-center items-center text-white px-5 md:px-20 py-10 md:py-24 bg-primary bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10">
          <Image src={company1} alt="" className="w-full" />
          <Image src={company2} alt="" className="w-full" />
          <Image src={company3} alt="" className="w-full" />
          <Image src={company4} alt="" className="w-full" />
        </div>
        <div className="flex flex-col gap-5 text-center justify-center items-center">
          <h1 className="text-2xl md:text-[48px] font-[600]">
            We are the future of on-Demand Services in Africa
          </h1>
          {/* <p className="text-lg md:text-2xl font-[400]">
            At Hitch, we are creating the future for Africans. With our
            all-in-one platform, we <br className="hidden md:block" /> provide
            convenience and value in one place.
          </p> */}
        </div>
      </div>
      <div className="px-5 flex flex-col md:flex-row gap-7 justify-evenly py-10 md:py-16 w-full bg-primary">
        <nav className="flex flex-col md:gap-3 justify-center items-center text-center text-white">
          <b className="font-[600] text-2xl md:text-[40px] ">2024</b>
          <span className="text-lg md:text-2xl">Founded</span>
        </nav>
        <nav className="flex flex-col md:gap-3 justify-center items-center text-center text-white">
          <b className="font-[600] text-2xl md:text-[40px] ">10+</b>
          <span className="text-lg md:text-2xl">Employees</span>
        </nav>
        <nav className="flex flex-col md:gap-3 justify-center items-center text-center text-white">
          <b className="font-[600] text-2xl md:text-[40px] ">2k+</b>
          <span className="text-lg md:text-2xl">Users</span>
        </nav>
        <nav className="flex flex-col md:gap-3 justify-center items-center text-center text-white">
          <b className="font-[600] text-2xl md:text-[40px] ">6+</b>
          <span className="text-lg md:text-2xl">Products</span>
        </nav>
      </div>
    </main>
  );
}
