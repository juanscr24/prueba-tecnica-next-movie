import { ITitle } from '@/interfaces/ITitle'
import React, { FC } from 'react'

export const TitlePage: FC<ITitle> = ({ title }) => {
    return (
        <h1 className='font-bold text-xl text-white w-full bg-[#808080] h-16 px-36 flex items-center max-2xl:h-14 max-2xl:px-20 max-2xl:text-lg max-lg:px-16 max-lg:text-base max-lg:justify-center max-sm:text-sm transition-all duration-500'>{title}</h1>
    )
}
