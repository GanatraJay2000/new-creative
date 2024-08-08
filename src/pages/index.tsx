import Inner from "@/components/Inner";
import Navigation from "@/components/Navigation";
import { antonio, silka } from "@/lib/fonts/index";
import Link from "next/link";


export default function Home() {

  return (
    <Inner>
      <main
        className={`flex min-h-screen flex-col items-center justify-center bg-[url("/assets/image/otis-redding.png")]  bg-[#d72322]  ${antonio.className}`}
      >
        <div className={`${silka.className}  fixed text-3xl top-10 left-10`}>Jay Ganatra?</div>
        <Navigation />
        <div className="[font-size:16rem] font-black tracking-tighter">
          <Link href="/about">
            <div className="scale-90 text-center">
              <span className="text-stroke-1">A</span>
              <span className="text-stroke-1">B</span>
              <span className="text-stroke-1">O</span>
              <span className="text-stroke-1">U</span>
              <span className="text-stroke-1">T</span>
              <span className="text-stroke-1"> </span>
              <span className="text-stroke-1">U</span>
              <span className="text-stroke-1">S</span>
            </div>
            <div className="-my-72 drop-shadow-2xl [font-size:20rem] text-center">
              <span className="">A</span>
              <span className="">B</span>
              <span className="">O</span>
              <span className="">U</span>
              <span className="">T</span>
              <span className=""> </span>
              <span className="">U</span>
              <span className="">S</span>
            </div>
            <div className="scale-90 text-center">
              <span className="text-stroke-1">A</span>
              <span className="text-stroke-1">B</span>
              <span className="text-stroke-1">O</span>
              <span className="text-stroke-1">U</span>
              <span className="text-stroke-1">T</span>
              <span className="text-stroke-1"> </span>
              <span className="text-stroke-1">U</span>
              <span className="text-stroke-1">S</span>
            </div>
          </Link>
        </div>


      </main>
    </Inner>
  );
}
