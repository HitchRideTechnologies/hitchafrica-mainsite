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
        <p className="text-xl md:text-2xl">
          Explore some amazing features of our super-app, where innovation meets
          convenience to redefine your digital experience. Welcome to a world
          where every feature is designed to make your journey smoother and more
          enjoyable.
        </p>
      </div>
      <div className=" w-full flex flex-col md:grid grid-cols-4 gap-5">
        <Feat
          icon={feat1}
          title="All-in-one Convenience"
          text="Streamline your daily life with our super app that brings the power of digital banking, food delivery, e-commerce, grocery shopping, professional services, and ride-hailing to your fingertips."
        />
        <Feat
          icon={feat2}
          title="Secured Payments"
          text="Seamlessly integrated into our super app, HitchPay guarantees secure payments, putting your financial safety at the forefront of every transaction. Enjoy the peace of mind that comes with a wallet designed for the modern era."
        />
        <Feat
          icon={feat3}
          title="Swift Deliveries"
          text="At the heart of our super app lies a commitment to deliver not just products but an experience—Timely Deliveries, Every Time. No matter what you order our dedicated delivery service ensures that your items arrive promptly."
        />
        <Feat
          icon={feat4}
          title="Easy and Fast Checkouts"
          text="Our super app ensures a seamless and swift checkout process for all your purchases. Breeze through payments effortlessly, with secure and convenient options tailored to your preferences."
        />
      </div>
    </section>
  );
}

interface FeatProps {
  icon: any;
  title: string;
  text: string;
}

const Feat = ({ icon, title, text }: FeatProps): JSX.Element => {
  return (
    <nav className="w-full flex flex-col gap-5 bg-primary text-white rounded-2xl p-8 feat">
      <figure className="w-14 h-14 rounded-[50%] flex justify-center items-center bg-[#EDDDFF]">
        <Image src={icon} alt="" className="h-8 w-8" />
      </figure>
      <b className="font-[600] text-lg">{title}</b>
      <p className="">{text}</p>
    </nav>
  );
};
