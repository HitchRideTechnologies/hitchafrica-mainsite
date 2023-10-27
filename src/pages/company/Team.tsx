import bg from "@/assets/hero-press.png";
import team1 from "@/assets/team/team1.png"
import team2 from "@/assets/team/team2.png"
import team3 from "@/assets/team/team3.png"
import team4 from "@/assets/team/team4.png"
import team5 from "@/assets/team/team5.png"
import team6 from "@/assets/team/team6.png"
import team7 from "@/assets/team/team7.png"
import team8 from "@/assets/team/team8.png"
import team9 from "@/assets/team/team9.png"
import team10 from "@/assets/team/team10.png"
import team11 from "@/assets/team/team11.png"
import team12 from "@/assets/team/team12.png"
import Image, { StaticImageData } from "next/image";

export default function Team() {
  return (
    <main
      className="flex flex-col gap-10 py-10 md:py-20 px-5 md:px-20"
    >
      <div className="flex flex-col md:flex-row gap-5 md:gap-20 w-full">
        <h3 className="min-w-fit text-center text-3xl md:text-[40px] text-red font-[600]">
          <span className="text-purple inline"> The Amazing </span>  People
Behind Hitch
        </h3>
        <p className="text-lg md:text-2xl">
        From Product Managers to Designers, Our team is formed around a common goal to bring the best and brightest to do something truly remarkable.
        </p>
      </div>
      <div className="flex flex-col md:grid grid-cols-4 gap-24">
        <Single img={team1} name="Paul Obalonye" pos="CEO" />
        <Single img={team2} name="John Doe" pos="Co-founder" />
        <Single img={team3} name="John Doe" pos="Developer" />
        <Single img={team4} name="John Doe" pos="Designer" />
        <Single img={team5} name="John Doe" pos="Product Manager" />
        <Single img={team6} name="John Doe" pos="Co-founder" />
        <Single img={team7} name="John Doe" pos="Developer" />
        <Single img={team8} name="John Doe" pos="Designer" />
        <Single img={team9} name="John Doe" pos="Product Manager" />
        <Single img={team10} name="John Doe" pos="Co-founder" />
        <Single img={team11} name="John Doe" pos="Developer" />
        <Single img={team12} name="John Doe" pos="Designer" />
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
        <Image src={img} alt="" className="w-full object-cover" />
        <nav className={`bg-white flex flex-col gap-2 py-2 px-4 rounded absolute w-full -bottom-5 -right-5 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.05)] z-10`}>
          <p className="text-lg font-[500]">{name}</p>
          <p className="">{pos}</p>
        </nav>
      </div>
    );
  };
  