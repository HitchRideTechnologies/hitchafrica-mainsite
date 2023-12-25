import Image, { StaticImageData } from "next/image";
import dicon1 from "@/assets/dicon1.png";
import dicon2 from "@/assets/dicon2.png";
import dicon3 from "@/assets/dicon3.png";

export default function Why() {
  return (
    <section
      className="flex flex-col gap-10 py-10 md:py-20 px-5 md:px-20 bg-[#9971C31A]"
      id="features"
    >
      <div className="flex flex-col items-center gap-5 mx-auto text-center">
        <h3 className="text-3xl md:text-[40px] text-red font-[700]">
          <span className="text-purple">Why Choose</span> Hitch Package Delivery
        </h3>
        <p className="text-lg md:text-2xl">Your All-in-One Service Companion</p>
      </div>
      <div className=" w-full flex flex-col md:grid grid-cols-3 gap-10">
        <Feat
          icon={dicon1}
          title="Trackable"
          text="Keep track of your package's location and driver, real-time."
        />
        <Feat
          icon={dicon2}
          title="Secure"
          text="In addition to being a fast and reliable shipping service, we also ensure security"
        />
        <Feat
          icon={dicon3}
          title="Speedy delivery"
          text="You can stay productive while we pick up and drop off your package, all within hours!"
        />
      </div>
    </section>
  );
}

type FeatProps = {
  icon: StaticImageData;
  title: string;
  text: string;
};

const Feat = ({ icon, title, text }: FeatProps) => {
  return (
    <nav className="w-full flex flex-col gap-5 bg-white rounded-2xl p-6 feat">
      <Image src={icon} alt="" className="h-8 w-8 md:h-12 md:w-12" />
      <b className="font-[500] text-2xl md:text-[28px]">{title}</b>
      <p className="text-xl md:text-2xl">{text}</p>
    </nav>
  );
};
