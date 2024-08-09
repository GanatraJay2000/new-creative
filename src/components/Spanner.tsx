import { cn } from '@/lib/utils'
import { motion } from 'framer-motion';
import React, { useState } from 'react'

function Spanner({ text, className, spanClass, animation = false }: { text: string; className?: string; spanClass?: string, animation?: boolean }) {
    const [isHovered, setIsHovered] = useState(false);

    const variant1 = (index: number) => ({
        hovered: {
            translateY: "-103%",
            transition: { delay: index * 0.05, ease: "easeOut" },
            // transitionEnd: { translateY: "103%" }
        },
        notHovered: {
            translateY: "1%",
            transition: { delay: index * 0.05, ease: "easeOut" }
        }
    })

    // const variant2 = (index: number) => ({
    //     hovered: {
    //         translateY: "-103%",
    //         transition: { delay: index * 0.05, ease: "easeOut" },
    //     },
    //     notHovered: {
    //         translateY: "-203%",
    //         transition: { delay: index * 0.05, ease: "easeOut" },
    //         transitionEnd: { translateY: "1%" }
    //     }
    // })


    return (
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={cn("", className)}>
            {
                text.split('').map((char, index) => {
                    return (
                        <div key={index} className={cn("inline-block relative", spanClass, {
                            "overflow-hidden": animation
                        })}>
                            <motion.div variants={variant1(index)} animate={animation ? isHovered ? "hovered" : "notHovered" : false} className="">{char}</motion.div>
                            {
                                animation && <motion.div variants={variant1(index)} animate={animation ? isHovered ? "hovered" : "notHovered" : false} className="absolute text-[#d72322]">{char}</motion.div>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Spanner
