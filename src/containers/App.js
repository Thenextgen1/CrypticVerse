import React from 'react'
import { Header, Navbar, Footer, Main } from '../components'
import { useGetNewsQuery } from '../services/newsApi'
import './App.css'

const App = () => {

    const { data: footballNews } = useGetNewsQuery({ newsCategory: 'soccer', count: 10 });
    console.log(footballNews)

    return (
        <div className='app'>
            <Header />
            <Navbar />
            <Main />
            <Footer />

        </div>
    )
}

export default App