"use client";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import dp1 from "@/assets/dp1.svg";
import dp2 from "@/assets/dp2.svg";

export default function Reviews() {
  const [box1OnTop, setBox1OnTop] = useState(true);

  const toggleBoxes = () => {
    setBox1OnTop(!box1OnTop);
  };

  return (
    <main className="bg-[#F8F2FF] px-5 py-16 md:py-24 flex flex-col md:flex-row justify-center gap-10 md:gap-20">
      <div className="flex flex-col gap-5 md:gap-10">
        <div className="flex flex-col items-start">
          <h3 className="text-3xl md:text-[48px] font-[700] leading-snug">
            What people say <br className="hidden md:block" />{" "}
            <span className="grad inline">about Us.</span>
          </h3>
        </div>
        <p className="text-lg md:text-2xl">
          Our Clients send us bunch of smilies with our
          <br className="hidden md:block" /> services and we love them.
        </p>
        <nav className="flex items-center gap-10">
          <button
            className={`rounded-[50%] h-12 w-12 flex justify-center items-center shadow-xl ${
              box1OnTop ? "bg-primary text-white" : "bg-white border"
            }`}
            onClick={toggleBoxes}
          >
            <FaArrowLeft />
          </button>
          <button
            className={`rounded-[50%] h-12 w-12 flex justify-center items-center shadow-xl ${
              box1OnTop ? "bg-white border" : "bg-primary text-white"
            }`}
            onClick={toggleBoxes}
          >
            <FaArrowRight />
          </button>
        </nav>
      </div>
      <div className="relative w-full md:w-1/3 my-14 h-fit">
        <div
          className={`w-full min-h-fit rounded-2xl inset-0 px-8 py-8 md:py-14 flex flex-col justify-center gap-5 transition-all ease-in-out duration-1000 ${
            box1OnTop
              ? "absolute z-10 translate-x-0 bg-white shadow-xl"
              : "static z-0 md:translate-x-20 translate-y-10 bg-[#66666614] shadow-xl"
          }`}
        >
          <Image
            src={dp1}
            alt=""
            className="h-12 w-12 md:h-16 md:w-16 absolute -top-4 -left-4 md:-top-7 md:-left-7"
          />
          <p className="text-lg md:font-[500]">
            Hitchpay has been a game-changer for me. {`It's`} secure,
            convenient, and incredibly easy to manage my transactions.{" "}
          </p>
          <b className="text-xl font-[600]">Olivia Eze</b>
        </div>
        <div
          className={`w-full min-h-fit rounded-2xl inset-0 px-8 py-8 md:py-14 flex flex-col justify-center gap-5 transition-all ease-in-out duration-1000 ${
            box1OnTop
              ? "static z-0 md:translate-x-20 translate-y-10 bg-[#66666614] shadow-xl"
              : "absolute z-10 translate-x-0 bg-white shadow-xl"
          }`}
        >
          <Image
            src={dp2}
            alt=""
            className="h-12 w-12 md:h-16 md:w-16 absolute -top-4 -left-4 md:-top-7 md:-left-7"
          />
          <p className="text-lg md:font-[500]">
            Hitchpay has helped me to manage my business transactions with ease.
            I can now focus on my business and not worry about my payment
            system.
          </p>
          <b className="text-xl font-[600]">Chris Thomas</b>
        </div>
      </div>
    </main>
  );
}
