import Image, { StaticImageData } from "next/image";
import icon from "@/assets/icons/icon5.png"
import logo1 from "@/assets/brands/logo1.png";
import logo2 from "@/assets/brands/logo2.png";
import logo3 from "@/assets/brands/logo3.png";
import logo4 from "@/assets/brands/logo-b1.png";
import logo5 from "@/assets/brands/logo-b2.png";
import logo6 from "@/assets/brands/logo-b3.png";


export default function Brand() {
    return (
      <main className="px-5 md:px-20 py-10 md:py-20 flex flex-col gap-8 md:gap-24 w-full">
        <div className="flex flex-col gap-5 md:gap-10">
        <p className="text-2xl">
        Feel the heartbeat of our brand through every asset. Download, share, and be a part of the story {`we're`} telling through our distinctive visual journey.
        </p>
          <div className="flex flex-col gap-5 md:gap-10 md:grid grid-cols-3">
            <Single img={logo1} text="Primary Logo" show={true} /> 
            <Single img={logo2} text="Other Logo" show={true} /> 
            <Single img={logo3} text="Other Logo" show={true} /> 
            <Single img={logo1} text="Other Logo" show={true} /> 
            <Single img={logo1} text="Other Logo" show={true} /> 
            <Single img={logo1} text="Other Logo" show={true} /> 
          </div>
        </div>
        <div className="flex flex-col gap-5 md:gap-10">
        <h3 className="text-3xl md:text-[40px] font-[500] leading-snug">
          Logo Usage
          </h3>
        <p className="text-2xl">
        Our logo is a symbol of our brand identity, representing our values. Please ensure that when using our logo, you adhere to our brand guidelines to maintain its integrity and to present a unified and professional image across all platforms.
        </p>
          <div className="flex flex-col gap-5 md:gap-10 md:grid grid-cols-3">
          <Single img={logo4} text="Do not stretch the logo" show={false} /> 
            <Single img={logo5} text="Do not compress the logo" show={false} /> 
          <Single img={logo6} text="Do not use gradients" show={false} /> 
          </div>
        </div>
      </main>
    );
  }
  
  interface Props {
    img: StaticImageData;
    text: string;
    show: boolean;
  }
  
  const Single = ({ img, text, show }: Props): JSX.Element => {
    return (
        <div className="flex flex-col gap-4">
      <nav className={`w-full min-h-[280px] rounded-2xl flex justify-center items-center gap-2 py-8 px-5 relative shadow-[0px_0px_38px_0px_rgba(0,0,0,0.03)]`}
      >
        <button className={`w-14 h-14 bg-white rounded-[50%] shadow-[0px_0px_55.10869598388672px_rgba(0,0,0,0.10)] absolute right-5 top-5 ${show ? "flex" : "hidden"} justify-center items-center`}>
        <Image src={icon} alt="" className="h-8 w-8" />
        </button>
        <Image src={img} alt="" className="" />
      </nav>
      <p className="text-xl">{text}</p>
      </div>
    );
  };
  