import { cn } from "@/lib/utils";
import { anim } from "@/lib/anim";
import { motion } from "framer-motion";
import React from "react";

function VBanner({ children }: { children: React.ReactNode }) {
  const variant = {
    initial: { top: 0 },
    enter: (idx: number) => ({
      top: "-100%",
      transition: { duration: 0.4, delay: 0.15 * idx },
      transitionEnd: { top: "100%" },
    }),
    exit: (idx: number) => ({
      top: "0%",
      transition: { duration: 0.4, delay: 0.15 * idx },
    }),
  };
  const variant2 = {
    initial: { top: 0 },
    enter: (idx: number) => ({
      top: "-100%",
      transition: { duration: 0.5, delay: 0.15 * idx },
      transitionEnd: { top: "100%" },
    }),
    exit: (idx: number) => ({
      top: "0%",
      transition: { duration: 0.5, delay: 0.15 * idx },
    }),
  };

  const variant3 = {
    initial: { top: 0 },
    enter: (idx: number) => ({
      top: "-100%",
      transition: { duration: 0.6, delay: 0.15 * idx },
      transitionEnd: { top: "100%" },
    }),
    exit: (idx: number) => ({
      top: "0%",
      transition: { duration: 0.6, delay: 0.15 * idx },
    }),
  };

  return (
    <div>
      <motion.div
        {...anim(variant)}
        className="top-[100%] bg-neutral-900 fixed inset-0 z-[100] h-screen w-screen overflow-hidden"
      />
      <motion.div
        {...anim(variant2)}
        className="top-[100%] bg-red-900 fixed inset-0 z-[99] h-screen w-screen overflow-hidden"
      />
      <motion.div
        {...anim(variant3)}
        className="top-[100%] bg-red-500 fixed inset-0 z-[98] h-screen w-screen overflow-hidden"
      />
      {children}
    </div>
  );
}

export default VBanner;
