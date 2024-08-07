import Inner from "@/components/Inner";
import Navigation from "@/components/Navigation";
import { antonio, bungee, inter, lora, monoton, poppins, prata, rampartOne, spaceGrotesk, tiro, unna } from "@/lib/fonts";
import Link from "next/link";
import Image from "next/image";


export default function Home() {

  return (
    <Inner>
      <main
        className={`flex min-h-screen flex-col items-center justify-center bg-[url("/assets/image/otis-redding.png")]  bg-[#d72322]  ${antonio.className}`}
      >
        <div className={`${poppins.className} z-50  fixed text-3xl top-10 left-10`}>Jay Ganatra</div>
        <Navigation />
        <div className="text-7xl">
          <Link href="/about">
            <span className="">A</span>
            <span className="">B</span>
            <span className="text-stroke-1 bg-black">O</span>
            <span className="text-stroke-1 bg-black">U</span>
            <span className="text-stroke-1 bg-black">T</span>
            <span className="text-stroke-1"> </span>
            <span className="text-stroke-1">U</span>
            <span className="text-stroke-1">S</span>
          </Link>
        </div>


      </main>
    </Inner>
  );
}
