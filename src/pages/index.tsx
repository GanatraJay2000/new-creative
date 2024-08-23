import Inner from "@/components/Inner";
import Navigation from "@/components/Navigation";
import { gilroy, silka } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Inner>
      <main
        className={`min-h-screen relative flex items-center justify-center`}
      >
        {/* <Navigation /> */}
        <div className="flex items-center gap-5 p-5">
          <Image
            src="/assets/image/dp.jpg"
            width={250}
            height={250}
            className="rounded-sm aspect-square object-cover object-top outline outline-offset-4 outline-black"
            alt={"DP"}
          />
          <div className="">
            <div className={`${gilroy.className} font-black text-9xl`}>
              Jay Ganatra
            </div>
            <div className={`${silka.className} prose prose-2xl`}>
              Part-time Developer / Full-time Student
            </div>
            <div className="flex gap-5 text-red-600">
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
