import Image from "next/image";
import feat1 from "@/assets/feat1.png";
import feat2 from "@/assets/feat2.png";
import feat3 from "@/assets/feat3.png";
import feat4 from "@/assets/feat4.png";

export default function Features() {
  return (
    <section
      className="flex flex-col gap-10 py-10 md:py-20 px-5 md:px-20 bg-[#F8F2FF]"
      id="features"
    >
      <div className="flex flex-col md:flex-row gap-5 md:gap-20 w-full">
        <h3 className="min-w-fit text-3xl md:text-[40px] text-[#370D66] font-[600]">
          <span className="text-[#CB1F52] inline"> Our Exciting</span> Features
        </h3>
        <p className="text-lg md:text-2xl">
          Explore some amazing features of our super-app, where innovation meets
          convenience to redefine your digital experience. Welcome to a world
          where every feature is designed to make your journey smoother and more
          enjoyable.
        </p>
      </div>
      {/* <div className=" w-full flex flex-col md:grid grid-cols-4 gap-5">
        <Feat
          icon={feat1}
          title="All-in-one Convenience"
        />
        <Feat
          icon={feat2}
          title="Secured Payments"
        />
        <Feat
          icon={feat3}
          title="Swift Deliveries"
        />
        <Feat
          icon={feat4}
          title="Easy and Fast Checkouts"
        />
      </div> */}
    </section>
  );
}

interface FeatProps {
  icon: any;
  title: string;
}

const Feat = ({ icon, title }: FeatProps): JSX.Element => {
  return (
    <nav className="w-full flex flex-col gap-5 bg-primary text-white rounded-2xl p-6 feat">
      <figure className="w-14 h-14 rounded-[50%] flex justify-center items-center bg-[#EDDDFF]">
        <Image src={icon} alt="" className="h-8 w-8" />
      </figure>
      <b className="font-[600] text-lg">{title}</b>
    </nav>
  );
};
