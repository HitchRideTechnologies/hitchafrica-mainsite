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
        <p className="text-2xl">
          Download the application from google play store or the Apple store to
          begin
        </p>
      </div>
      <section
        className="flex flex-col gap-40 text-2xl bg-center bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="flex justify-between items-start w-full">
          <nav className="w-fit flex flex-col gap-3 items-end text-end">
            <span className="bg-[#F8F2FF] rounded h-[90px] w-[90px] flex justify-center items-center text-[48px]">
              <span className="grad">1</span>
            </span>
            <b className="font-[600] text-black">Sign up as a User</b>
            <p>
              Join HitchAfrica with a simple <br /> sign-up.
            </p>
          </nav>
          <nav className="w-fit flex flex-col gap-3 items-start text-start">
            <span className="bg-[#F8F2FF] rounded h-[90px] w-[90px] flex justify-center items-center text-[48px]">
              <span className="grad">2</span>
            </span>
            <b className="font-[600] text-black">
              Select your preferred service
            </b>
            <p>
              Choose from various services <br /> —meals, rides, and more.
            </p>
          </nav>
        </div>
        <div className="flex justify-between items-start w-full">
          <nav className="w-fit flex flex-col gap-3 items-end text-end">
            <span className="bg-[#F8F2FF] rounded h-[90px] w-[90px] flex justify-center items-center text-[48px]">
              <span className="grad">3</span>
            </span>
            <b className="font-[600] text-black">Perform a Transaction</b>
            <p>
              Swiftly execute transactions <br />
              —shop, send money or order <br /> groceries.
            </p>
          </nav>
          <nav className="w-fit flex flex-col gap-3 items-start text-start">
            <span className="rounded h-[90px] w-[90px] flex justify-center items-center text-[48px] bg-primary text-white">
              4
            </span>
            <b className="font-[600] text-black">Pay and Rate</b>
            <p>
              Finally make payments with <br /> ease and in a secure manner.
              <br /> {`Don't`} forget to rate!{" "}
            </p>
          </nav>
        </div>
      </section>
    </main>
  );
}
