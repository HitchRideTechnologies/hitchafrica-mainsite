'use client'
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo-f.png";
import soc1 from "@/assets/soc1.png";
import soc2 from "@/assets/soc2.png";
import soc3 from "@/assets/soc3.png";
import soc4 from "@/assets/soc4.png";
import playstore from "@/assets/playstore.png";
import appstore from "@/assets/appstore.png";
import bg from "@/assets/fbg.png";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";
export default function Footer() {
  const searchParam: any = useSearchParams();
  const requestFromApp = useMemo(
    () => searchParam.get("app") === "true",
    [searchParam]
  );

  return (
    <footer
      className="flex flex-col gap-14 md:gap-20 md:text-lg justify-center items-center text-white px-5 md:px-20 py-10 md:py-20 bg-primary bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <section className="grid grid-cols-2 md:grid-cols-4 grid-rows-1 gap-5">
        <div className="flex flex-col justify-between gap-5 h-full col-span-2 md:col-span-1">
          <Image src={logo} alt="" className="" />
          <div className="flex flex-col gap-5 md:p-5">
            <p>Available on</p>
            <nav className="flex flex-row gap-5 md:gap-10">
              <a
                style={{ display: requestFromApp ? "none" : "flex" }}
                href="https://play.google.com/store/apps/developer?id=HITCHRIDE+TECHNOLOGY+LTD"
                className="text-primary bg-white flex py-3 px-8 gap-2 md:gap-4 rounded-full justify-center items-center w-fit"
              >
                <Image src={playstore} alt="" className="h-full" />
                Android
              </a>
              <a
                href="https://play.google.com/store/apps/developer?id=HITCHRIDE+TECHNOLOGY+LTD"
                className="text-primary bg-white flex py-3 px-8 gap-2 md:gap-4 rounded-full justify-center items-center w-fit"
              >
                <Image src={appstore} alt="" className="h-full" />
                IOS
              </a>
            </nav>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col gap-10">
            <b className="text-xl font-[500]">Quick Links</b>
            <Link href="/business">Business</Link>
            <Link href="/">Download</Link>
            <Link href="/">API Documentation</Link>
            <Link href="/">Sitemap</Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col gap-10">
            <b className="text-xl font-[500]">Support</b>
            <a
              href="mailto:hello@hitch.africa"
              target="_blank"
              rel="noreferrer"
            >
              Report a bug
            </a>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
            <Link href="/faq">FAQs</Link>
            <Link href="/press">Press</Link>
          </div>
        </div>
        <div className="flex md:justify-center col-span-2 md:col-span-1">
          <div className="flex flex-col gap-10">
            <b className="text-xl font-[500]">Contact Us</b>
            <p>
              Nigeria Address: 426 Oluwadamilola Fasade Street, Omole Phase 1,
              Ojodu Berger.
            </p>
            <p>
              International Address: 1207 Delaware Ave #373 Wilmington, DE 19806
            </p>
            <p>Phone Number: +234 805 438 3383</p>
            <p>Contact Email: hello@hitch.africa</p>
            <nav className="flex gap-5">
              <a
                href="https://www.linkedin.com/company/hitchride-technologies-ltd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={soc1} alt="" className="h-10 w-10" />
              </a>
              <a
                href="https://www.instagram.com/hitch.africa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={soc2} alt="" className="h-10 w-10" />
              </a>
              <a
                href="https://twitter.com/hitchafrica_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={soc3} alt="" className="h-10 w-10" />
              </a>
              <a
                href="https://web.facebook.com/HitchAfrica/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={soc4} alt="" className="h-10 w-10" />
              </a>
            </nav>
          </div>
        </div>
      </section>
      <div className="w-full pb-5 border-b border-white text-center">
        © 2024 Hitch. All rights reserved.
      </div>
    </footer>
  );
}
