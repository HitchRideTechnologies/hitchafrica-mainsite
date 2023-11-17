"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaBars,
  FaCaretDown,
  FaCaretUp,
  FaTimes,
  FaCar,
  FaMugHot,
  FaBriefcase,
  FaShoppingCart,
  FaCreditCard,
  FaShuttleVan,
} from "react-icons/fa";
import logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";
import exc from "@/assets/exc.png";
import check from "@/assets/check.png";
import clip from "@/assets/clip.png";

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
  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);
  const [isMenuDropDownOpen1, setMenuDropDownOpen1] = useState(false);
  const [isMenuDropDownOpen2, setMenuDropDownOpen2] = useState(false);
  const closeHoverMenu1 = () => {
    setMenuDropDownOpen1(false);
  };
  const closeHoverMenu2 = () => {
    setMenuDropDownOpen2(false);
  };
  useOnHoverOutside(dropdownRef1, closeHoverMenu1);
  useOnHoverOutside(dropdownRef2, closeHoverMenu2);

  return (
    <header className="sticky bg-white top-0 left-0 z-[999999] shadow-md px-3 md:px-20 py-2 md:py-4 flex justify-between items-center">
      <div className="relative flex items-center">
        <a href="/">
          <Image src={logo} alt="" className="mr-auto object-contain" />
        </a>
      </div>
      <nav
        className={`${
          open
            ? " left-0 top-20  bg-white px-5 md:px-0"
            : " top-20 left-[-900%]"
        } absolute md:static  w-full z-[999999999] md:w-[unset] text-lg flex flex-col md:flex-row shadow-md md:shadow-none md:gap-10 items-center transition-all duration-1000 ease-in-out overflow-y-scroll snap`}
      >
        <div
          className="md:px-0 md:py-0 flex flex-col md:items-center w-full snap"
          ref={dropdownRef1}
        >
          <button
            className="flex gap-1 items-center py-4 md:py-0 border-b md:border-b-0 hover:text-primary transition-colors ease-in-out duration-1000 bg-inherit"
            onMouseOver={() => setMenuDropDownOpen1(true)}
            onClick={() => setMenuDropDownOpen1(!isMenuDropDownOpen1)}
          >
            Products
            {isMenuDropDownOpen1 ? (
              <FaCaretUp className="" />
            ) : (
              <FaCaretDown className="" />
            )}
          </button>
          {isMenuDropDownOpen1 && (
            <div
              className={`overflow-y-scroll shadow-xl snap flex flex-col md:grid grid-cols-2 items-start text-sm gap-2 md:gap-5 md:absolute md:rounded-xl mx-auto md:mt-5  md:text-white w-full md:w-[unset] p-4 md:p-8 bg-white md:bg-primary ${
                pathname?.includes("ride") && "bg-white md:bg-secondary"
              } ${pathname?.includes("food") && "bg-white md:bg-red"} ${
                pathname?.includes("professional-service") &&
                "bg-white md:bg-gradient-to-r from-[#c371c3] to-[#280f44]"
              } ${pathname?.includes("pay") && "bg-white md:bg-primary"}`}
            >
              <Link
                href="/ride"
                className="flex md:grid grid-cols-[75px_auto] grid-rows-1 gap-4"
              >
                <Icon icon={<FaCar className="text-3xl opacity-[1] z-10" />} />
                <nav className="flex flex-col gap-2">
                  <b className="text-base md:text-lg font-[400] md:font-[600] min-w-fit">
                    Book a ride
                  </b>
                  <p className="hidden md:block">
                    Book a ride from anywhere in <br /> Nigeria
                  </p>
                </nav>
              </Link>
              <Link
                href="/food"
                className="flex md:grid grid-cols-[75px_auto] grid-rows-1 gap-4"
              >
                <Icon
                  icon={<FaMugHot className="text-3xl opacity-[1] z-10" />}
                />
                <nav className="flex flex-col gap-2">
                  <b className="text-base md:text-lg font-[400] md:font-[600] flex gap-1 items-center">
                    Food
                    <span className="text-xs bg-white text-primary rounded-sm h-fit min-w-fit w-fit px-2 py-1">
                      Coming soon
                    </span>
                  </b>
                  <p className="hidden md:block">
                    Order your favorite food from <br />
                    your favorite vendor/ Restaurant
                  </p>
                </nav>
              </Link>
              <Link
                href="/professional-services"
                className="flex md:grid grid-cols-[75px_auto] grid-rows-1 gap-4"
              >
                <Icon
                  icon={<FaBriefcase className="text-3xl opacity-[1] z-10" />}
                />
                <nav className="flex flex-col gap-2">
                  <b className="text-base md:text-lg font-[400] md:font-[600] flex gap-1 items-center">
                    Professional service
                    <span className="text-xs bg-white text-primary rounded-sm h-fit min-w-fit w-fit px-2 py-1">
                      Coming soon
                    </span>
                  </b>
                  <p className="hidden md:block">
                    Book a professional for any service <br /> you need
                  </p>
                </nav>
              </Link>
              <Link
                href="/"
                className="flex md:grid grid-cols-[75px_auto] grid-rows-1 gap-4"
              >
                <Icon
                  icon={
                    <FaShoppingCart className="text-3xl opacity-[1] z-10" />
                  }
                />
                <nav className="flex flex-col gap-2">
                  <b className="text-base md:text-lg font-[400] md:font-[600] flex gap-1 items-center">
                    Shopping mart{" "}
                    <span className="text-xs bg-white text-primary rounded-sm h-fit min-w-fit w-fit px-2 py-1">
                      Coming soon
                    </span>
                  </b>
                  <p className="hidden md:block">
                    Shop from anywhere and get <br />
                    it delivered swiftly
                  </p>
                </nav>
              </Link>
              <Link
                href="/pay"
                className="flex md:grid grid-cols-[75px_auto] grid-rows-1 gap-4"
              >
                <Icon
                  icon={<FaCreditCard className="text-3xl opacity-[1] z-10" />}
                />
                <nav className="flex flex-col gap-2">
                  <b className="text-base md:text-lg font-[400] md:font-[600] min-w-fit">
                    Hitch pay
                  </b>
                  <p className="hidden md:block">
                    Make payment for your services <br />
                    with hitchpay
                  </p>
                </nav>
              </Link>
              <Link
                href="/package-delivery"
                className="flex md:grid grid-cols-[75px_auto] grid-rows-1 gap-4"
              >
                <Icon
                  icon={<FaShuttleVan className="text-3xl opacity-[1] z-10" />}
                />
                <nav className="flex flex-col gap-2">
                  <b className="text-base md:text-lg font-[400] md:font-[600] flex gap-1 items-center">
                    Package delivery{" "}
                    <span className="text-xs bg-white text-primary rounded-sm h-fit min-w-fit w-fit px-2 py-1">
                      Coming soon
                    </span>
                  </b>
                  <p className="hidden md:block">
                    Send and Pick-up anywhere in <br /> Nigeria
                  </p>
                </nav>
              </Link>
            </div>
          )}
        </div>
        <div
          className="md:px-0 md:py-0 flex flex-col md:items-center w-full snap"
          ref={dropdownRef2}
        >
          <button
            className="flex gap-1 items-center py-4 md:py-0 border-b md:border-b-0 hover:text-primary transition-colors ease-in-out duration-1000 bg-inherit"
            onMouseOver={() => setMenuDropDownOpen2(true)}
            onClick={() => setMenuDropDownOpen2(!isMenuDropDownOpen2)}
          >
            Company
            {isMenuDropDownOpen2 ? (
              <FaCaretUp className="" />
            ) : (
              <FaCaretDown className="" />
            )}
          </button>
          {isMenuDropDownOpen2 && (
            <div
              className={`overflow-y-scroll shadow-xl snap flex flex-col  items-start text-sm gap-2 md:gap-5 md:absolute md:rounded-xl mx-auto md:mt-5  md:text-white w-full md:w-[unset] p-4 md:p-8 bg-white md:bg-primary `}
            >
              <Link
                href="/company"
                className="flex md:grid grid-cols-[75px_auto] grid-rows-1 gap-4"
              >
                <Icon
                  icon={
                    <Image
                      src={exc}
                      alt=""
                      className="w-[30px] h-[30px] opacity-[1] z-10"
                    />
                  }
                />
                <nav className="flex flex-col gap-2">
                  <b className="text-base md:text-lg font-[400] md:font-[600] min-w-fit">
                    About Us
                  </b>
                  <p className="hidden md:block">
                    Get to know us a little better
                  </p>
                </nav>
              </Link>
              <Link
                href="/privacy-policy"
                className="flex md:grid grid-cols-[75px_auto] grid-rows-1 gap-4"
              >
                <Icon
                  icon={
                    <Image
                      src={check}
                      alt=""
                      className="w-[30px] h-[30px] opacity-[1] z-10"
                    />
                  }
                />
                <nav className="flex flex-col gap-2">
                  <b className="text-base md:text-lg font-[400] md:font-[600] min-w-fit">
                    Privacy Policy
                  </b>
                  <p className="hidden md:block">
                    For your security and safety
                  </p>
                </nav>
              </Link>
              <Link
                href="/terms-and-conditions"
                className="flex md:grid grid-cols-[75px_auto] grid-rows-1 gap-4"
              >
                <Icon
                  icon={
                    <Image
                      src={clip}
                      alt=""
                      className="w-[30px] h-[30px] opacity-[1] z-10"
                    />
                  }
                />
                <nav className="flex flex-col gap-2">
                  <b className="text-base md:text-lg font-[400] md:font-[600] min-w-fit">
                    Terms and Conditions
                  </b>
                  <p className="hidden md:block">
                    Know more about our policies
                  </p>
                </nav>
              </Link>
            </div>
          )}
        </div>
        <Link
          href="/business"
          onClick={() => setOpen(false)}
          className="my-3 md:my-0 py-4 md:py-0 border-b md:border-none w-full md:w-fit md:min-w-fit"
        >
          Business
        </Link>
        <Link
          href="/contact-us"
          className="md:hidden rounded-xl px-6 h-12 flex justify-center items-center btnbg text-white w-full"
        >
          Contact Us
        </Link>
      </nav>
      <Link
        href="/contact-us"
        className="rounded-xl hidden px-10 h-12 md:flex justify-center items-center btnbg text-white w-fit min-w-fit"
      >
        Contact Us
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
  icon: JSX.Element;
}

const Icon = ({ icon }: Props): JSX.Element => {
  return (
    <figure
      className={`relative z-[0] rounded-[4px] h-full min-w-full w-full text-2xl hidden md:flex justify-center items-center `}
    >
      <div className="backdrop-blur-[20px] rounded-[4px] bg-white opacity-[0.3] absolute w-full h-full left-0 top-0 z-[-1]"></div>
      {/* <Image src={icon} alt="" className="h-10 w-10 opacity-[1] z-10" /> */}
      {icon}
    </figure>
  );
};
