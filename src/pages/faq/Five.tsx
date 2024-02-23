"use client";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const List = [
  {
    question: "How do I place an order for food or groceries on HitchAfrica?",
    answer:
      "Open the app, choose the desired service, browse options, add items to your cart, and complete the order by following the prompts.",
  },
  {
    question: "How can I schedule a ride on HitchAfrica?",
    answer:
      "Enter your destination, choose your ride option, set the pickup time, and confirm your booking to schedule a ride.",
  },
  {
    question: "Can I track my order or ride in real-time?",
    answer:
      "Yes, real-time tracking is available for both orders and rides. You can monitor the progress within the app.",
  },
  {
    question: "How do I contact customer support on HitchAfrica?",
    answer:
      "Navigate to the app's help or support section to find contact details for customer support. You can typically reach them via chat, email, or phone.",
  },
  {
    question: "Can I cancel an order or ride after it's been confirmed?",
    answer:
      "Yes, you can cancel orders or rides within a certain time frame. However, cancellation policies may apply, so be sure to check the terms before canceling.",
  },
  {
    question: "Is there a loyalty program for frequent users on HitchAfrica?",
    answer:
      "HitchAfrica may offer loyalty programs or rewards for frequent users. Stay updated on our announcements for any ongoing loyalty initiatives.",
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
        <h3 className="text-2xl md:text-[40px] font-[500] other2">How-to Questions</h3>
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
