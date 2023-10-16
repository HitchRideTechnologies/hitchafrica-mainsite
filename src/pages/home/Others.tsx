import { FaArrowRight } from "react-icons/fa";
import other1 from "@/assets/other1.png";
import other2 from "@/assets/other2.png";
import other3 from "@/assets/other3.png";
import other4 from "@/assets/other4.png";

export default function Others() {
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
        <p className="text-2xl">
          HitchAfrica- Your All-in-One Service Companion
        </p>
      </div>
      <div className=" w-full flex flex-col md:grid grid-cols-2 gap-10">
        <div
          className="h-auto md:h-[90vh] flex flex-col justify-evenly gap-10 py-20 pl-5 md:pl-10 bg-[rgba(4,187,198,0.20)] relative otherbg bg-contain"
          style={{ backgroundImage: `url(${other1.src})` }}
        >
          <div className="w-3/5 flex flex-col gap-5">
            <span className="other1 font-[600] text-xl">Hitch Ride</span>
            <div className="flex flex-col items-start gap-5">
              <h3 className="text-3xl md:text-[46px] font-[600] leading-snug">
                Book. Ride. Arrive. Enjoy.
              </h3>
            </div>
            <p className="text-xl md:text-2xl">
              Book a ride, send and receive a package effortlessly. Experience
              the journey joyfully.
            </p>
          </div>
          <button className="flex items-center gap-3 text-lg">
            Get Started <FaArrowRight />
          </button>
        </div>
        <div
          className="h-auto md:h-[90vh] flex flex-col justify-evenly gap-10 py-20 pl-5 md:pl-10 bg-[rgba(153,113,195,0.10)] relative otherbg bg-contain"
          style={{ backgroundImage: `url(${other2.src})` }}
        >
          <div className="w-3/5 flex flex-col gap-5">
            <span className="other2 font-[600] text-xl">Hitch Food</span>
            <div className="flex flex-col items-start gap-5">
              <h3 className="text-3xl md:text-[46px] font-[600] leading-snug">
                Order, Delight. Eat.
              </h3>
            </div>
            <p className="text-xl md:text-2xl">
              Savor a feast of flavors with our swift food ordering and delivery
              service.
            </p>
          </div>
          <button className="flex items-center gap-3 text-lg">
            Get Started <FaArrowRight />
          </button>
        </div>
        <div
          className="h-auto md:h-[90vh] flex flex-col justify-evenly gap-10 py-20 pl-5 md:pl-10 bg-[#E7F2D6] relative otherbg bg-contain"
          style={{ backgroundImage: `url(${other3.src})` }}
        >
          <div className="w-3/5 flex flex-col gap-5">
            <span className="other3 font-[600] text-xl">
              Hitch Shopping Mart
            </span>
            <div className="flex flex-col items-start gap-5">
              <h3 className="text-3xl md:text-[46px] font-[600] leading-snug">
                Discover. Order. Receive. Enjoy.
              </h3>
            </div>
            <p className="text-xl md:text-2xl">
              Shopping for all your products an groceries with ease and have it
              delivered to your doorsteps
            </p>
          </div>
          <button className="flex items-center gap-3 text-lg">
            Get Started <FaArrowRight />
          </button>
        </div>
        <div
          className="h-auto md:h-[90vh] flex flex-col justify-evenly gap-10 py-20 pl-5 md:pl-10 bg-[rgba(242,71,137,0.10)] relative otherbg bg-contain"
          style={{ backgroundImage: `url(${other4.src})` }}
        >
          <div className="w-3/5 flex flex-col gap-5">
            <span className="other4 font-[600] text-xl">
              Hitch Professional Services
            </span>
            <div className="flex flex-col items-start gap-5">
              <h3 className="text-3xl md:text-[46px] font-[600] leading-snug">
                Find the Best Talents with Ease
              </h3>
            </div>
            <p className="text-xl md:text-2xl">
              The best talents local to you or remote to complete assigned tasks
            </p>
          </div>
          <button className="flex items-center gap-3 text-lg">
            Get Started <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
