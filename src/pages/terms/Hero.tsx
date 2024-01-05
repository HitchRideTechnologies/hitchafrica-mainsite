import bg from "@/assets/hero-press.png";

export default function Hero() {
  return (
    <main
      className="h-[90vh] flex flex-col gap-7 md:gap-14 text-lg text-center justify-center items-center text-white px-5 md:px-20 bg-primary bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <h1 className="text-[35px] md:text-[72px] leading-normal font-[600]">Terms and Conditions</h1>
      <p className="text-lg md:text-2xl">Last Updated January 2024</p>
    </main>
  );
}
