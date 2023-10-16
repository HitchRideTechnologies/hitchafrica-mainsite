import pay from "@/assets/pay.png";
import bg from "@/assets/paybg.png";
import Image from "next/image";

export default function Pay() {
  return (
    <main className="flex flex-col">
      <div
        className="px-5 md:px-20 flex flex-col items-center md:grid grid-cols-2 bg-[#F8F2FF] paybg bg-contain"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <figure className="flex justify-center items-center z-10">
          <Image src={pay} alt="" />
        </figure>
        <div className="w-full flex flex-col justify-end gap-5 md:gap-8 ">
          <span className="grad font-[600] text-xl">Hitch Pay</span>
          <div className="flex flex-col items-start gap-5">
            <h3 className="text-3xl md:text-[48px] text-[#1E1E1E] font-[600] leading-normal">
              Send. Receive. Manage. Transactions
            </h3>
          </div>
          <p className="text-xl md:text-2xl">
            From effortlessly sending and receiving funds to seamlessly managing
            your transactions, our platform ensures a user-centric experience at
            every step.
          </p>
          <button className="text-white bg-primary px-7 rounded-md min-w-fit w-fit h-12 font-[500]">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
}
