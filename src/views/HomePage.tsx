import { CardType, TitlePage } from '@/components'
import React from 'react'

const HomePage = () => {
    return (
        <div className=''>
            <TitlePage title='Popular Titles' />
            <div className='flex justify-center items-center mx-32 my-36 gap-5'>
                <CardType img='/series.jpg' title='SERIES' type='/series' text='series'/>
                <CardType img='/Movies.jpg' title='MOVIES' type='/movies' text='movies' />
            </div>
        </div>
    )
}

export default HomePage