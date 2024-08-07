import { poppins } from '@/lib/fonts'
import React, { useState } from 'react'
import bgTexture from '/assets/image/texture-dark.jpg'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import { delay, motion } from 'framer-motion'
import { anim } from "@/lib/anim";
import NavHStairs from './PageTransitions/NavHStairs'
import Link from 'next/link'

function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <HamMenuBtn setIsOpen={setIsOpen} />
            <NavHStairs isOpen={isOpen}>
                <div className="uppercase tracking-negative text-9xl font-bold">
                    <div className="">Home</div>
                    <div className="">Work</div>
                    <Link href="/about" className="text-stone-700">About</Link>
                    <div className="">Contact</div>
                </div>

                <div className={`absolute bottom-10 right-10 ${poppins.className}`}>Code by Jay</div>
            </NavHStairs>
        </>
    )
}

function HamMenuBtn({ setIsOpen }: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <button
            className='z-50 fixed border top-10 right-10 h-10 w-10 rounded-full bg-white text-black p-3'
            onClick={() => setIsOpen((a) => !a)}
        >
        </button>
    )
}

export default Navigation
