import Image, { StaticImageData } from "next/image";
import img1 from "@/assets/images/img1.png";
import img2 from "@/assets/images/img2.png";
import img3 from "@/assets/images/img3.png";
import img4 from "@/assets/images/img4.png";
import img5 from "@/assets/images/img5.png";
import img6 from "@/assets/images/img6.png";
import img7 from "@/assets/images/img7.png";
import img8 from "@/assets/images/img8.png";
import img9 from "@/assets/images/img9.png";
import img10 from "@/assets/images/img10.png";
import icon1 from "@/assets/icons/icon2.png"
import icon2 from "@/assets/icons/icon5.png"
import icon3 from "@/assets/icons/icon1.png"
import icon4 from "@/assets/icons/icon4.png"
import icon5 from "@/assets/icons/icon5.png"



export default function People() {
  return (
    <main className="px-5 md:px-20 py-10 md:py-20 flex flex-col gap-8 md:gap-14 w-full">
      <p className="text-2xl">
        Get ready to be inspired, because here, our products are more than just
        items – {`they're`} a reflection of our dedication to making things that
        matter.
      </p>
      <div className="flex flex-col gap-5">
        <h3 className="text-3xl md:text-[40px] why font-[500] leading-snug">
        Hitch Ride
        </h3>
        <div className="flex flex-col gap-5 md:gap-10 md:grid grid-cols-2 grid-rows-1">
          <Single img={img1} icon={icon1} bg="#F1FEFF" /> 
          <Single img={img2} icon={icon1} bg="#F1FEFF" /> 
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-3xl md:text-[40px] text-purple font-[500] leading-snug">
        Hitch Food
        </h3>
        <div className="flex flex-col gap-5 md:gap-10 md:grid grid-cols-2 grid-rows-1">
          <Single img={img3} icon={icon2} bg="#FDFAFF" /> 
          <Single img={img4} icon={icon2} bg="#FDFAFF" /> 
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-3xl md:text-[40px] text-red font-[500] leading-snug">
        Hitch Professional Services
        </h3>
        <div className="flex flex-col gap-5 md:gap-10 md:grid grid-cols-2 grid-rows-1">
          <Single img={img5} icon={icon3} bg="#FFF2F6" /> 
          <Single img={img6} icon={icon3} bg="#FFF2F6" /> 
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-3xl md:text-[40px] text-[#008000] font-[500] leading-snug">
        Hitch Mart
        </h3>
        <div className="flex flex-col gap-5 md:gap-10 md:grid grid-cols-2 grid-rows-1">
          <Single img={img7} icon={icon4} bg="#F8FFF6" /> 
          <Single img={img8} icon={icon4} bg="#F8FFF6" /> 
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-3xl md:text-[40px] text-purple font-[500] leading-snug">
        Hitch Pay
        </h3>
        <div className="flex flex-col gap-5 md:gap-10 md:grid grid-cols-2 grid-rows-1">
          <Single img={img9} icon={icon5} bg="#FDFAFF" /> 
          <Single img={img10} icon={icon5} bg="#FDFAFF" /> 
        </div>
      </div>
    </main>
  );
}

interface Props {
  icon: StaticImageData;
  img: StaticImageData;
  bg: string;
}

const Single = ({ icon, img, bg }: Props): JSX.Element => {
  return (
    <nav className={`w-full rounded-xl flex justify-center items-center gap-2 py-8 px-5 relative`}
      style={{backgroundColor: `${bg}`}}
    >
      <button className="w-14 h-14 bg-white rounded-[50%] shadow-[0px_0px_55.10869598388672px_rgba(0,0,0,0.10)] absolute right-5 top-5 flex justify-center items-center">
      <Image src={icon} alt="" className="" />
      </button>
      <Image src={img} alt="" className="" />
    </nav>
  );
};
