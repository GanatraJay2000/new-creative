import Inner from '@/components/Inner'
import React from 'react'

import { silka, antonio } from "@/lib/fonts/index";
import Navigation from '@/components/Navigation';
import FancySpanner from '@/components/FancySpanner';

function Contact() {
    return (
        <Inner>
            <main
                className={`flex min-h-screen flex-col items-center justify-center bg-[url("/assets/image/otis-redding.png")]  bg-[#d72322]  ${antonio.className}`}
            >
                <div className={`${silka.className}  fixed text-3xl top-10 left-10`}>Jay Ganatra?</div>
                <Navigation />
                <div className="[font-size:16rem] font-black tracking-tighter">

                    <FancySpanner text="CONTACT ME" />

                </div>
            </main>
        </Inner>
    )
}

export default Contact
