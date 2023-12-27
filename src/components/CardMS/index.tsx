'use client'
import React, { FC } from 'react'
import { useMovieFetch } from '@/hooks/useFetch'
import { ICardMS } from '@/interfaces/ICardMS'

export const CardMS: FC<ICardMS> = ({ series, movies }) => {
    const { movieFetch, isLoading } = useMovieFetch()
    const filterSeries = movieFetch?.filter(item => item.type === 'series')
    const filterMovies = movieFetch?.filter(item => item.type === 'movie')
    return (
        <div className='flex flex-wrap gap-5 px-28 py-5'>
            {isLoading && <h1 className='text-xl'>Loading...</h1>}

            {series && filterSeries?.map((opt) => (
                <div className='w-[13%]'>
                    <img src={opt.image} alt="series" className='cursor-pointer' />
                    <h1 className='text-sm'>{opt.title}</h1>
                </div>
            ))}
            {movies && filterMovies?.map((opt) => (
                <div className='w-[13%]'>
                    <img src={opt.image} alt="movies" className='cursor-pointer' />
                    <h1 className='text-sm'>{opt.title}</h1>
                </div>
            ))}
        </div>
    )
}
