import React from 'react'
import { Tabs } from '..'
import { TABS } from '@/constants/TABS'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


export const Footer = () => {
    return (
        <div className='w-full bg-[#141414] h-fit px-36 py-7 text-sm 
                        max-lg:py-4 max-lg:px-20 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center transition-all duration-500'>
            <div className='flex gap-5 flex-wrap'>
                {TABS.map((opt) => (
                    <Tabs text={opt} />
                ))}
            </div>
            <h1 className='my-3 text-white'><small>Copyright © MoviesCol Streaming. All rigth reserve</small></h1>
            <div className='text-5xl text-white flex gap-4 mt-6 max-lg:text-4xl max-lg:gap-3 max-lg:mt-3'>
                <FaFacebookF className='hover:bg-white rounded-full p-2 cursor-pointer hover:text-black' />
                <FaTwitter className='hover:bg-white rounded-full p-2 cursor-pointer hover:text-black'/>
                <FaInstagram className='hover:bg-white rounded-full p-2 cursor-pointer hover:text-black' />
            </div>
        </div>
    )
}
