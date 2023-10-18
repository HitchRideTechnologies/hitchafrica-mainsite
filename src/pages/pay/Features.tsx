import Image from "next/image";
import feat1 from "@/assets/feat/feat1.svg";
import feat2 from "@/assets/feat/feat2.svg";
import feat3 from "@/assets/feat/feat3.svg";
import feat4 from "@/assets/feat/feat4.svg";

export default function Features() {
  return (
    <section
      className="flex flex-col gap-10 py-10 md:py-20 px-5 md:px-20"
      id="features"
    >
      <div className="flex flex-col items-center gap-5 mx-auto text-center">
        <h3 className="text-3xl md:text-[46px] text-black font-[600]">
          Explore Our Exciting Features
        </h3>
        <span className="w-[100px] h-[5px] under"></span>
      </div>
      <div className=" w-full flex flex-col md:grid grid-cols-2 gap-10">
        <Feat
          icon={feat1}
          title="Built-in Security and Privacy"
          text="Your financial data and transactions are safe "
        />
        <Feat
          icon={feat2}
          title="Easier and Faster Checkouts"
          text="No need for multiple banking and payment apps"
        />
        <Feat
          icon={feat3}
          title="Accessible to all"
          text="Hitchpay is designed for everyone"
        />
        <Feat
          icon={feat4}
          title="Seamless Fund Transfer"
          text="Effortlessly send and receive money anytime, anywhere"
        />
      </div>
    </section>
  );
}

type FeatProps = {
  icon: string;
  title: string;
  text: string;
};

const Feat = ({ icon, title, text }: FeatProps) => {
  return (
    <nav className="w-full flex flex-col gap-5 bg-white rounded-2xl p-8 feat">
      <figure className="w-12 h-12 rounded-[50%] flex justify-center items-center bg-[#EDDDFF]">
        <Image src={icon} alt="" className="h-8 w-8" />
      </figure>
      <b className="font-[600] text-[22px]">{title}</b>
      <p className="text-xl">{text}</p>
    </nav>
  );
};
