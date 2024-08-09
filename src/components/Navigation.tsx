import { poppins } from '@/lib/fonts/index'
import React, { useState } from 'react'
import Link from 'next/link'
import NavVBanner from './PageTransitions/NavVBanner'
import Spanner from './Spanner'

function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <HamMenuBtn setIsOpen={setIsOpen} />
            <NavVBanner isOpen={isOpen}>
                <div className="uppercase tracking-negative text-9xl font-bold">
                    <Spanner text="Home" />
                    <Spanner text="Work" />
                    <Link href="/about" className="text-stone-700">
                        <Spanner text="About" /></Link>
                    <Spanner text='Contact' />
                </div>

                <div className={`absolute bottom-10 right-10 ${poppins.className}`}>Code by Jay</div>
            </NavVBanner>
        </>
    )
}

function HamMenuBtn({ setIsOpen }: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <button
            className='z-40 fixed border top-10 right-10 h-10 w-10 rounded-full bg-white text-black p-3'
            onClick={() => setIsOpen((a) => !a)}
        >
        </button>
    )
}

export default Navigation
