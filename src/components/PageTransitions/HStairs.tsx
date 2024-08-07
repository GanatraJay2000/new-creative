import { motion } from "framer-motion";
import { anim } from "@/lib/anim";

function HStairs({ children }: { children: React.ReactNode }) {
    const expand = {
        initial: { left: 0 },
        enter: (idx: number) => ({
            left: "100%",
            transition: { duration: 0.4, delay: 0.15 * idx },
            transitionEnd: { left: "-100%" },
        }),
        exit: (idx: number) => ({
            left: "0%",
            transition: { duration: 0.4, delay: 0.15 * idx },
        }),
    };

    const overlay = {
        initial: { opacity: 0.4 },
        enter: { opacity: 0, transition: { duration: 0.4 } },
        exit: { opacity: 0.4, transition: { duration: 0.4, delay: 0.3 } },
    };

    return (
        <div>
            <div className="banners h-screen fixed pointer-events-none">
                {[...Array(3)].map((_, idx) => {
                    return (
                        <motion.div
                            {...anim(expand, 3 - idx)}
                            key={idx}
                            id={`banner-${idx + 1}`}
                            className="banner w-screen h-[33.3333333333334%] bg-[#000000] bg-[url('/assets/image/texture-dark.jpg')] z-50 fixed"
                            style={{ top: `${33.3333333333334 * idx}%` }}
                        ></motion.div>
                    );
                })}
            </div>
            <motion.div
                {...anim(overlay)}
                className="h-dvh w-dvw fixed top-0 left-0 pointer-events-none bg-black"
            ></motion.div>
            {children}
        </div >
    )
}

export default HStairs
