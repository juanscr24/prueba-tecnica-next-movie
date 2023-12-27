import { ITitle } from '@/interfaces/ITitle'
import React, { FC } from 'react'

export const TitlePage: FC<ITitle> = ({ title }) => {
    return (
        <h1 className='font-bold text-xl text-white w-full bg-[#808080] h-16 px-36 flex items-center'>{title}</h1>
    )
}
