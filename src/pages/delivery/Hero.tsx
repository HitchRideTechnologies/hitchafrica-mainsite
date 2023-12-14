import bg from "@/assets/hero-press.png";
import hero from "@/assets/hero-delivery.png";
import Image from "next/image";

export default function Hero() {
  return (
    <main
      className="flex flex-col gap-14 items-center py-10 md:py-20 px-5 md:px-20 text-white bg-primary bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="flex flex-col-reverse md:flex-row gap-14 md:gap-24 items-center justify-center">
        <div className="flex flex-col gap-5 md:gap-10 md:w-fit md:min-w-fit">
          <h2 className="text-3xl md:text-[60px] font-[600] leading-tight ">
            Seamless delivery
            <br className="hidden md:block" />
            services
          </h2>
          <p className="text-lg md:text-2xl md:font-[500]">
            Order from anywhere and we deliver to
            <br className="hidden md:block" />
            your doorstep
          </p>
          <label className="rounded-md bg-white h-16 w-full flex items-center px-2">
          <input
            type="text"
            className="w-full h-full md:px-5 bg-inherit text-sm md:text-base rounded-md outline-none"
            placeholder="Enter your tracking number"
          />
          <button className="h-[80%] w-fit min-w-fit px-5 text-sm md:text-base text-white bg-primary font-[600] rounded-md">
            Track
          </button>
        </label>
        </div>
        <figure>
          <Image src={hero} alt="" className="object-contain" />
        </figure>
      </div>
    </main>
  );
}
