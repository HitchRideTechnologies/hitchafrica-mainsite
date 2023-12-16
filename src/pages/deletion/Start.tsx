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
    phone: "",
    email: "",
    reason: "",
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
          email: state.email,
          phone: state.phone,
          reason: state.reason,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setSent(true);
          setLoading(false)
          setState({
            phone: "",
            email: "",
            reason: "",
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
              Sad To See You{" "}
              <b className="text-red font-[600] inline mr-3">Leave</b>
              
            </h2>
            <form
              className="w-full flex flex-col gap-7"
              onSubmit={handleSubmit}
            >
              <label className="flex flex-col gap-3 w-full">
                <span className="flex items-center gap-1 font-[600]">
                  Phone
                </span>
                <input
                  type="tel"
                  placeholder="09012345678"
                  className="h-14 md:h-[70px] px-3 border z-10 w-full outline-none rounded-lg md:rounded-xl"
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
                  className="h-14 md:h-[70px] px-3 border z-10 w-full outline-none rounded-lg md:rounded-xl"
                  value={state.email}
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      email: e.target.value,
                    }))
                  }
                />
              </label>
              <label className="flex flex-col gap-3 w-full">
                <span className="flex items-center gap-1 font-[600]">Reason For Deletion</span>
                <textarea
                  placeholder="Please let us know why you ae leaving us"
                  className="h-40 px-3 py-4 border z-10 w-full outline-none rounded-lg md:rounded-xl"
                  value={state.reason}
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      reason: e.target.value,
                    }))
                  }
                />
                
              </label>
              <button
                className={`font-[600] btnbg text-white h-14 md:h-[70px] w-full rounded-lg md:rounded-xl px-5 ${loading ? "opacity-80 animate-pulse" : ""}`}
                disabled={loading}
              >
                Sign up
              </button>
            </form>
          </div>
        </main>
      )}
      {sent && (
        <main className="min-h-screen bg-[#FFF3F6] px-5 py-10 md:py-20 flex justify-center  items-center flex-col gap-8 text-center">
          <Image src={done} alt="" className="" />
          <h3 className="text-purple text-[35px] md:text-[64px] font-[600]">
            Your Account Deletion Is Being Processed
          </h3>
          <div className="flex flex-col gap-5">
            <h4 className="text-red text-2xl md:text-[34px] font-[600]">
              Sad To Loose You
            </h4>
            <p className="text-2xl">
              You have successfully activated account deletion process
              <br className="hidden md:block" /> We are looking forward to getting you back and serving you better
            </p>
            <div className="flex flex-col md:flex-row items-center  justify-center gap-5 text-lg mx-auto md:mx-0">
              <button className="bg-primary text-white flex py-3 px-8 gap-4 rounded-xl justify-center items-center w-fit min-w-fit">
                <Image src={playstore} alt="" className="h5" />
                <span className="text-start flex flex-col gap-1">
                  <small className="text-xs">Download on</small> Google Play
                </span>
              </button>
              <button className="bg-primary text-white flex py-3 px-8 gap-4 rounded-xl justify-center items-center w-fit min-w-fit">
                <Image src={appstore} alt="" className="h-" />
                <span className="text-start flex flex-col gap-1">
                  <small className="text-xs">Download on</small> Apple Store
                </span>
              </button>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
