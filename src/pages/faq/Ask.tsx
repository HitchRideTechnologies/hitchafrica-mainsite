import Image from "next/image";
import bg from "@/assets/sub.jpeg";
import ask from "@/assets/ask.png";

export default function Ask() {
  return (
    <section className="flex flex-col gap-10 md:gap-16 py-10 md:py-24 px-5 md:px-20">
      <div
        className="shadow-xl px-5 md:px-20 flex flex-col md:grid grid-cols-2 gap-10 md:gap-16 items-center relative bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <figure className="w-full h-full hidden md:flex justify-center items-center">
          <Image src={ask} alt="" className="scale-125 object-contain" />
        </figure>
        <div className="py-20 w-full flex flex-col gap-4 text-white">
          <p className="text-xl">
            You can ask about anything you wish to learn
            <br className="hidden md:block" />
            about Hitch Africa
          </p>
          <label className="rounded-md bg-white h-16 w-full flex items-center px-2">
            <input
              type="text"
              className="w-full h-full px-5 bg-inherit text-sm md:text-base rounded-md outline-none"
              placeholder="What do you want to know?"
            />
            <button className="h-[80%] w-fit min-w-fit px-5 text-white bg-primary font-[600] rounded-md">
              Send
            </button>
          </label>
        </div>
      </div>
    </section>
  );
}
