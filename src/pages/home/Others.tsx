"use client";
import { FaArrowRight } from "react-icons/fa";
import other1 from "@/assets/other1.png";
import other2 from "@/assets/other2.png";
import other3 from "@/assets/other3.png";
import other4 from "@/assets/other4.png";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Others() {
  const [bg, setBg] = useState(true);
  const updateCarouselSettings = () => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      setBg(true);
    } else {
      setBg(false);
    }
  };
  useEffect(() => {
    updateCarouselSettings();
    window.addEventListener("resize", updateCarouselSettings);
    return () => {
      window.removeEventListener("resize", updateCarouselSettings);
    };
  }, []);

  return (
    <section
      className="flex flex-col gap-10 md:gap-16 py-10 md:py-20 px-5 md:px-20 bg-[#FDFBFF]"
      id="business"
    >
      <div className="flex flex-col items-center gap-5 mx-auto text-center">
        <h3 className="text-3xl md:text-[40px] text-purple font-[700]">
          <span className="text-red">Connecting Journeys,</span> Delivering
          Convenience
        </h3>
        <p className="text-lg md:text-2xl">Your All-in-One Service Companion</p>
      </div>
      <div className=" w-full flex flex-col md:grid grid-cols-2 gap-10">
        <div
          className="z-0 h-auto md:h-[90vh] flex flex-col justify-evenly gap-5 md:gap-10 py-10 md:py-20 px-5 md:pl-10 bg-[rgba(4,187,198,0.20)] relative otherbg bg-contain"
          style={{ backgroundImage: `url(${bg ? "" : other1.src})` }}
        >
          <Image src={other1} alt="" className="md:hidden" />
          <div className="md:min-w-fit md:w-fit flex flex-col gap-3 md:gap-5">
            <span className="other1 font-[600] text-xl">Hitch Ride</span>
            <div className="flex flex-col items-start gap-5">
              <h3 className="text-3xl md:text-[46px] font-[600] leading-snug">
                Book. Ride. <br className="hidden md:block" /> Arrive. Enjoy.
              </h3>
            </div>
            <p className="text-lg md:text-2xl">
              Book a ride, send and receive <br className="hidden md:block" /> a
              package effortlessly. <br className="hidden md:block" />{" "}
              Experience the journey <br className="hidden md:block" />{" "}
              joyfully.
            </p>
          </div>
          <Link href='/ride' className="flex items-center gap-3 text-lg">
            Get Started <FaArrowRight />
          </Link>
        </div>
        <div
          className="z-0 h-auto md:h-[90vh] flex flex-col justify-evenly gap-5 md:gap-10 py-10 md:py-20 px-5 md:pl-10 bg-[rgba(153,113,195,0.10)] relative otherbg bg-contain"
          style={{ backgroundImage: `url(${bg ? "" : other2.src})` }}
        >
          <Image src={other2} alt="" className="md:hidden" />
          <div className="md:min-w-fit md:w-fit flex flex-col gap-3 md:gap-5">
            <span className="other2 font-[600] text-xl">Hitch Food</span>
            <div className="flex flex-col items-start gap-5">
              <h3 className="text-3xl md:text-[46px] font-[600] leading-snug">
                Order, Delight. <br className="hidden md:block" /> Eat.
              </h3>
            </div>
            <p className="text-lg md:text-2xl">
              Savor a feast of flavors with <br className="hidden md:block" />
              our swift food ordering <br className="hidden md:block" /> and
              delivery service.
            </p>
          </div>
          <Link href='/food' className="flex items-center gap-3 text-lg">
            Get Started <FaArrowRight />
          </Link>
        </div>
        <div
          className="z-0 h-auto md:h-[90vh] flex flex-col justify-evenly gap-5 md:gap-10 py-10 md:py-20 px-5 md:pl-10 bg-[#E7F2D6] relative otherbg bg-contain"
          style={{ backgroundImage: `url(${bg ? "" : other3.src})` }}
        >
          <Image src={other3} alt="" className="md:hidden" />
          <div className="md:min-w-fit md:w-fit flex flex-col gap-3 md:gap-5">
            <span className="other3 font-[600] text-xl">
              Hitch Shopping Mart
            </span>
            <div className="flex flex-col items-start gap-5">
              <h3 className="text-3xl md:text-[46px] font-[600] leading-snug">
                Discover. Order. <br className="hidden md:block" /> Receive.
                Enjoy.
              </h3>
            </div>
            <p className="text-lg md:text-2xl">
              Shop for whatever you need, including{" "}
              <br className="hidden md:block" /> groceries, on-demand and have
              it <br className="hidden md:block" /> delivered right to your
              door.
            </p>
          </div>
          <Link href='#' className="flex items-center gap-3 text-lg">
            Get Started <FaArrowRight />
          </Link>
        </div>
        <div
          className="z-0 h-auto md:h-[90vh] flex flex-col justify-evenly gap-5 md:gap-10 py-10 md:py-20 px-5 md:pl-10 bg-[rgba(242,71,137,0.10)] relative otherbg bg-contain"
          style={{ backgroundImage: `url(${bg ? "" : other4.src})` }}
        >
          <Image src={other4} alt="" className="md:hidden" />
          <div className="md:min-w-fit md:w-fit flex flex-col gap-3 md:gap-5">
            <span className="other4 font-[600] text-xl">
              Hitch Professional Services
            </span>
            <div className="flex flex-col items-start gap-5">
              <h3 className="text-3xl md:text-[46px] font-[600] leading-snug">
                Find the Best <br className="hidden md:block" /> Talents with
                Ease
              </h3>
            </div>
            <p className="text-lg md:text-2xl">
              The best talents local to you <br className="hidden md:block" />{" "}
              or remote to complete <br className="hidden md:block" /> assigned
              tasks
            </p>
          </div>
          <Link href='/professional-services' className="flex items-center gap-3 text-lg">
            Get Started <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
