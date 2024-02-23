"use client";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";


const List = [
  {
    question: "How can I become a driver partner with HitchAfrica?",
    answer:
      "Visit our website or app, navigate to the 'Become a Driver' section, and follow the instructions to sign up and join our network of driver partners.",
  },
  {
    question: "What are the requirements to become a driver partner?",
    answer:
      "Requirements may vary by location. Generally, you need a valid driver's license, a registered vehicle, and must meet certain age and insurance criteria.",
  },
  {
    question: "How does the driver rating system work?",
    answer:
      "Riders can rate drivers after each trip. Consistently high ratings lead to more trip opportunities. Safety and professionalism are key factors in driver ratings.",
  },
  {
    question: "How do driver incentives work on HitchAfrica?",
    answer:
      "HitchAfrica offers various incentives and bonuses to driver partners based on factors like trip completion, high ratings, and peak-hour participation.",
  },
  {
    question: "What safety features are in place for driver partners?",
    answer:
      "Driver partners have access to an in-app emergency button, and all trips are tracked in real-time. Additionally, there are safety guidelines and protocols in place.",
  },
];
export default function Two() {
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
        <h3 className="text-2xl md:text-[40px] font-[500] text-red">Driver Partners</h3>
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
