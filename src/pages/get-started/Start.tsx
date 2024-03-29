"use client";
import Image from "next/image";
import { useState } from "react";
import start from "@/assets/start.png";
import playstore from "@/assets/playstore-w.png";
import appstore from "@/assets/appstore-w.png";
import done from "@/assets/sent.png";
export default function Start() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    first: "",
    last: "",
    phone: "",
    email: "",
    city: "",
    check: false,
  });
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    if (state.first && state.last && state.phone && state.email && state.city) {
      fetch("https://formsubmit.co/ajax/hello@hitch.africa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: state.first + state.last,
          email: state.email,
          phone: state.phone,
          city: state.city,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setSent(true);
          setLoading(false);
          setState({
            first: "",
            last: "",
            phone: "",
            email: "",
            city: "",
            check: false,
          });
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <>
      {!sent && (
        <main className="flex flex-col md:grid grid-cols-2 grid-rows-1 items-center">
          <figure className="w-full h-full">
            <Image src={start} alt="" className="w-full h-full object-cover" />
          </figure>
          <div className="flex flex-col gap-14 py-10 md:py-20 px-5 md:px-20">
            <h2 className="text-3xl md:text-[60px] font-[600] leading-tight text-purple">
              <b className="text-red font-[600] inline mr-3">{`Let's`}</b>
              Get Started
            </h2>
            <form
              className="w-full flex flex-col gap-7"
              onSubmit={handleSubmit}
            >
              <label className="flex flex-col gap-3 w-full">
                <span className="flex items-center gap-1 font-[600]">
                  First Name
                </span>
                <input
                  type="text"
                  placeholder="John"
                  className="h-14 md:h-[70px] px-3 border z-10 w-full outline-none rounded-lg md:ounded-xl"
                  value={state.first}
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      first: e.target.value,
                    }))
                  }
                />
              </label>
              <label className="flex flex-col gap-3 w-full">
                <span className="flex items-center gap-1 font-[600]">
                  Last Name
                </span>
                <input
                  type="text"
                  placeholder="Omotolani"
                  className="h-14 md:h-[70px] px-3 border z-10 w-full outline-none rounded-lg md:ounded-xl"
                  value={state.last}
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      last: e.target.value,
                    }))
                  }
                />
              </label>
              <label className="flex flex-col gap-3 w-full">
                <span className="flex items-center gap-1 font-[600]">City</span>
                <input
                  type="text"
                  placeholder="Lagos"
                  className="h-14 md:h-[70px] px-3 border z-10 w-full outline-none rounded-lg md:ounded-xl"
                  value={state.city}
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      city: e.target.value,
                    }))
                  }
                />
              </label>
              <label className="flex flex-col gap-3 w-full">
                <span className="flex items-center gap-1 font-[600]">
                  Phone
                </span>
                <input
                  type="tel"
                  placeholder="09012345678"
                  className="h-14 md:h-[70px] px-3 border z-10 w-full outline-none rounded-lg md:ounded-xl"
                  value={state.phone}
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      phone: e.target.value,
                    }))
                  }
                />
              </label>
              <label className="flex flex-col gap-3 w-full">
                <span className="flex items-center gap-1 font-[600]">
                  Email Address
                </span>
                <input
                  type="email"
                  placeholder="john@email.com"
                  className="h-14 md:h-[70px] px-3 border z-10 w-full outline-none rounded-lg md:ounded-xl"
                  value={state.email}
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      email: e.target.value,
                    }))
                  }
                />
              </label>
              <label className="flex items-center gap-2 w-full">
                <input
                  type="checkbox"
                  className="h-5 w-5"
                  onChange={() =>
                    setState((prevState) => ({
                      ...prevState,
                      check: !state.check,
                    }))
                  }
                />
                <span className="inline md:flex items-center gap-1 word-wrap">
                  I’ve read and agreed to with our{" "}
                  <span className="grad inline font-[600]">
                    {" "}
                    Terms of Services and Privacy Policy
                  </span>
                </span>
              </label>
              <button
                className={`font-[600] btnbg text-white h-14 md:h-[70px] w-full rounded-lg md:rounded-xl px-5 ${
                  loading ? "opacity-80 animate-pulse" : ""
                }`}
                disabled={state?.check ? false : true || loading}
              >
                Submit
              </button>
            </form>
          </div>
        </main>
      )}
      {sent && (
        <main className="min-h-screen bg-[#FFF3F6] px-5 py-10 md:py-20 flex justify-center  items-center flex-col gap-8 text-center">
          <Image src={done} alt="" className="" />
          <h3 className="text-purple text-[35px] md:text-[64px] font-[600]">
            Thanks For Joining Us
          </h3>
          <div className="flex flex-col gap-5">
            <h4 className="text-red text-2xl md:text-[34px] font-[600]">
              Welcome to the Hitch Africa Family
            </h4>
            <p className="text-2xl">
              We will get back to you shortly. <br /> In the meantime, you can
              download our app.
            </p>
            <div className="flex flex-col md:flex-row items-center  justify-center gap-5 text-lg mx-auto md:mx-0">
              <a href="https://play.google.com/store/apps/developer?id=HITCHRIDE+TECHNOLOGY+LTD" className="bg-primary text-white flex py-3 px-8 gap-4 rounded-xl justify-center items-center w-fit min-w-fit">
                <Image src={playstore} alt="" className="h5" />
                <span className="text-start flex flex-col gap-1">
                  <small className="text-xs">Download on</small> Google Play
                </span>
              </a>
              <a href="https://play.google.com/store/apps/developer?id=HITCHRIDE+TECHNOLOGY+LTD" className="bg-primary text-white flex py-3 px-8 gap-4 rounded-xl justify-center items-center w-fit min-w-fit">
                <Image src={appstore} alt="" className="h-" />
                <span className="text-start flex flex-col gap-1">
                  <small className="text-xs">Download on</small> Apple Store
                </span>
              </a>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
