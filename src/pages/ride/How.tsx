import Image from "next/image";
import Link from "next/link";
import how from "@/assets/how-ride.png";

export default function How() {
  return (
    <main className="flex flex-col gap-14 md:gap-20 items-center py-10 md:py-20 px-5 md:px-24">
      <h3 className="why text-3xl md:text-[45px] font-[600] text-purple">
        How to book a ride with <span className="why"> Hitchride</span>
      </h3>
      <div className="flex flex-col md:grid grid-cols-2 grid-rows-1 gap-14 items-center justify-center">
        <figure className="w-full h-full max-h-screen">
          <Image src={how} alt="" className="w-full h-full object-cover" />
        </figure>
        <div className="flex gap-5 h-full">
          <span className="flex flex-col w-4 h-full bg-[#E1E1E1] rounded-lg">
            <span className="w-[full] h-1/5 bg-secondary rounded-lg"></span>
          </span>
          <div className="flex flex-col gap-5 md:gap-12">
            <nav className="flex flex-col gap-2 px-5 py-4 hw text-lg">
              <b className="text-xl">1. Open the Hitch app.</b>
              <p>Choose the book a ride on the Hitch Africa app dashboard</p>
            </nav>
            <nav className="flex flex-col gap-2 px-5 py-4 hw text-lg">
              <b className="text-xl">2․ Type in your destination</b>
              <p>
                You can type the address manually, or select the location from
                the map.
              </p>
            </nav>
            <nav className="flex flex-col gap-2 px-5 py-4 hw text-lg">
              <b className="text-xl">3․ Confirm your pickup location</b>
              <p>
                Double check your pickup point, add details in the notes if
                needed. If {`you're`} in a public place, you can choose from which
                gate/specific meeting point you want to be picked up.
              </p>
            </nav>
            <nav className="flex flex-col gap-2 px-5 py-4 hw text-lg">
              <b className="text-xl">
               4. Review your order, choose a payment method and select ‘CONFIRM
                ORDER’
              </b>
              <p>
                You can pay with Hitchpay or cash. {`Don't`} forget to double-check
                your addresses!
              </p>
            </nav>
            <nav className="flex flex-col gap-2 px-5 py-4 hw text-lg">
              <b className="text-xl">5․ Driver is on their way to pick you up</b>
              <p>
                Now sit tight cause your driver is arriving soon. Enjoy your
                trip.
              </p>
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
}
