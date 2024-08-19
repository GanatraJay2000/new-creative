import Inner from "@/components/Inner";
import React from "react";

import {
  silka,
  antonio,
  nudica,
  spaceGrotesk,
  tiro,
  poppins,
  inter,
  unna,
  prata,
  dmSerifDisplay,
  lora,
  bungee,
  monoton,
  rampartOne,
  anton,
  gilroy,
} from "@/lib/fonts/index";
import Navigation from "@/components/Navigation";
import { NextFont, NextFontWithVariable } from "next/dist/compiled/@next/font";
import { cn } from "@/lib/utils";

function Fonts() {
  return (
    <Inner>
      <main className="bg-stone-100 p-10">
        <div className="nav p-10">
          <div className={`${silka.className} text-3xl `}>Jay Ganatra</div>
          <Navigation />
        </div>
        <div className="w-11/12 mx-auto">
          <div className={`${poppins.className}  w-full `}>
            <FontShowcase font={poppins} fontIs="Poppins" />
            <FontShowcase font={gilroy} fontIs="Gilroy" />
            <FontShowcase font={silka} fontIs="Silka" />
            <FontShowcase font={inter} fontIs="Inter" />
            <FontShowcase font={nudica} fontIs="Nudica" />
            <FontShowcase font={spaceGrotesk} fontIs="Space Grotesk" />
            <FontShowcase font={anton} fontIs="Anton" />
            <FontShowcase font={antonio} fontIs="Antonio" className="mb-20" />
            <FontShowcase font={dmSerifDisplay} fontIs="DM Serif Display" />
            <FontShowcase font={tiro} fontIs="Tiro" />
            <FontShowcase font={unna} fontIs="Unna" />
            <FontShowcase font={prata} fontIs="Prata" />
            <FontShowcase font={lora} fontIs="Lora" />
            <FontShowcase font={bungee} fontIs="Bungee" />
            <FontShowcase font={monoton} fontIs="Monoton" />
            <FontShowcase font={rampartOne} fontIs="Rampart One" />
          </div>
        </div>
      </main>
    </Inner>
  );
}

function FontShowcase({
  font,
  fontIs,
  className,
}: {
  font: NextFontWithVariable | NextFont;
  fontIs: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-4", className)}>
      <div className="font-bold text-xl uppercase">{fontIs}</div>
      <div className="grid grid-cols-2 w-full bg-white  rounded-lg p-5 ">
        <div
          className={`${font.className} prose !max-w-full lg:prose-xl prose-slate !m-0 !p-0`}
        >
          The quick brown fox jumps over the lazy dog.
        </div>
        <div
          className={`${font.className} prose lg:prose-xl prose-slate !max-w-full uppercase !m-0 !p-0 text-right`}
        >
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
    </div>
  );
}

export default Fonts;
