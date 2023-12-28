import { CardMS, CardType, TitlePage } from '@/components'

const HomePage = () => {
    return (
        <div className=''>
            <TitlePage title='Popular Titles' />
            <div className='flex justify-center items-center mx-32 gap-10 min-h-fit mt-20 
                            max-sm:flex max-sm:flex-col max-sm:m-10'>
                <CardType img='/series.jpg' title='SERIES' type='/series' text='series' />
                <CardType img='/Movies.jpg' title='MOVIES' type='/movies' text='movies' />
            </div>
        </div>
    )
}

export default HomePage