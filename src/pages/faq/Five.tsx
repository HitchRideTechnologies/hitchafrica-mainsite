"use client";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import faq from "@/assets/faq.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const List = [
  {
    question: "What services does Hitch Africa offer",
    answer:
      "From effortlessly sending and receiving funds to seamlessly managing your transactions, our platform ensures a user-centric experience at every step.",
  },
  {
    question: "What services does Hitch Africa offer",
    answer:
      "From effortlessly sending and receiving funds to seamlessly managing your transactions, our platform ensures a user-centric experience at every step.",
  },
  {
    question: "What services does Hitch Africa offer",
    answer:
      "From effortlessly sending and receiving funds to seamlessly managing your transactions, our platform ensures a user-centric experience at every step.",
  },
  {
    question: "What services does Hitch Africa offer",
    answer:
      "From effortlessly sending and receiving funds to seamlessly managing your transactions, our platform ensures a user-centric experience at every step.",
  },
  {
    question: "What services does Hitch Africa offer",
    answer:
      "From effortlessly sending and receiving funds to seamlessly managing your transactions, our platform ensures a user-centric experience at every step.",
  },
  {
    question: "What services does Hitch Africa offer",
    answer:
      "From effortlessly sending and receiving funds to seamlessly managing your transactions, our platform ensures a user-centric experience at every step.",
  },
];
export default function Five() {
    const [activeIndices, setActiveIndices] = useState(new Set());
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
    <main className="px-5 md:px-20 py-10 md:py-14 flex flex-col gap-10">
        <h3 className="text-2xl md:text-[40px] font-[500] other2">Shipping and Delivery</h3>
        <div className="w-full flex flex-col gap-5">
          {List.map((info, index) => (
            <nav
            className="shad px-3 md:px-5 py-2 md:py-4 rounded-lg flex flex-col gap-3 leading-relaxed transition ease-in-out duration-1000 h-fit"
            key={index}
          >
            <div
              className="flex justify-between items-center text-lg md:text-2xl cursor-pointer"
              onClick={() => handleButtonClick(index)}
            >
              <span>{info.question}</span>
                <button
                  className={`font-[600] bg-primary text-white rounded-[50%] min-h-8 min-w-8 h-10 w-10  flex justify-center items-center transition-all ease-in-out duration-1000`}
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
                    <p className={`md:text-xl`}>
                      {activeIndices.has(index) && info.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </nav>
          ))}
        </div>
    </main>
  )
}
