import Image from "next/image";
import bg from "@/assets/how.png";
export default function How() {
  return (
    <main
      className="flex flex-col gap-10 md:gap-16 py-10 md:py-20 px-5 md:px-20"
      id="business"
    >
      <div className="flex flex-col items-center gap-5 mx-auto text-center">
        <h3 className="text-3xl md:text-[40px] text-purple font-[700]">
          <span className="text-red">How the</span> App Works
        </h3>
        <p className="text-lg md:text-2xl">
          Download the application from google play store or the Apple store to
          begin
        </p>
      </div>
      <section
        className="flex flex-col gap-10 md:gap-0 md:grid grid-cols-[1fr_2fr_1fr] grid-rows-1 justify-center items-center text-lg md:text-2xl bg-center bg-contain bg-no-repeat"
      >
        <div className="flex flex-col gap-10 md:gap-40 justify-between items-end w-full">
          <nav className="w-fit flex flex-col gap-3 items-end text-end">
            <span className="bg-[#F8F2FF] rounded h-[50px] md:h-[90px] w-[50px] md:w-[90px] flex justify-center items-center text-3xl md:text-[48px]">
              <span className="grad">1</span>
            </span>
            <b className="font-[600] text-black text-2xl">Sign up as a User</b>
            <p>
              Join HitchAfrica with a simple <br className="hidden md:block" /> sign-up.
            </p>
          </nav>
          <nav className="hidden w-fit md:flex flex-col gap-3 items-end text-end">
            <span className="bg-[#F8F2FF] rounded h-[50px] md:h-[90px] w-[50px] md:w-[90px] flex justify-center items-center text-3xl md:text-[48px]">
              <span className="grad">3</span>
            </span>
            <b className="font-[600] text-black text-2xl">Perform a Transaction</b>
            <p>
              Swiftly execute transactions <br />
              —shop, send money or order <br className="hidden md:block" /> groceries.
            </p>
          </nav>
          <nav className="w-fit md:hidden flex flex-col gap-3 items-start text-start">
            <span className="bg-[#F8F2FF] rounded h-[50px] md:h-[90px] w-[50px] md:w-[90px] flex justify-center items-center text-3xl md:text-[48px]">
              <span className="grad">2</span>
            </span>
            <b className="font-[600] text-black text-2xl">
              Select your preferred service
            </b>
            <p>
              Choose from various services <br className="hidden md:block" /> —meals, rides, and more.
            </p>
          </nav>
        </div>
        <figure className="hidden w-full h-[110%] md:flex items-center">
          <Image src={bg} alt="" className="h-full w-full scale-80 object-contain" />
        </figure>
        <div className="flex flex-col gap-10 md:gap-40 justify-between items-start w-full">
        <nav className="w-fit md:hidden flex flex-col gap-3 items-end text-end">
            <span className="bg-[#F8F2FF] rounded h-[50px] md:h-[90px] w-[50px] md:w-[90px] flex justify-center items-center text-3xl md:text-[48px]">
              <span className="grad">3</span>
            </span>
            <b className="font-[600] text-black text-2xl">Perform a Transaction</b>
            <p>
              Swiftly execute transactions <br />
              —shop, send money or order <br className="hidden md:block" /> groceries.
            </p>
          </nav>
          <nav className="w-fit hidden md:flex flex-col gap-3 items-start text-start">
            <span className="bg-[#F8F2FF] rounded h-[50px] md:h-[90px] w-[50px] md:w-[90px] flex justify-center items-center text-3xl md:text-[48px]">
              <span className="grad">2</span>
            </span>
            <b className="font-[600] text-black text-2xl">
              Select your preferred service
            </b>
            <p>
              Choose from various services <br /> —meals, rides, and more.
            </p>
          </nav>
          <nav className="w-fit flex flex-col gap-3 items-start text-start">
            <span className="rounded h-[50px] md:h-[90px] w-[50px] md:w-[90px] flex justify-center items-center text-3xl md:text-[48px] bg-primary text-white">
              4
            </span>
            <b className="font-[600] text-black text-2xl">Pay and Rate</b>
            <p>
              Finally make payments with <br className="hidden md:block" /> ease and in a secure manner.
              <br className="hidden md:block" /> {`Don't`} forget to rate!{" "}
            </p>
          </nav>
        </div>
      </section>
    </main>
  );
}
