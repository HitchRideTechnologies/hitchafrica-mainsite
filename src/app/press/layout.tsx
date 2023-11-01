import Hero from "@/pages/press-and-media/Hero";
import Seamless from "@/pages/home/Seamless";
// import FAQ from "@/pages/home/FAQ";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <main className="">
      <Hero />
        {children}
        <Seamless />
      {/* <FAQ /> */}
      </main>
  );
}
