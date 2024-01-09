"use client";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const List = [
  {
    question: "How can my business become a merchant partner with HitchAfrica?",
    answer:
      "Head to our website or app, find the 'Merchant Partnerships' section, and follow the application process to become a part of our merchant network.",
  },
  {
    question: "What are the benefits of being a HitchAfrica merchant partner?",
    answer:
      "Joining as a merchant partner increases your visibility, expands your customer base, and provides a convenient platform for secure transactions.",
  },
  {
    question: "Are there any fees for businesses to join as a merchant partner?",
    answer:
      "Details about fees and partnership terms are available in the merchant partnership section. Contact our customer support team for personalized information.",
  },
  {
    question: "How can I update my business information on HitchAfrica?",
    answer:
      "You can manage and update your business information, including menu and services, through the merchant portal available on the HitchAfrica website.",
  },
  {
    question: "What kind of businesses can become HitchAfrica merchant partners?",
    answer:
      "HitchAfrica welcomes a variety of businesses, including restaurants, grocery stores, and professional service providers (Barbers, Hairstylists, Gas merchants, Plumbers, Cobblers, Bakers, Event planners, etc.). Contact our customer support team for partnership inquiries.",
  },
  {
    question: "Is there a rating system for merchant partners?",
    answer:
      "Yes, customers can rate and review their experiences with merchant partners, helping to maintain a high standard of service.",
  },
];
export default function Three() {
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
      <h3 className="text-2xl md:text-[40px] font-[500] text-secondary">
        Merchant Partners
      </h3>
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
                className={`font-[600] whybtn text-white rounded-[50%] min-h-8 min-w-8 h-10 w-10  flex justify-center items-center transition-all ease-in-out duration-1000`}
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
  );
}
