"use client";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";


const List = [
  {
    question: "How secure is the payment system on HitchAfrica?",
    answer:
      "HitchAfrica employs state-of-the-art encryption and security measures to ensure all transactions are secure. Your financial information is protected.",
  },
  {
    question: "What payment methods are accepted on HitchAfrica?",
    answer:
      "HitchAfrica accepts various payment methods, including credit/debit cards and mobile wallets. Check the app for available options in your location.",
  },
  {
    question: "Can I set a preferred payment method on HitchAfrica?",
    answer:
      "Yes, you can choose a preferred payment method in the app settings for a smoother checkout experience.",
  },
  {
    question:
      "Are there any discounts or promotions available for specific payment methods?",
    answer:
      "HitchAfrica occasionally runs promotions or offers discounts for certain payment methods. Keep an eye on our communications for any ongoing promotions.",
  },
  {
    question:
      "What happens if there's an issue with my payment during a transaction?",
    answer:
      "In the rare event of a payment issue, our support team is available to assist you. You can also check your transaction history in the app for details.",
  },
];
export default function Four() {
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
      <h3 className="text-2xl md:text-[40px] font-[500] text-green">
        Payment System
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
                className={`font-[600] greenGrad text-white rounded-[50%] min-h-8 min-w-8 h-10 w-10  flex justify-center items-center transition-all ease-in-out duration-1000`}
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
