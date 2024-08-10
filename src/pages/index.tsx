import FancySpanner from "@/components/FancySpanner";
import Inner from "@/components/Inner";
import Navigation from "@/components/Navigation";
import { anton, antonio, silka } from "@/lib/fonts/index";
import Link from "next/link";

export default function Home() {

  return (
    <Inner>
      <main
        className={`flex min-h-screen flex-col items-center justify-center bg-[url("/assets/image/otis-redding.png")]  bg-[#d72322]  `}
      >
        <div className={`${silka.className}  fixed text-3xl top-10 left-10`}>Jay Ganatra?</div>
        <Navigation />
        <div className="overflow-hidden h-[75vh] flex items-center">
          <FancySpanner className={`${anton.className} relative [font-size:20rem] [line-height:1em] `} text="HOME" />
        </div>
      </main>
    </Inner>
  );
}
