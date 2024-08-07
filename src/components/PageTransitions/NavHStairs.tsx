import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react'

function NavHStairs({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) {
    const variants = (idx: number) => ({
        open: {
            left: 0,
            transition: { duration: 0.4, delay: 0.15 * idx },
        },
        closed: {
            left: '100%',
            transition: { duration: 0.4, delay: 0.15 * idx },
            transitionEnd: { left: "-100%" },
        }
    });

    const variants1 = {
        open: {
            opacity: 1,
            transition: { duration: 0.5, delay: 1 }
        },
        closed: {
            opacity: 0,
            left: '100%',
        }
    };

    const variants2 = {
        closed: {
            pointerEvents: "none" as "none",
        },
        open: {
            pointerEvents: "auto" as "auto",
        }
    };

    return (
        <motion.div
            variants={variants2}
            animate={isOpen ? "open" : "closed"}
            className={cn(`z-20 pointer-events-none p-10 text-white fixed inset-0 flex items-center justify-start bg-cover bg-center `)}
        >
            <div
                className="banners h-screen w-screen overflow-hidden bg-transparent fixed"
            >
                {[...Array(3)].map((_, idx) => {
                    return (
                        <motion.div
                            variants={variants(3 - idx)}
                            animate={isOpen ? "open" : "closed"}

                            key={idx}
                            id={`banner-${idx + 1}`}
                            className="banner w-screen h-[33.3333333333334%]"
                            style={{
                                top: `${33.3333333333334 * idx}%`,
                                backgroundPosition: `0px ${33.3333333333334 * idx}%`
                            }}
                        />
                    );
                })}
            </div>

            <motion.div variants={variants1}
                animate={isOpen ? "open" : "closed"}
                className='z-10 opacity-0'>
                {children}
            </motion.div>
        </motion.div >
    )
}

export default NavHStairs
