import { ISeries, movieArray } from "@/interfaces/movieFetch"
import { useEffect, useState } from "react"

export const useMovieFetch = () => {
    const [movieFetch, setMovieFetch] = useState<movieArray>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const movieData = async () => {
            const URL = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'
            const resp = await fetch(URL)
            const data = await resp.json()
            const { entries } = data

            const arrayMovies = entries.map((movie: ISeries) => ({
                title: movie.title,
                description: movie.description,
                type: movie.programType,
                image: movie.images["Poster Art"].url
            }))
            setMovieFetch(arrayMovies)
            setIsLoading(false)
        }
        movieData()
    }, [])
    return { movieFetch, isLoading }
}