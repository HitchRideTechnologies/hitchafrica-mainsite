import news1 from "@/assets/news1.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function Release() {
  return (
    <main className="flex flex-col gap-10 md:gap-16 py-10 md:py-20 px-5 md:px-20 text-black">
      <div className="flex flex-col gap-5 md:gap-10">
        <h3 className="text-3xl md:text-[40px] text-[#370D66] font-[500] leading-snug">
          Press Release
        </h3>
        <div className="flex flex-col gap-5 md:gap-10 md:grid grid-cols-3">
          <Single
            title="Hitch secures 1,000 vendors "
            date="December 13, 2023"
            icon={news1}
            outlet="Vanguard"
          />
          <Single
            title="Hitch secures 1,000 vendors "
            date="December 13, 2023"
            icon={news1}
            outlet="Vanguard"
          />
          <Single
            title="Hitch secures 1,000 vendors "
            date="December 13, 2023"
            icon={news1}
            outlet="Vanguard"
          />
        </div>
        <Link href="/" className="grad underline mx-auto">
          See More
        </Link>
      </div>
      <div className="flex flex-col gap-5 md:gap-10">
        <h3 className="text-3xl md:text-[40px] text-[#03464A] font-[500] leading-snug">
          In the Media
        </h3>
        <div className="flex flex-col gap-5 md:gap-10 md:grid grid-cols-3">
          <Single
            title="Hitch secures 1,000 vendors "
            date="December 13, 2023"
            icon={news1}
            outlet="Vanguard"
          />
          <Single
            title="Hitch secures 1,000 vendors "
            date="December 13, 2023"
            icon={news1}
            outlet="Vanguard"
          />
          <Single
            title="Hitch secures 1,000 vendors "
            date="December 13, 2023"
            icon={news1}
            outlet="Vanguard"
          />
        </div>
        <Link href="/" className="text-primary underline mx-auto">
          See More
        </Link>
      </div>
    </main>
  );
}

interface Props {
  icon: StaticImageData;
  title: string;
  date: string;
  outlet: string;
}

const Single = ({ icon, title, date, outlet }: Props): JSX.Element => {
  return (
    <nav className="w-full flex flex-col gap-3 uppercase">
      <Image src={icon} alt="" className="w-full" />
      <button className="w-fit px-5 h-12 bg-[#F5F5F5] rounded text-[#5F5F5F]">
        {outlet}
      </button>
      <b className="font-[500] text-2xl text-black">{title}</b>
      <p className="mt-auto font-[500] capitalize">{date}</p>
    </nav>
  );
};
