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
        <div className='w-full bg-[#4D4847] flex gap-2 font-bold items-center h-20 px-32 text-xl text-white '>
            <Link href='/' className='hover:bg-[#403c3b] hover:px-6 px-6 flex items-center gap-3 justify-start transition duration-400 ease-in-out'>
                <Image onClick={handleActive} src='/logoWhite.png' alt='xD' width={80} height={80} />
                <h1>CINECOL</h1>
            </Link>
            {ROUTES.map((opt) => (
                <Link className='hover:bg-[#403c3b] hover:py-[26px] hover:px-[p6] p-6 transition duration-500 ease-in-out' href={opt.path}>{opt.name}</Link>
            ))}
        </div>
    )
}
