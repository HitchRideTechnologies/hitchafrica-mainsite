import Image from "next/image";
import Link from "next/link";
import pple1 from "@/assets/people/pple1.png";
import pple2 from "@/assets/people/pple2.png";
import pple3 from "@/assets/people/pple3.png";
import pple4 from "@/assets/people/pple4.png";
import pple5 from "@/assets/people/pple5.png";
import pple6 from "@/assets/people/pple6.png";
import pple7 from "@/assets/people/pple7.png";

export default function People() {
  return (
    <main className="px-5 md:px-20 py-10 md:py-20 flex flex-col gap-10 w-full">
      <p className="txt-lg md:text-2xl">
        Step into our {`company's`} hub – the People and Office page. {`It's`}{" "}
        where {`we've`} poured creativity into every pixel, creating a space{" "}
        {`that's`} all about people and teamwork.
      </p>
      <div className="w-full flex flex-col md:grid grid-cols-[1fr_1.3fr] grid-rows-1 gap-5 md:gap-10">
        <figure className="w-full bg-red-400">
          <Image
            src={pple1}
            alt=""
            className="w-full h-full object-cover rounded-md md:rounded-xl"
          />
        </figure>
        <figure className="w-full grid grid-rows-2 gap-5 md:gap-10">
          <Image
            src={pple2}
            alt=""
            className="w-full h-full object-cover rounded-md md:rounded-xl"
          />
          <Image
            src={pple3}
            alt=""
            className="w-full h-full object-cover rounded-md md:rounded-xl"
          />
        </figure>
      </div>
      <div className="w-full flex flex-col md:grid grid-cols-[1.3fr_1fr] grid-rows-1 gap-5 md:gap-10">
        <div className="w-full grid grid-rows-2 gap-5 md:gap-10">
          <figure className="grid grid-cols-2 gap-5 md:gap-10">
            <Image
              src={pple4}
              alt=""
              className="w-full h-full object-cover rounded-md md:rounded-xl"
            />
            <Image
              src={pple5}
              alt=""
              className="w-full h-full object-cover rounded-md md:rounded-xl"
            />
          </figure>
          <Image
            src={pple6}
            alt=""
            className="w-full h-full object-cover rounded-md md:rounded-xl"
          />
        </div>
        <figure className="w-full">
          <Image
            src={pple7}
            alt=""
            className="w-full h-full object-cover rounded-md md:rounded-xl"
          />
        </figure>
      </div>
      <Link href="/" className="font-[500] mt-10 text-primary text-lg md:text-2xl underline mx-auto">
        See More
      </Link>
    </main>
  );
}
