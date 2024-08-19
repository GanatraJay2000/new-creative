import React from "react";
import Spanner from "./Spanner";
import { cn } from "@/lib/utils";

function FancySpanner({
  text,
  className,
  color = "#ef4444",
}: {
  text: string;
  className?: string;
  color?: string;
}) {
  return (
    <div className={cn("select-none", className)}>
      <Spanner
        spanClass="text-stroke-1"
        className="absolute -top-full text-center"
        text={text}
        color={color}
      />
      <Spanner color={color} className="text-center" text={text} />
      <Spanner
        spanClass="text-stroke-1"
        color={color}
        className="-bottom-full absolute text-center"
        text={text}
      />
    </div>
  );
}

export default FancySpanner;
