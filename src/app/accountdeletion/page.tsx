import Start from "@/pages/deletion/Start";
import Seamless from "@/pages/home/Seamless";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Deletion | Hitch Africa",
  description:
    "",
};

export default function Business() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden snap relative bg-[#FFFFFE]">
      <Start />
      <Seamless />
    </main>
  );
}
