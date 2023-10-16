import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo-f.png"
import  soc1 from "@/assets/soc1.png"
import  soc2 from "@/assets/soc2.png"
import  soc3 from "@/assets/soc3.png"
import  soc4 from "@/assets/soc4.png"
import  playstore from "@/assets/playstore.png"
import  appstore from "@/assets/appstore.png"
import bg from "@/assets/fbg.png"
export default function Footer() {
  return (
    <footer className="flex flex-col gap-14 md:gap-20 text-lg justify-center items-center text-white px-5 md:px-20 py-10 md:py-20 bg-primary bg-no-repeat bg-cover bg-center"
    style={{ backgroundImage: `url(${bg.src})` }}
    >
      <section className="grid grid-cols-2 md:grid-cols-4 grid-rows-1">
      <div className="flex flex-col justify-between h-full col-span-2 md:col-span-1">
      <Image src={logo} alt="" className="" />
      <div className="flex flex-col gap-5 md:p-10">
      <p>Available on</p>
      <nav className="flex flex-row gap-5 md:gap-10">
        <button className="text-primary bg-white flex py-3 px-8 gap-4 rounded-full justify-center items-center w-fit">
          <Image src={playstore} alt="" className="h5" />
          Android
        </button>
        <button className="text-primary bg-white flex py-3 px-8 gap-4 rounded-full justify-center items-center w-fit">
          <Image src={appstore} alt="" className="h-" />
          IOS
        </button>
      </nav>
      </div>
      </div>
        <div className="flex justify-center">
      <div className="flex flex-col gap-10">

        
        <b className="text-xl font-[500]">Quick Links</b>
        <p>Business</p>
        <p>
        Download
        </p>
        <p>API Documentation</p>
        <p>Sitemap</p>
      </div>
      </div>

        <div className="flex justify-center">
      <div className="flex flex-col gap-10">

        
        <b className="text-xl font-[500]">Support</b>
        <p>Report a bug</p>
        <p>
        Privacy Policy
        </p>
        <p>Terms & Conditions</p>
        <p>FAQs</p>
        <p>Press</p>
      </div>
      </div>
        <div className="flex justify-center">
      <div className="flex flex-col gap-10">

        
        <b className="text-xl font-[500]">Contact Us</b>
        <p>Address: 16192 Coastal Highway, Lewes, Delaware, 19958</p>
        <p>
        Phone Number: +1(302)262-1292
        </p>
        <p>Contact Email: hi@hitchafrica</p>
      <nav className="flex gap-5">
        <a href="" target="_blank" rel="noopener noreferrer">
          <Image src={soc1} alt="" className="h-10 w-10" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <Image src={soc2} alt="" className="h-10 w-10" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <Image src={soc3} alt="" className="h-10 w-10" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <Image src={soc4} alt="" className="h-10 w-10" />
        </a>
      </nav>
      </div>
      </div>
      </section>
      <div className="w-full pb-5 border-b border-white text-center">© 2023 Hitch. All rights reserved.</div>
    </footer>
  );
}
