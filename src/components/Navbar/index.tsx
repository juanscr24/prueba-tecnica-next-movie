'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ROUTES } from '@/constants/ROUTES'

export const Navbar = () => {
    const [active, setActive] = useState(false)
    const handleActive = () => {
        setActive(!active)
    }

    return (
        <nav className='w-full bg-[#141414] flex gap-2 font-bold items-center h-20 px-32 text-xl text-white max-2xl:px-20 max-2xl:text-lg max-lg:px-16 max-lg:text-base max-lg:justify-between max-sm:px-8 max-sm:text-sm transition-all duration-500'>
            <Link href='/' className='hover:bg-[#282828] hover:px-6 px-6 flex items-center gap-3 justify-start transition duration-400 ease-in-out'>
                <Image onClick={handleActive} src='/logoWhite.png' alt='xD' className='max-2xl:w-[60px] max-2xl:h-[60px] max-sm:w-[50px] max-sm:h-[50px]' width={80} height={80}/>
                <h1 className='max-lg:hidden'>CINECOL</h1>
            </Link>
            {ROUTES.map((opt) => (
                <Link className='hover:bg-[#282828] hover:py-[26px] hover:px-[p6] p-6 transition duration-500 ease-in-out' href={opt.path}>{opt.name}</Link>
            ))}
        </nav>
    )
}
