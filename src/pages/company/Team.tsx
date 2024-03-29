import team1 from "@/assets/team/team1.jpeg";
import team2 from "@/assets/team/team2.png";
import team3 from "@/assets/team/team3.jpeg";
import team4 from "@/assets/team/team4.jpeg";
import Image, { StaticImageData } from "next/image";

export default function Team() {
  return (
    <main className="flex flex-col gap-10 py-10 md:py-20 px-5 md:px-20">
      <div className="flex flex-col md:flex-row gap-5 md:gap-20 w-full">
        <h3 className="min-w-fit text-center text-3xl md:text-[40px] text-red font-[600]">
          <span className="text-purple inline"> The Amazing </span> People
          Behind Hitch Africa
        </h3>
        {/* <p className="text-lg md:text-2xl">
          From Product Managers to Designers, Our team is formed around a common
          goal to bring the best and brightest to do something truly remarkable.
        </p> */}
      </div>
      <div className="flex flex-col md:grid grid-cols-4 gap-10">
        <Single img={team1} name="Paul Obalonye" pos="CEO" />
        {/* <Single img={team3} name="Ijeoma Chukwu" pos="Co-founder" /> */}
        <Single img={team2} name="Emem Umoh" pos="CTO" />
        <Single img={team4} name="Joyce Temi" pos="Head of Products" />
      </div>
    </main>
  );
}

interface Props {
  img: StaticImageData;
  name: string;
  pos: string;
}

const Single = ({ img, name, pos }: Props): JSX.Element => {
  return (
    <div className="flex flex-col gap-4 relative w-full">
      <Image
        src={img}
        alt=""
        className="w-full h-full max-h-[400px] object-cover object-center"
        unoptimized
      />
      <nav
        className={`bg-white flex flex-col gap-2 py-2 px-4 rounded absolute w-full -bottom-5 -right-5 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.05)] z-10`}
      >
        <p className="text-lg font-[500]">{name}</p>
        <p className="">{pos}</p>
      </nav>
    </div>
  );
};
