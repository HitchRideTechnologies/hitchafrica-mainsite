import Image from "next/image";
import bg from "@/assets/sub.jpeg";
export default function Sub() {
  return (
    <section className="flex flex-col gap-10 md:gap-16 py-10 md:py-20 px-5 md:px-24">
      <div
        className="shadow-xl py-24 px-5 md:px-24 flex flex-col md:grid grid-cols-2 gap-10 md:gap-16 items-center relative bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="flex flex-col text-white">
          <h3 className="text-[48px] font-[700] leading-normal">
            Sign up for free. <br className="hidden md:block" />
            Make a great choice.
          </h3>
        </div>
        <label className="rounded-md bg-white h-16 w-full flex items-center px-2">
          <input
            type="text"
            className="w-full h-full px-5 bg-inherit text-sm md:text-base rounded-md outline-none"
            placeholder="Enter your email address to get started"
          />
          <button className="h-[80%] w-fit min-w-fit px-5 text-white bg-primary font-[600] rounded-md">
            Sign Up
          </button>
        </label>
      </div>
    </section>
  );
}
