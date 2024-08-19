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
      <main
        className={`flex min-h-screen flex-col items-center justify-center  relative `}
      >
        <Navigation />
        <div className="flex items-center gap-5">
          <Image
            src="/assets/image/dp.jpg"
            width={175}
            height={175}
            className="rounded-full aspect-square object-cover object-top"
            alt={"DP"}
          />
          <div className="">
            <div className={`${gilroy.className} font-black text-9xl`}>
              Jay Ganatra
            </div>
            <div className={`${silka.className} prose prose-2xl`}>
              Part-time Developer / Full-time Student
            </div>
            <div className="flex gap-5 text-red-500">
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
