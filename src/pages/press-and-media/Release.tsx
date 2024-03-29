import news1 from "@/assets/news/news1.png";
import news2 from "@/assets/news/news2.jpeg";
import news3 from "@/assets/news/news3.webp";
import news4 from "@/assets/news/news4.jpeg";
import Image, { StaticImageData } from "next/image";
// import Link from "next/link";

export default function Release() {
  return (
    <main className="flex flex-col gap-10 md:gap-24 py-10 md:py-20 px-5 md:px-20 text-black">
      {/* <div className="flex flex-col gap-5 md:gap-12">
        <h3 className="text-3xl md:text-[40px] text-[#370D66] font-[500] leading-snug">
          Press Release
        </h3>
        <div className="flex flex-col gap-7 md:gap-10 md:grid grid-cols-3">
          <Single
            title="Hitch Africa secures 1,000 vendors "
            date="December 13, 2023"
            icon={news1}
            outlet="Vanguard"
          />
          <Single
            title="Hitch Africa secures 1,000 vendors "
            date="December 13, 2023"
            icon={news1}
            outlet="Vanguard"
          />
          <Single
            title="Hitch Africa secures 1,000 vendors "
            date="December 13, 2023"
            icon={news1}
            outlet="Vanguard"
          />
        </div>
        <Link
          href="/"
          className="font-[500] mt-10 text-purple text-lg md:text-2xl underline mx-auto"
        >
          See More
        </Link>
      </div> */}
      <div className="flex flex-col gap-5 md:gap-12">
        <h3 className="text-3xl md:text-[40px] text-[#03464A] font-[500] leading-snug">
          In the Media
        </h3>
        <div className="flex flex-col gap-7 md:gap-10 md:grid grid-cols-3">
          <Single
            title="HitchAfrica’s borderless marketplace app to drive on-demand services"
            date="August 26, 2023"
            icon={news1}
            outlet="Business Day"
            slug="https://businessday.ng/technology/article/hitchafricas-borderless-marketplace-app-to-drive-on-demand-services/?amp=1"
          />
          <Single
            title="Hitch Africa secures 1,000 vendors "
            date="23rd March 2024"
            icon={news2}
            outlet="The Sun"
            slug="https://sunnewsonline.com/hitch-africa-launches-story-telling-campaign-on-social-media/"
          />
          <Single
            title="Safe driving: Hitch Africa to train drivers on vehicle checks, medicals in Lagos, Abuja"
            date="February 19, 2024"
            icon={news3}
            outlet="Vanguard"
            slug="https://www.vanguardngr.com/2024/02/safe-driving-hitch-africa-to-train-drivers-on-vehicle-checks-medicals-in-lagos-abuja/"
          />
          <Single
            title="Firm to train cab drivers in safety"
            date="19th February 2024"
            icon={news4}
            outlet="The Punch"
            slug="https://punchng.com/firm-to-train-cab-drivers-in-safety/?amp"
          />
        </div>
        {/* <Link
          href="/"
          className="font-[500] mt-10 text-[#03464A] text-lg md:text-2xl underline mx-auto"
        >
          See More
        </Link> */}
      </div>
    </main>
  );
}

interface Props {
  icon: StaticImageData;
  title: string;
  date: string;
  outlet: string;
  slug?: string;
}

const Single = ({ icon, title, date, outlet, slug }: Props): JSX.Element => {
  return (
    <a
      href={slug}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full flex flex-col gap-3 uppercase"
    >
      <Image src={icon} alt="" className="w-full h-[420px]" />
      <button className="w-fit px-5 h-10 md:h-12 text-sm md:text-base bg-[#F5F5F5] rounded text-[#5F5F5F]">
        {outlet}
      </button>
      <b className="font-[500] text-xl md:text-2xl text-black">{title}</b>
      <p className="md:mt-auto font-[300] capitalize">{date}</p>
    </a>
  );
};
