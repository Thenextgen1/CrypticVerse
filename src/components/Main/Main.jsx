import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/main.css'
import { useGetNewsQuery } from '../../services/newsApi'

const Main = () => {



    const { data: footballNews } = useGetNewsQuery({ newsCategory: 'soccer', count: 10 });
    // const { data: tennisNews } = useGetNewsQuery({ newsCategory: 'tennis', count: 10 });
    // const { data: basketballNews } = useGetNewsQuery({ newsCategory: 'basketball', count: 10 });
    // const { data: rugbyNews } = useGetNewsQuery({ newsCategory: 'rugby', count: 10 });
    // const { data: cyclingNews } = useGetNewsQuery({ newsCategory: 'cycling', count: 10 });
    // console.log(footballNews, tennisNews, basketballNews, rugbyNews, cyclingNews)

    return (
        <main className='main'>
            <section className='sport-images-container'>
                <div className='single-sport-showcase'>
                    <div className='cycling-container'>
                        <div>
                            <Link className="cycling-link" to="/cycling">CYCLING</Link>
                        </div>
                    </div>
                </div>
                <div className="allsports-showcase">
                    <div className="football-container">
                        <div>
                            <Link to="/football" className='football-link'>FOOTBALL</Link>

                        </div>
                    </div>
                    <div className='sport-showcase'>
                        <div className="basketball-container">
                            <div>
                                <Link to="/basketball" className='basketball-link'>BASKETBALL</Link>
                            </div>
                        </div>
                        <div className="rugby-container">
                            <div>
                                <Link to="/rugby" className='rugby-link'>RUGBY</Link>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <section className='football-rugby-card-container'>
                <div className='football-card-container'>

                </div>
                <div className='rugby-card-container'>

                </div>


            </section>


            <section className='basketball-card-container'>

            </section>





        </main>
    )
}

export default Main