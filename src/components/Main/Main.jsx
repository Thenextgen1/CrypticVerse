import React from 'react'
import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import moment from 'moment'
import { useGetNewsQuery } from '../../services/newsApi';
import '../../styles/main.css'



const { Title } = Typography;


const Main = () => {

    const { data: footballNews } = useGetNewsQuery({ newsCategory: 'football', count: 3 });


    if (!footballNews?.value) return 'Loading...'

    console.log(footballNews)

    const allFootballNews = footballNews.value.map((news, i) => (
        <div className='football-card'
            key={i}
        >
            <img style={{ width: '300px', height: '150px' }} src={news?.image?.thumbnail?.contentUrl} alt="football-news" />
            <div className='football-newslink-container'>
                <a className='football-link' href={news.url} target="_blank" rel='noreferrer'>Read Article</a>
                <p>{news.provider[0]?.name}</p>
            </div>
            <h3>{news.name}</h3>
            <p>
                {news.description > 100 ? `${news.description.substring(0, 100)}...` : news.description}
            </p>
            <p>
                {moment(news.datePublished).startOf('ss').fromNow()}
            </p>
        </div>
    ))




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
            <section className='football-card-container'>
                <div className='football-cardheading'>
                    <div className='dot-container'>
                        <div className='dot'></div>
                        <h3 style={{ letterSpacing: '2px' }} level={5}>
                            FOOTBALL
                        </h3>
                    </div>
                    <Link to="/football" className='show-more'>Show More</Link>
                </div>
                <div className='allfootballnews-container'>
                    {allFootballNews}

                </div>
            </section>


            {/* <section className='basketball-card-container'>
                <div className='basketball-card-heading'>
                    <h3><span></span> Basketball</h3>
                    <p>Show More</p>
                </div>
                <div className='basketball-card'>
                    <img />
                    <div>
                        <Link to="/basketball" className='basketball-link'>BASKETBALL</Link>
                        <p></p>
                    </div>
                    <h3></h3>
                    <p></p>
                </div>

            </section> */}





        </main>
    )
}

export default Main