import Image from "next/image";
import feat1 from "@/assets/feat1.png";
import feat2 from "@/assets/feat2.png";
import feat3 from "@/assets/feat3.png";
import feat4 from "@/assets/feat4.png";
import feat5 from "@/assets/feat5.png";
import feat6 from "@/assets/feat6.png";
import Marquee from "react-fast-marquee";
import img1 from "@/assets/car/img1.png";
import img2 from "@/assets/car/img2.png";
import img3 from "@/assets/car/img3.png";
import img4 from "@/assets/car/img4.png";
import img5 from "@/assets/car/img5.png";
import img6 from "@/assets/car/img6.png";
// import img7 from "@/assets/car/img7.png";
// import img8 from "@/assets/car/img8.png";
// import img9 from "@/assets/car/img9.png";
// import img10 from "@/assets/car/img10.png";

export default function Features() {
  return (
    <section
      className="flex flex-col gap-10 py-10 md:py-20 bg-primary text-white"
      id="features"
    >
      <div className="flex flex-col md:flex-row gap-5 md:gap-20 w-full px-5 md:px-20">
        <h3 className="min-w-fit text-3xl md:text-[40px] font-[600]">
          <span className="inline"> Our Exciting</span> Features
        </h3>
        <p className="text-lg md:text-2xl">
          Explore some amazing features of our super-app, where innovation meets
          convenience to redefine your digital experience. Welcome to a world
          where every feature is designed to make your journey smoother and more
          enjoyable.
        </p>
      </div>
      <Marquee className="" autoFill={true} speed={170}>
        <Feat icon={feat1} title="All-in-one Convenience" />
        <Feat icon={feat2} title="Secured Payments" />
        <Feat icon={feat3} title="Swift Deliveries" />
        <Feat icon={feat4} title="Easy and Fast Checkouts" />
        <Feat icon={feat5} title="Stringent quality control" />
        <Feat icon={feat6} title="24/7 Customer Support" />
      </Marquee>
      <Marquee className="" autoFill={true} speed={170}>
        <Image src={img1} alt="" className="px-5 " />
        <Image src={img2} alt="" className="px-5 mt-20 z-10" />
        <Image src={img3} alt="" className="px-5 " />
        <Image src={img4} alt="" className="px-5 mt-20 z-10" />
        <Image src={img5} alt="" className="px-5 " />
        <Image src={img6} alt="" className="px-5 mt-20 z-10" />
        {/* <Image src={img7} alt="" className="px-5 " />
        <Image src={img8} alt="" className="px-5 mt-20 z-10" />
        <Image src={img9} alt="" className="px-5 " />
        <Image src={img10} alt="" className="px-5 mt-20 z-10" /> */}
      </Marquee>
    </section>
  );
}

interface FeatProps {
  icon: any;
  title: string;
}

const Feat = ({ icon, title }: FeatProps): JSX.Element => {
  return (
    <nav className="w-fit mx-5 flex items-center gap-3 rounded-2xl px-6 py-4 border relative z-[0]">
      <div className="backdrop-blur-[20px] rounded-2xl bg-white opacity-[0.3] absolute w-full h-full left-0 top-0 z-[-1]"></div>
      <Image src={icon} alt="" className="h-10 w-10" />
      <b className="font-[600] text-lg">{title}</b>
    </nav>
  );
};
