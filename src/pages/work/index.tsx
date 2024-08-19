import Inner from "@/components/Inner";
import React from "react";

import { silka, antonio, anton } from "@/lib/fonts/index";
import Navigation from "@/components/Navigation";
import FancySpanner from "@/components/FancySpanner";
import Spanner from "@/components/Spanner";

function Work() {
  return (
    <Inner>
      <main
        className={`flex min-h-screen flex-col items-center justify-center  ${antonio.className}`}
      >
        <Navigation />
        <div className="font-black ">
          <div className=" flex items-center">
            <FancySpanner
              className={`${anton.className} text-9xl leading-none relative `}
              text="WORK"
            />
          </div>
        </div>
      </main>
    </Inner>
  );
}

export default Work;
