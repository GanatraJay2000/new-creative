import Inner from "@/components/Inner";
import React from "react";

import { silka, antonio, anton } from "@/lib/fonts/index";
import Navigation from "@/components/Navigation";
import FancySpanner from "@/components/FancySpanner";

function About() {
  return (
    <Inner>
      <main
        className={`flex min-h-screen flex-col items-center justify-center `}
      >
        <Navigation />
        <div className="overflow-hidden h-[75vh] flex items-center">
          <FancySpanner
            className={`${anton.className} relative text-9xl `}
            text="ABOUT &nbsp; US"
          />
        </div>
      </main>
    </Inner>
  );
}

export default About;
