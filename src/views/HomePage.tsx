import { CardMS, CardType, TitlePage } from '@/components'
import React from 'react'

const HomePage = () => {
    return (
        <div>
            <TitlePage title='Popular Titles' />
            <div className='flex justify-center items-center mx-32 gap-10 min-h-fit mt-20'>
                <CardType img='/series.jpg' title='SERIES' type='/series' text='series' />
                <CardType img='/Movies.jpg' title='MOVIES' type='/movies' text='movies' />
            </div>
        </div>
    )
}

export default HomePage