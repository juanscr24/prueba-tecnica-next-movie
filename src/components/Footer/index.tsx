import React from 'react'
import { Tabs } from '..'
import { TABS } from '@/constants/TABS'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


export const Footer = () => {
    return (
        <div className='w-full bg-[#808080] h-44 px-36 py-10 text-sm'>
            <div className='flex gap-5'>
                {TABS.map((opt) => (
                    <Tabs text={opt} />
                ))}
            </div>
            <h1 className='my-3'><small>Copyright © MoviesCol Streaming. All rigth reserve</small></h1>
            <div className='text-5xl text-black flex gap-4 mt-6'>
                <FaFacebookF className='hover:bg-black rounded-full p-2 cursor-pointer hover:text-white' />
                <FaTwitter className='hover:bg-black rounded-full p-2 cursor-pointer hover:text-white' />
                <FaInstagram className='hover:bg-black rounded-full p-2 cursor-pointer hover:text-white' />
            </div>
        </div>
    )
}
