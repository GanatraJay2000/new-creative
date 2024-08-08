import Inner from '@/components/Inner'
import Link from 'next/link'
import React from 'react'

import { silka, antonio } from "@/lib/fonts/index";

function About() {
    return (
        <Inner>
            <div className={`${silka.className}`}>
                About
                <Link className={`${antonio.className}`} href="/">Home</Link>
            </div>
        </Inner>
    )
}

export default About
