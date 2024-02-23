"use client";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const List = [
  {
    question: " What is HitchAfrica?",
    answer:
      "HitchAfrica is a comprehensive app designed to simplify your daily life, offering secured payments, swift deliveries, and ride-sharing—all in one place for your convenience.",
  },
  {
    question: "How does HitchAfrica work?",
    answer:
      "Simply download the app, sign up, and explore its features. Whether you need secure payments, fast deliveries, or professional services, HitchAfrica has you covered.",
  },
  {
    question: "Is HitchAfrica available in my city/country?",
    answer:
      "Check our app store listings or visit our website for the most up-to-date information on HitchAfrica's availability in your location.",
  },
  {
    question: "How can I stay updated on HitchAfrica's launch?",
    answer:
      "Follow our social media channels for the latest updates, sneak peeks, and launch announcements.",
  },
  {
    question: "Can I use HitchAfrica for both personal and business needs?",
    answer:
      "Yes, HitchAfrica is designed to cater to both personal and business requirements, providing a versatile solution for a wide range of users.",
  },
  {
    question: "Are there any membership or subscription fees to use HitchAfrica?",
    answer:
      "No, HitchAfrica is a free-to-use app. You only pay for the services you use, such as ride-sharing or ordering from merchants.",
  },
  {
    question: "Is HitchAfrica available on multiple platforms?",
    answer:
      "Yes, HitchAfrica is available for download on both Android and iOS platforms. Visit the respective app stores to get started.",
  },
  {
    question: "Can I provide feedback or report issues within the HitchAfrica app?",
    answer:
      "Absolutely! We encourage users to share feedback through the app. You can also contact our support team for assistance with any issues.",
  },
  
];
export default function One() {
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
        <h3 className="text-2xl md:text-[40px] font-[500] grad">General Questions</h3>
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
                  className={`font-[600] bg-primary text-white rounded-[50%] h-10 w-10 min-h-10 min-w-10  flex justify-center items-center transition-all ease-in-out duration-1000`}
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
