import Inner from "@/components/Inner";
import React from "react";

import { silka, antonio, anton } from "@/lib/fonts/index";
import Navigation from "@/components/Navigation";
import FancySpanner from "@/components/FancySpanner";

function About() {
  return (
    <Inner>
      <Navigation />
      <div className="content-grid absolute w-full min-h-screen z-10">
        <div className="border-r border-l border-gray-600 border-dashed" />
      </div>
      <div className="content-grid absolute w-full min-h-screen z-10">
        <div className="level-1 border-r border-l border-gray-600 border-dashed" />
      </div>
      <div className="content-grid absolute w-full min-h-screen z-10">
        <div className="breakout border-r border-l border-gray-600 border-dashed" />
      </div>
      <main className={`relative w-full min-h-screen content-grid`}>
        <div className="level-1 bg-red-100">Level-1</div>
        <div className="level-2 bg-red-300">Level-2</div>
        <div className="bg-green-300">Default</div>
        <div className="full-width bg-purple-300">Full-Width</div>
        <div className="breakout bg-purple-100">Breakout</div>
      </main>
    </Inner>
  );
}

export default About;

/* 
<FancySpanner
            className={`${anton.className} relative text-9xl `}
            text="ABOUT &nbsp; US"
          /> 

*/
