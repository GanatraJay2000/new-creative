import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useState } from "react";

function Spanner({
  text,
  className,
  spanClass,
  animation = false,
  color = "#d72322",
}: {
  text: string;
  className?: string;
  spanClass?: string;
  animation?: boolean;
  color?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const variant1 = (index: number) => ({
    hovered: {
      translateY: "-103%",
      transition: { delay: index * 0.05, ease: "easeOut" },
    },
    notHovered: {
      translateY: "1%",
      transition: { delay: index * 0.05, ease: "easeOut" },
    },
  });

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn("", className)}
    >
      {text.split("").map((char, index) => {
        return (
          <span
            key={index}
            className={cn("inline-block relative", spanClass, {
              "overflow-hidden": animation,
            })}
          >
            <motion.div
              variants={variant1(index)}
              animate={
                animation ? (isHovered ? "hovered" : "notHovered") : false
              }
              className=""
            >
              {char}
            </motion.div>
            {animation && (
              <motion.div
                variants={variant1(index)}
                animate={
                  animation ? (isHovered ? "hovered" : "notHovered") : false
                }
                className={`absolute`}
                style={{ color }}
              >
                {char}
              </motion.div>
            )}
          </span>
        );
      })}
    </div>
  );
}

export default Spanner;
