"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaCaretDown, FaCaretUp, FaTimes } from "react-icons/fa";
import logo from "@/assets/logo.png";
import hicon1 from "@/assets/hicon1.png";
import hicon2 from "@/assets/hicon2.png";
import hicon3 from "@/assets/hicon3.png";
import hicon4 from "@/assets/hicon4.png";
import hicon5 from "@/assets/hicon5.png";
import hicon6 from "@/assets/hicon6.png";

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
            <div className="hidden md:grid grid-cols-2 items-start text-sm gap-5 md:absolute bg-text md:rounded mx-auto mt-5  text-white w-full md:w-[unset] p-8 bg-primary">
              <Link href='/ride' className="grid grid-cols-[65px_auto] grid-rows-1 gap-4">
                <figure className="bg-[#9971C3] rounded-[4px] h-full w-full text-2xl flex justify-center items-center">
                  <Image src={hicon1} alt="" className="w-full h-full" />
                </figure>
                <nav className="flex flex-col gap-2">
                  <b className="text-lg font-[600] min-w-fit">Book a ride</b>
                  <p>Book a ride from anywhere in <br /> Nigeria</p>
                </nav>
              </Link>
              <Link href='/food' className="grid grid-cols-[65px_auto] grid-rows-1 gap-4">
                <figure className="bg-[#9971C3] rounded-[4px] h-full w-full text-2xl flex justify-center items-center">
                  <Image src={hicon4} alt="" className="w-full h-full" />
                </figure>
                <nav className="flex flex-col gap-2">
                  <b className="text-lg font-[600] min-w-fit">Food</b>
                  <p>
                    Order your favorite food from <br />
                    your favorite vendor/ Restaurant
                  </p>
                </nav>
              </Link>
              <Link href='/professional-services' className="grid grid-cols-[65px_auto] grid-rows-1 gap-4">
                <figure className="bg-[#9971C3] rounded-[4px] h-full w-full text-2xl flex justify-center items-center">
                  <Image src={hicon5} alt="" className="w-full h-full" />
                </figure>
                <nav className="flex flex-col gap-2">
                  <b className="text-lg font-[600] min-w-fit">Professional Services</b>
                  <p>Book a professional for any service <br /> you need</p>
                </nav>
              </Link>
              <Link href='/' className="grid grid-cols-[65px_auto] grid-rows-1 gap-4">
                <figure className="bg-[#9971C3] rounded-[4px] h-full w-full text-2xl flex justify-center items-center">
                  <Image src={hicon2} alt="" className="w-full h-full" />
                </figure>
                <nav className="flex flex-col gap-2">
                  <b className="text-lg font-[600] flex gap-1 items-center">Shopping mart <span className="text-xs bg-white text-primary rounded-sm h-fit min-w-fit w-fit px-2 py-1">Coming soon</span></b>
                  <p>
                    Shop from anywhere and get <br />
                    it delivered swiftly
                  </p>
                </nav>
              </Link>
              <Link href='/pay' className="grid grid-cols-[65px_auto] grid-rows-1 gap-4">
                <figure className="bg-[#9971C3] rounded-[4px] h-full w-full text-2xl flex justify-center items-center">
                  <Image src={hicon3} alt="" className="w-full h-full" />
                </figure>
                <nav className="flex flex-col gap-2">
                  <b className="text-lg font-[600] min-w-fit">Hitch pay</b>
                  <p>
                    Make payment for your services <br />
                     with hitchpay
                  </p>
                </nav>
              </Link>
              <Link href='/package-delivery' className="grid grid-cols-[65px_auto] grid-rows-1 gap-4">
                <figure className="bg-[#9971C3] rounded-[4px] h-full w-full text-2xl flex justify-center items-center">
                  <Image src={hicon6} alt="" className="w-full h-full" />
                </figure>
                <nav className="flex flex-col gap-2">
                <b className="text-lg font-[600] flex gap-1 items-center">Package Delivery <span className="text-xs bg-white text-primary rounded-sm h-fit min-w-fit w-fit px-2 py-1">Coming soon</span></b>
                  <p>Send and Pick-up anywhere in <br /> Nigeria</p>
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
