"use client"
import bg from "@/assets/hero-press.png";
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Hero() {
    const pathname = usePathname()

  return (
    <main
      className="h-[90vh] flex flex-col gap-14 text-lg text-center justify-center items-center text-white px-5 md:px-20 bg-primary bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <h1 className="text-[72px] font-[600]">Press and Media Resources</h1>
      <nav className="grid grid-cols-4 w-3/4 bg-[#9971C380] rounded-2xl p-2 h-fit">
        <Link href="/press/news" className={`${pathname === '/press/news' ? 'bg-[#9971C380]' : ''} px-7 py-5 min-w-fit w-full rounded-xl`}>News</Link>
        <Link href="/press/brand-assets" className={`${pathname === '/press/brand-assets' ? 'bg-[#9971C380]' : ''} px-7 py-5 min-w-fit w-full rounded-xl`}>Brand Assets</Link>
        <Link href="/press/product-image" className={`${pathname === '/press/product-image' ? 'bg-[#9971C380]' : ''} px-7 py-5 min-w-fit w-full rounded-xl`}>Product Images</Link>
        <Link href="/press/people-and-offices" className={`${pathname === '/press/people-and-offices' ? 'bg-[#9971C380]' : ''} px-7 py-5 min-w-fit w-full rounded-xl`}>People & Offices</Link>
      </nav>
    </main>
  );
}
