import bg from "@/assets/hero-press.png";
import { FaSearch } from "react-icons/fa";
export default function Hero() {
  return (
    <main
      className="h-[90vh] flex flex-col gap-7 text-lg text-center justify-center items-center text-white px-5 md:px-20 bg-primary bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <h1 className="text-[35px] md:text-[72px] leading-normal font-[600]">
        Frequently Asked Questions (FAQs)
      </h1>
      <p className="text-lg md:text-2xl">
        Here you can find answers to most frequently asked questions
      </p>
      <label className="rounded-md bg-white h-16 w-full md:w-4/5 flex items-center px-2">
        <input
          type="text"
          className="w-full h-full px-5 bg-inherit text-sm md:text-base rounded-md outline-none"
          placeholder="What do you want to know?"
        />
        <button className="h-[80%] w-fit min-w-fit px-5 text-white bg-primary font-[600] rounded-md text-xl">
          <FaSearch />
        </button>
      </label>
    </main>
  );
}
