"use client";
import { useEffect, useState, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaBars, FaCaretDown, FaCaretUp, FaTimes } from "react-icons/fa";
import logo from "@/assets/logo.png";
import hicon1 from "@/assets/hicon1.png";
import hicon2 from "@/assets/hicon2.png";
import hicon3 from "@/assets/hicon3.png";
import hicon4 from "@/assets/hicon4.png";
import hicon5 from "@/assets/hicon5.png";
import hicon6 from "@/assets/hicon6.png";
import { usePathname } from "next/navigation";

export function useOnHoverOutside(ref: any, handler: any) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mouseover", listener);
    return () => {
      document.removeEventListener("mouseout", listener);
    };
  }, [ref, handler]);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };
  useOnHoverOutside(dropdownRef, closeHoverMenu);

  return (
    <header className="sticky bg-white md:bg-inherit top-0 left-0 backdrop-blur-[20px] z-[999999] shadow-md px-3 md:px-20 py-4 flex justify-between items-center">
      <div className="relative flex items-center">
        <a href="/">
          <Image src={logo} alt="" className="mr-auto object-contain" />
        </a>
      </div>
      <nav
        className={`${
          open
            ? " left-0 top-32  py-5  bg-white px-5 md:px-0"
            : " top-32 left-[-900%]"
        } absolute md:static  w-full z-[999999999] md:w-[unset] text-lg flex flex-col md:flex-row shadow-md md:shadow-none  gap-5 md:gap-10 items-center transition-all duration-1000 ease-in-out overflow-y-scroll snap`}
      >
        <div
          className="md:px-0 md:py-0 flex flex-col md:items-center"
          ref={dropdownRef}
        >
          <button
            className="flex gap-1 items-center hover:text-primary transition-colors ease-in-out duration-1000"
            onMouseOver={() => setMenuDropDownOpen(true)}
            onClick={() => setMenuDropDownOpen(!isMenuDropDownOpen)}
          >
            Products
            {isMenuDropDownOpen ? (
              <FaCaretUp className="hidden md:block" />
            ) : (
              <FaCaretDown className="hidden md:block" />
            )}
          </button>
          {isMenuDropDownOpen && (
            <div
              className={`hidden md:grid grid-cols-2 items-start text-sm gap-5 md:absolute md:rounded-xl mx-auto mt-5  text-white w-full md:w-[unset] p-8 bg-primary ${
                pathname?.includes("ride") && "bg-secondary"
              } ${pathname?.includes("food") && "bg-red"} ${
                pathname?.includes("professional-service") &&
                "bg-gradient-to-r from-[#c371c3] to-[#280f44]"
              } ${pathname?.includes("pay") && "bg-primary"}`}
            >
              <Link
                href="/ride"
                className="grid grid-cols-[75px_auto] grid-rows-1 gap-4"
              >
                <Icon icon={hicon1} />
                <nav className="flex flex-col gap-2">
                  <b className="text-lg font-[600] min-w-fit">Book a ride</b>
                  <p>
                    Book a ride from anywhere in <br /> Nigeria
                  </p>
                </nav>
              </Link>
              <Link
                href="/food"
                className="grid grid-cols-[75px_auto] grid-rows-1 gap-4"
              >
                <Icon icon={hicon2} />
                <nav className="flex flex-col gap-2">
                  <b className="text-lg font-[600] min-w-fit">Food</b>
                  <p>
                    Order your favorite food from <br />
                    your favorite vendor/ Restaurant
                  </p>
                </nav>
              </Link>
              <Link
                href="/professional-services"
                className="grid grid-cols-[75px_auto] grid-rows-1 gap-4"
              >
                <Icon icon={hicon3} />
                <nav className="flex flex-col gap-2">
                  <b className="text-lg font-[600] min-w-fit">
                    Professional Services
                  </b>
                  <p>
                    Book a professional for any service <br /> you need
                  </p>
                </nav>
              </Link>
              <Link
                href="/"
                className="grid grid-cols-[75px_auto] grid-rows-1 gap-4"
              >
                <Icon icon={hicon4} />
                <nav className="flex flex-col gap-2">
                  <b className="text-lg font-[600] flex gap-1 items-center">
                    Shopping mart{" "}
                    <span className="text-xs bg-white text-primary rounded-sm h-fit min-w-fit w-fit px-2 py-1">
                      Coming soon
                    </span>
                  </b>
                  <p>
                    Shop from anywhere and get <br />
                    it delivered swiftly
                  </p>
                </nav>
              </Link>
              <Link
                href="/pay"
                className="grid grid-cols-[75px_auto] grid-rows-1 gap-4"
              >
                <Icon icon={hicon5} />
                <nav className="flex flex-col gap-2">
                  <b className="text-lg font-[600] min-w-fit">Hitch pay</b>
                  <p>
                    Make payment for your services <br />
                    with hitchpay
                  </p>
                </nav>
              </Link>
              <Link
                href="/package-delivery"
                className="grid grid-cols-[75px_auto] grid-rows-1 gap-4"
              >
                <Icon icon={hicon6} />
                <nav className="flex flex-col gap-2">
                  <b className="text-lg font-[600] flex gap-1 items-center">
                    Package Delivery{" "}
                    <span className="text-xs bg-white text-primary rounded-sm h-fit min-w-fit w-fit px-2 py-1">
                      Coming soon
                    </span>
                  </b>
                  <p>
                    Send and Pick-up anywhere in <br /> Nigeria
                  </p>
                </nav>
              </Link>
            </div>
          )}
        </div>
        <Link
          href="#company"
          onClick={() => setOpen(false)}
          className="py-4 md:py-0 border-b md:border-none w-full md:w-fit md:min-w-fit"
        >
          Company
        </Link>
        <Link
          href="#business"
          onClick={() => setOpen(false)}
          className="py-4 md:py-0 border-b md:border-none w-full md:w-fit md:min-w-fit"
        >
          Business
        </Link>
        <Link
          href="#"
          className="md:hidden rounded-xl px-6 h-12 flex justify-center items-center btnbg text-white w-full"
        >
          Get Started
        </Link>
      </nav>
      <Link
        href="#"
        className="rounded-xl hidden px-10 h-12 md:flex justify-center items-center btnbg text-white w-fit min-w-fit"
      >
        Get Started
      </Link>
      {open ? (
        <FaTimes
          className="block md:hidden transition-all duration-1000 ease-in-out text-[#343D48] text-xl"
          onClick={() => setOpen(!open)}
        />
      ) : (
        <FaBars
          className="block md:hidden transition-all duration-1000 ease-in-out text-[#343D48] text-xl"
          onClick={() => setOpen(!open)}
        />
      )}
    </header>
  );
}

interface Props {
  icon: StaticImageData;
}

const Icon = ({ icon }: Props): JSX.Element => {
  const pathname = usePathname();
  const ride = "pink";
  const food = "blue";
  const service = "green";
  const pay = "orange";

  return (
    <figure
      className={`relative z-[0] rounded-[4px] h-full min-w-full w-full text-2xl flex justify-center items-center `}
    >
      <div className="backdrop-blur-[20px] rounded-[4px] bg-white opacity-[0.3] absolute w-full h-full left-0 top-0 z-[-1]">
      </div>
      <Image src={icon} alt="" className="h-10 w-10 opacity-[1] z-10" />
    </figure>
  );
};

// style={{
//   backgroundColor: `${pathname?.includes("ride") && ride} ${
//     pathname?.includes("food") && food
//   } ${pathname?.includes("professional-service") && service} ${
//     pathname?.includes("pay") && pay
//   }`,
// }}
