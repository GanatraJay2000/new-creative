import { cn } from "@/lib/utils";
import React from "react";

function Floaties({
  children,
  className = "text-red-500",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(`text-9xl leading-none drop-shadow-black`, className)}>
      {children}
    </div>
  );
}

export default Floaties;
