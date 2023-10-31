"use client";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import faq from "@/assets/faq.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const List = [
  {
    question: "What services does Hitch Africa offer 1",
    answer:
      "From effortlessly sending and receiving funds to seamlessly managing your transactions, our platform ensures a user-centric experience at every step.",
  },
  {
    question: "What services does Hitch Africa offer 2",
    answer:
      "From effortlessly sending and receiving funds to seamlessly managing your transactions, our platform ensures a user-centric experience at every step.",
  },
  {
    question: "What services does Hitch Africa offer 3",
    answer:
      "From effortlessly sending and receiving funds to seamlessly managing your transactions, our platform ensures a user-centric experience at every step.",
  },
  {
    question: "What services does Hitch Africa offer 4",
    answer:
      "From effortlessly sending and receiving funds to seamlessly managing your transactions, our platform ensures a user-centric experience at every step.",
  },
  {
    question: "What services does Hitch Africa offer 5",
    answer:
      "From effortlessly sending and receiving funds to seamlessly managing your transactions, our platform ensures a user-centric experience at every step.",
  },
  {
    question: "What services does Hitch Africa offer 6",
    answer:
      "From effortlessly sending and receiving funds to seamlessly managing your transactions, our platform ensures a user-centric experience at every step.",
  },
  {
    question: "What services does Hitch Africa offer 7",
    answer:
      "From effortlessly sending and receiving funds to seamlessly managing your transactions, our platform ensures a user-centric experience at every step.",
  },
  {
    question: "What services does Hitch Africa offer 8",
    answer:
      "From effortlessly sending and receiving funds to seamlessly managing your transactions, our platform ensures a user-centric experience at every step.",
  },
  {
    question: "What services does Hitch Africa offer 9",
    answer:
      "From effortlessly sending and receiving funds to seamlessly managing your transactions, our platform ensures a user-centric experience at every step.",
  },
  {
    question: "What services does Hitch Africa offer 10",
    answer:
      "From effortlessly sending and receiving funds to seamlessly managing your transactions, our platform ensures a user-centric experience at every step.",
  },
  {
    question: "What services does Hitch Africa offer 11",
    answer:
      "From effortlessly sending and receiving funds to seamlessly managing your transactions, our platform ensures a user-centric experience at every step.",
  },
  {
    question: "What services does Hitch Africa offer 12",
    answer:
      "From effortlessly sending and receiving funds to seamlessly managing your transactions, our platform ensures a user-centric experience at every step.",
  },
];

export default function FAQ() {
  const [activeIndices, setActiveIndices] = useState(new Set());
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(6);
  const handleButtonClick = (index: number) => {
    setActiveIndices((prevIndices) => {
      const newIndices = new Set(prevIndices);
      if (newIndices.has(index)) {
        newIndices.delete(index);
      } else {
        newIndices.add(index);
      }
      return newIndices;
    });
  };

  return (
    <main className="flex flex-col gap-10 md:gap-16 py-10 md:py-20 px-5 md:px-20 bg-[#FDFBFF]">
      <div className="flex flex-col items-center gap-5 mx-auto text-center">
        <h3 className="text-3xl md:text-[40px] text-purple font-[700]">
          <span className="text-red">Frequently Asked </span> Questions
        </h3>
        <p className="text-lg md:text-2xl">
          Answers to Your Questions: Clearing Doubts and Providing Clarity
        </p>
      </div>
      <section className="flex flex-col-reverse md:grid grid-cols-[1.2fr_1fr] grid-rows-1 gap-5 md:gap-10">
        <div className="w-full flex flex-col gap-5">
          {List.slice(start, end).map((info, index) => (
            <nav
              className="shad px-5 py-2 md:py-4 rounded-lg flex flex-col gap-3 leading-relaxed transition ease-in-out duration-1000 h-fit"
              key={index}
            >
              <div
                className="flex justify-between items-center md:text-xl cursor-pointer"
                onClick={() => handleButtonClick(index)}
              >
                <span>{info.question}</span>
                <button
                  className={`font-[600] bg-primary text-white rounded-[50%] min-h-8 min-w-8 h-8 w-8 md:min-h-10 md:min-w-10 md:h-10 md:w-10 text-sm md:text-base flex justify-center items-center transition-all ease-in-out duration-1000`}
                >
                  {activeIndices.has(index) ? <FaMinus /> : <FaPlus />}
                </button>
              </div>
              <AnimatePresence>
                {activeIndices.has(index) && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-clip"
                  >
                    <p className={`md:text-lg`}>
                      {activeIndices.has(index) && info.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </nav>
          ))}
          <nav className="flex items-center justify-center gap-10">
            <button
              className={`rounded-[50%] h-10 w-10 flex justify-center items-center shadow-xl ${
                start !== 0 ? "bg-primary text-white" : "bg-white border"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setStart(0);
                setEnd(6);
              }}
            >
              <FaChevronLeft className="-translate-x-[1px]" />
            </button>
            <button
              className={`rounded-[50%] h-10 w-10 flex justify-center items-center shadow-xl ${
                start === 6 ? "bg-white border" : "bg-primary text-white"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setStart(6);
                setEnd(List.length);
              }}
            >
              <FaChevronRight className="translate-x-[1px]" />
            </button>
          </nav>
        </div>
        <div className="flex flex-col gap-5">
          <Image src={faq} alt="" className="shad w-full" />
          {/* <p className="md:text-xl">
            You can ask about anything you wish you learn about HitchAfrica
          </p>
          <label className="flex bg-white h-14 rounded-lg px-2 shad">
            <input
              type="text"
              placeholder="Let us know"
              className="w-full px-2 h-full bg-inherit text-sm"
            />
            <button className="min-w-fit w-fit px-5 md:px-10 text-white bg-primary h-[90%] my-auto rounded-md">
              Send
            </button>
          </label> */}
        </div>
      </section>
    </main>
  );
}
