import { ITabs } from '@/interfaces/ITabs'
import React, { FC } from 'react'

export const Tabs: FC<ITabs> = ({ text }) => {
    return (
        <p className='border-r pr-5 border-white cursor-pointer hover:text-[#808080] text-white max-lg:text-xs max-lg:pr-3'>{text}</p>
    )
}
