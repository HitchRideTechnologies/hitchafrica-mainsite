import Image from "next/image";
import how from "@/assets/service4.png";

export default function How() {
  return (
    <main className="flex flex-col gap-14 md:gap-20 items-center py-10 md:py-20 px-5 md:px-20">
      <h3 className="text-center text-3xl md:text-[45px] font-[600] text-purple">
        How to book with <span className="why">Hitch-Professional service</span>
      </h3>
      <div className="flex flex-col md:grid grid-cols-2 grid-rows-1 gap-14 items-center justify-center">
        <figure className="w-full h-full max-h-screen">
          <Image
            src={how}
            alt=""
            className="w-full h-full object-cover"
            unoptimized
          />
        </figure>
        <div className="flex gap-5 h-full">
          <span className="hidden md:flex flex-col w-4 h-full bg-[#E1E1E1] rounded-lg">
            <span className="w-[full] h-1/5 bg-red rounded-lg"></span>
          </span>
          <div className="flex flex-col gap-5 md:gap-12 justify-between">
            <nav className="flex flex-col gap-2 px-5 py-4 hw md:text-lg">
              <b className="text-xl">1. Open the Hitch app.</b>
              <p>Choose the professional service on the Hitch app dashboard</p>
            </nav>
            <nav className="flex flex-col gap-2 px-5 py-4 hw md:text-lg">
              <b className="text-xl">2․ Search for the service your require</b>
              <p>
                You can type the professional service manually, or explore the
                available professionals.
              </p>
            </nav>
            <nav className="flex flex-col gap-2 px-5 py-4 hw md:text-lg">
              <b className="text-xl">3․ Confirm your bookings and task</b>
              <p>
                Double check your booking and the assigned task, add details in
                the notes if needed. If {`you're`} in a public place, you can
                choose from which gate/specific meeting point you want to be
                picked up.
              </p>
            </nav>
            <nav className="flex flex-col gap-2 px-5 py-4 hw md:text-lg">
              <b className="text-xl">
                Review your order, choose a payment method and select ‘CONFIRM
                ORDER’
              </b>
              <p>
                You can pay with Hitchpay or cash. {`Don't`} forget to
                double-check your addresses!
              </p>
            </nav>
            <nav className="flex flex-col gap-2 px-5 py-4 hw md:text-lg">
              <b className="text-xl">
                5․ Professional service provider is on their way to complete
                your task
              </b>
              <p>Sit tight and let the professionals handle your task</p>
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
}
