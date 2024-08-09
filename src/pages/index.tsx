import FancySpanner from "@/components/FancySpanner";
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
            <FancySpanner text="ABOUT US" />
          </Link>
        </div>


      </main>
    </Inner>
  );
}
