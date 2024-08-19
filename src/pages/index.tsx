import FancySpanner from "@/components/FancySpanner";
import Floaties from "@/components/Floaties";
import Inner from "@/components/Inner";
import Navigation from "@/components/Navigation";
import { gilroy, silka } from "@/lib/fonts";
import { Sparkle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Inner>
      <main className={`min-h-screen relative `}>
        {/* <Navigation /> */}
        <div className="flex items-center gap-5 p-5">
          <Image
            src="/assets/image/dp.jpg"
            width={250}
            height={250}
            className="rounded-xl aspect-square object-cover object-top outline outline-offset-4 outline-amber-500"
            alt={"DP"}
          />
          <div className="">
            <div className={`${gilroy.className} font-black text-9xl`}>
              Jay Ganatra
            </div>
            <div className={`${silka.className} prose prose-2xl`}>
              Part-time Developer / Full-time Student
            </div>
            <div className="flex gap-5 text-amber-600">
              <Link href="/about">About Me</Link>
              <Link href="/work">Work</Link>
              <Link href="/fonts">Fonts</Link>
            </div>
          </div>
        </div>
      </main>
    </Inner>
  );
}
