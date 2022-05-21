import React from 'react'
import { Navbar, Footer, Main } from '../components'


const App = () => {
    return (
        <div className='app'>
            <div className="navbar">
                <Navbar />
            </div>
            <div className='main'>
                <Main />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default App