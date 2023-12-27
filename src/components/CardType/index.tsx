'use client'
import Image from 'next/image'
import React, { FC } from 'react'
import { ICardType } from '@/interfaces/ICardType'
import Link from 'next/link'

export const CardType: FC<ICardType> = ({ title, img, type, text }) => {
    return (
        <div className='relative flex items-center justify-center flex-col'>
            <div>
                <Image src={img} alt='js' width={1000} height={1000} className='object-cover w-64 h-96' />
            </div>
            <div className=''>
                <Link href={type}><h1 className='absolute left-0 top-0 bottom-0 right-0 flex text-white justify-center items-center font-bold text-2xl'>{title}</h1></Link>
            </div>
            <h1>{text}</h1>
        </div>
    )
}
