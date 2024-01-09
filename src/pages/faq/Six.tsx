"use client";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";


const List = [
  {
    question: "How is my personal information protected on HitchAfrica?",
    answer:
      "We prioritize user privacy. Your data is encrypted, and we adhere to strict security protocols to safeguard your personal information.",
  },
  {
    question: "What measures are in place to ensure the safety of ride-sharing services?",
    answer:
      "We conduct thorough background checks on driver partners and have safety features in the app, including real-time tracking and an emergency assistance button.",
  },
  {
    question: "Is my payment information secure when using HitchAfrica?",
    answer:
      "Absolutely. Our payment system uses industry-standard encryption to secure your financial information, ensuring a safe and reliable transaction experience.",
  },
  {
    question: "How are disputes resolved on HitchAfrica?",
    answer:
      "Disputes are handled through our customer support team. Users can report issues, and our team will investigate and resolve them according to our policies.",
  },
  {
    question: "What measures are in place to prevent fraud on HitchAfrica?",
    answer:
      "We employ advanced fraud detection and prevention tools to safeguard against fraudulent activities and unauthorized access.",
  },
  {
    question: "How often is user data updated, and is it shared with third parties?",
    answer:
      "User data is regularly updated as needed, and we prioritize privacy. User information is not shared with third parties without explicit consent. Refer to our privacy policy for more details.",
  },
];

export default function Six() {
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
        <h3 className="text-2xl md:text-[40px] font-[500] text-red">Security FAQ</h3>
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
                  className={`font-[600] redGrad text-white rounded-[50%] min-h-8 min-w-8 h-10 w-10  flex justify-center items-center transition-all ease-in-out duration-1000`}
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
