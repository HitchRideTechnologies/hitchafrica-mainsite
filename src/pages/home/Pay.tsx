import pay from "@/assets/pay.png";
import bg from "@/assets/paybg.png";
import Image from "next/image";
import Link from "next/link"
export default function Pay() {
  return (
    <main className="flex flex-col">
      <div
        className="px-5 md:px-20 py-10 md:py-0 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 bg-[#F8F2FF] paybg bg-contain"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <figure className="hidden md:block">
          <Image src={pay} alt="" className="object-contain" />
        </figure>
        <div className="md:w-fit md:min-w-fit flex flex-col justify-end gap-5 md:gap-8">
          <span className="grad font-[600] text-xl">Hitch Pay</span>
          <div className="flex flex-col items-start">
            <h3 className="text-3xl md:text-[48px] text-[#1E1E1E] font-[600] leading-normal">
              Send. Receive. <br className="hidden md:block" /> Manage.
              Transactions
            </h3>
          </div>
          <p className="text-lg md:text-2xl">
            Our platform makes sure that every stage of the{" "}
            <br className="hidden md:block" /> process is customer-focused, from
            sending and receiving <br className="hidden md:block" /> money to
            maintaining your transactions with ease.
          </p>
          <Link href="/pay" className="text-white bg-primary px-7 rounded-md min-w-fit w-fit h-12 font-[500] flex justify-center items-center">
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
