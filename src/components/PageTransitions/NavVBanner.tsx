import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

function NavVBanner({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) {
  const variants1 = {
    closed: {
      pointerEvents: "none" as "none",
    },
    open: {
      pointerEvents: "auto" as "auto",
    },
  };

  const variants2 = {
    open: {
      top: "0%",
      transition: { delay: 0.15, duration: 0.2 },
    },
    closed: {
      top: "-100%",
      transition: { delay: 0.25, duration: 0.5 },
      transitionEnd: { top: "100%" },
    },
  };

  const variants3 = {
    open: {
      top: "-100%",
      transition: { duration: 0.9, ease: "easeOut" },
      transitionEnd: { top: "101%" },
    },
    closed: {
      top: "-100%",
      transition: { duration: 0.7, ease: "easeOut" },
      transitionEnd: { top: "100%" },
    },
  };
  const variants4 = {
    open: {
      top: "-100%",
      transition: { duration: 0.8, ease: "easeOut" },
      transitionEnd: { top: "101%" },
    },
    closed: {
      top: "-100%",
      transition: { duration: 0.6, ease: "easeOut" },
      transitionEnd: { top: "100%" },
    },
  };

  const variants5 = {
    open: {
      top: "-100%",
      transition: { duration: 1, ease: "easeOut" },
      transitionEnd: { top: "101%" },
    },
    closed: {
      top: "-100%",
      transition: { duration: 0.8, ease: "easeOut" },
      transitionEnd: { top: "100%" },
    },
  };

  return (
    <motion.div
      variants={variants1}
      animate={isOpen ? "open" : "closed"}
      className={cn(`z-20 pointer-events-none text-white fixed inset-0 `)}
    >
      <motion.div
        variants={variants3}
        animate={isOpen ? "open" : "closed"}
        className="bg-red-900 fixed inset-0 z-30 h-screen w-screen overflow-hidden"
      />
      <motion.div
        variants={variants4}
        animate={isOpen ? "open" : "closed"}
        className="bg-neutral-900 fixed inset-0 z-40 h-screen w-screen overflow-hidden"
      />
      <motion.div
        variants={variants5}
        animate={isOpen ? "open" : "closed"}
        className="bg-red-500 fixed inset-0 z-20 h-screen w-screen overflow-hidden"
      />

      <motion.div
        variants={variants2}
        animate={isOpen == true ? "open" : "closed"}
        className="top-[-100%] banner flex p-10 items-center justify-start fixed inset-0 h-screen w-screen overflow-hidden z-10 "
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default NavVBanner;
