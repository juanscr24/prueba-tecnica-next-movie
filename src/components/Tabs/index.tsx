import { ITabs } from '@/interfaces/ITabs'
import React, { FC } from 'react'

export const Tabs: FC<ITabs> = ({ text }) => {
    return (
        <p className='border-r pr-5 border-black cursor-pointer hover:text-white'>{text}</p>
    )
}
