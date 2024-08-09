import { poppins } from '@/lib/fonts/index'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import NavVBanner from './PageTransitions/NavVBanner'
import Spanner from './Spanner'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'

function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    const [activePath, setActivePath] = useState("/")

    useEffect(() => {
        setActivePath(pathname)
    }, []);

    const paths = [
        {
            name: 'Home',
            url: '/',
        },
        {
            name: 'Work',
            url: '/work'
        },
        {
            name: 'About',
            url: '/about',
        },
        {
            name: 'Contact',
            url: '/contact'
        }
    ]

    return (
        <>
            <HamMenuBtn setIsOpen={setIsOpen} />
            <NavVBanner isOpen={isOpen}>
                <div className="uppercase tracking-negative text-9xl font-bold">
                    {
                        paths.map((path, i) => (
                            <Link key={i} href={path.url} className={cn("", {
                                'text-stone-700': activePath === path.url,
                            })} >
                                <Spanner text={path.name} animation />
                            </Link>
                        ))
                    }

                </div>

                <div className={`absolute bottom-10 right-10 ${poppins.className}`}>Code by Jay</div>
            </NavVBanner >
        </>
    )
}

function HamMenuBtn({ setIsOpen }: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <button
            className='z-40 fixed border top-10 right-10 h-10 w-10 flex items-center justify-center rounded-full bg-white text-black '
            onClick={() => setIsOpen((a) => !a)}
        >
            <Menu />
        </button>
    )
}

export default Navigation
