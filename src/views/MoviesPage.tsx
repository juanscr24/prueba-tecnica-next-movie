import React from 'react'
import { CardMS, TitlePage } from '@/components'

const MoviesPage = () => {
    return (
        <div className=''>
            <TitlePage title='Popular Series'/>
            <CardMS movies/>
        </div>
    )
}

export default MoviesPage