'use client'
import React, { FC } from 'react'
import { useMovieFetch } from '@/hooks/useFetch'
import { ICardMS } from '@/interfaces/ICardMS'
import { ModalComponent } from '../ModalComponent'

export const CardMS: FC<ICardMS> = ({ series, movies }) => {
    const { movieFetch, isLoading } = useMovieFetch()
    const filterSeries = movieFetch?.filter(item => item.type === 'series')
    const filterMovies = movieFetch?.filter(item => item.type === 'movie')
    const syleCard = 'w-[13%] max-2xl:w-[15%] max-xl:w-[18%] max-lg:w-[22%] max-md:w-[30%] max-sm:w-[45%]'

    return (
        <div className='flex flex-wrap gap-5 px-28 py-5 max-lg:px-16 max-sm:px-10 justify-center'>
            {isLoading && <h1 className='text-xl'>Loading...</h1>}
            {series && filterSeries?.map((opt) => (
                <div className={syleCard}>
                    <ModalComponent title={opt.title} desc={opt.description} img={opt.image} />
                    <h1 className='text-sm'>{opt.title}</h1>
                </div>
            ))}
            {movies && filterMovies?.map((opt) => (
                <div className={syleCard}>
                    <ModalComponent title={opt.title} desc={opt.description} img={opt.image} />
                    <h1 className='text-sm'>{opt.title}</h1>
                </div>
            ))}
        </div>
    )
}
