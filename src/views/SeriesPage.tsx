import { CardMS, TitlePage } from '@/components'
import React from 'react'

export const SeriesPage = () => {
    return (
        <div>
            <TitlePage title='Popular Series'/>
            <CardMS series/>
        </div>
    )
}
