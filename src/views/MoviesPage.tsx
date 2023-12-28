import { CardMS, TitlePage } from '@/components'

const MoviesPage = () => {
    return (
        <div>
            <TitlePage title='Popular Movies' />
            <CardMS movies />
        </div>
    )
}

export default MoviesPage