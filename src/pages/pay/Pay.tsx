import Image from "next/image";
import pay3 from "@/assets/pay3.png";
import playstore from "@/assets/playstore-w.png";
import appstore from "@/assets/appstore-w.png";
import step1 from "@/assets/steps/step1.svg";
import step2 from "@/assets/steps/step2.svg";
import step3 from "@/assets/steps/step3.svg";

export default function Pay() {
  return (
    <main className="flex flex-col md:flex-row items-center gap-10 md:gap-14 py-10 px-5 md:px-0 z-0 relative">
      <div className="md:w-1/2">
        <Image src={pay3} alt="" className="object-cover w-full" unoptimized />
      </div>
      <div className="flex flex-col gap-10 min-w-fit w-fit">
        <span className="grad font-[600] text-xl">Hitch Pay</span>
        <div className="flex flex-col items-start gap-3">
          <b className="text-3xl md:text-[48px] font-[600]">
            Simple solutions to <br className="hidden md:block" /> power your
            business
          </b>
          <span className="w-[100px] h-[5px] under"></span>
        </div>
        <div className="flex flex-col gap-14">
          <Step
            icon={step1}
            text="Sign up with just an Email address or Phone number"
          />
          <Step icon={step2} text="Securely add your cards and bank accounts" />
          <Step icon={step3} text="Safely make and receive payments" />
        </div>
        <div className="flex flex-col md:flex-row gap-5 text-lg mx-auto md:mx-0">
          <a href="https://play.google.com/store/apps/developer?id=HITCHRIDE+TECHNOLOGY+LTD" className="bg-primary text-white flex py-3 px-8 gap-4 rounded-xl justify-center items-center w-fit min-w-fit">
            <Image src={playstore} alt="" className="h5" />
            <span className="text-start flex flex-col gap-1">
              <small className="text-xs">Download on</small> Google Play
            </span>
          </a>
          <a href="https://play.google.com/store/apps/developer?id=HITCHRIDE+TECHNOLOGY+LTD" className="bg-primary text-white flex py-3 px-8 gap-4 rounded-xl justify-center items-center w-fit min-w-fit">
            <Image src={appstore} alt="" className="h-" />
            <span className="text-start flex flex-col gap-1">
              <small className="text-xs">Download on</small> Apple Store
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
type StepProps = {
  icon: string;
  text: string;
};

const Step = ({ icon, text }: StepProps) => {
  return (
    <nav className="w-full flex items-center gap-3 md:gap-5">
      <figure className="step rounded-[50%] flex justify-center items-center bg-white md:min-w-16 md:min-h-16 md:w-16 md:h-16 min-w-12 min-h-12 w-12 h-12">
        <Image src={icon} alt="" className="md:h-8 md:w-8 h-6 w-6" />
      </figure>
      <span className="md:text-lg md:font-[500]">{text}</span>
    </nav>
  );
};
