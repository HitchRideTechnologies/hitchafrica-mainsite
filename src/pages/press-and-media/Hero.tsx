import bg from "@/assets/hero-press.png";
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Hero() {
    const pathname = usePathname()

  return (
    <main
      className="h-[80vh] flex flex-col gap-14 text-lg text-center justify-center items-center text-white px-5 md:px-20 bg-primary bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <h1 className="text-[72px] font-[600]">Press and Media Resources</h1>
      <nav className="flex bg-[#9971C380] rounded-xl p-2 h-fit">
        <Link href="/" className={`${pathname === '/' ? 'bg-[#9971C380]' : ''} px-7 py-5 min-w-fit w-fit rounded-xl`}>News</Link>
        <Link href="/" className={`${pathname === '/' ? 'bg-[#9971C380]' : ''} px-7 py-5 min-w-fit w-fit rounded-xl`}>Brand Assets</Link>
        <Link href="/" className={`${pathname === '/' ? 'bg-[#9971C380]' : ''} px-7 py-5 min-w-fit w-fit rounded-xl`}>Product Images</Link>
        <Link href="/" className={`${pathname === '/' ? 'bg-[#9971C380]' : ''} px-7 py-5 min-w-fit w-fit rounded-xl`}>People & Offices</Link>
      </nav>
    </main>
  );
}
