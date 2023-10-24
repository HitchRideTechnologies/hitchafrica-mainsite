import bg from "@/assets/hero-press.png";

export default function Hero() {
  return (
    <main
      className="h-[90vh] flex flex-col gap-14 text-lg text-center justify-center items-center text-white px-5 md:px-20 bg-primary bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <h1 className="text-[72px] font-[600]">Terms and Conditions</h1>
      <p className="text-lg md:text-2xl">Last Updated 09 October 2023</p>
    </main>
  );
}
