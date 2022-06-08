import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment'
import { useGetNewsQuery } from '../../services/newsApi';
import '../../styles/main.css';
import demoImg from '../../assets/cycling-img.jpg'
import demoFoot from '../../assets/demofootball.jpg'
import demobox from '../../assets/demobox.jpg'




const Main = () => {

    const { data: footballNews } = useGetNewsQuery({ newsCategory: 'Soccer, Football', count: 4 });
    const { data: cyclingNews } = useGetNewsQuery({ newsCategory: 'Tennis', count: 3 });
    const { data: boxingNews } = useGetNewsQuery({ newsCategory: 'Boxing, MMA', count: 3 })

    if (!footballNews?.value || !cyclingNews?.value || !boxingNews?.value) return 'Loading...'

    const mediaQuery = window.matchMedia('(min-width: 690px) and (max-width: 1054px)')
    let responsiveNews;
    mediaQuery.matches ? responsiveNews = footballNews?.value.slice(0, 4) : responsiveNews = footballNews?.value.slice(0, 3)


    const allFootballNews = responsiveNews.map((news, i) => (
        <div className='football-card'
            key={i}
        >
            <img style={{ width: '300px', height: '150px' }} src={news?.image?.thumbnail?.contentUrl || demoFoot} alt="football-news" />
            <div className='football-newslink-container'>
                <a className='football-link' href={news.url} target="_blank" rel='noreferrer'>Read Article</a>
                <p>{news.provider[0]?.name.length > 20 ? `${news.provider[0]?.name.substring(0, 20)}...` : news.provider[0]?.name}</p>
            </div>
            <h3>{news.name.length > 65 ? `${news.description.substring(0, 65)}...` : news.name}</h3>
            <p>
                {news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}
            </p>
            <p>
                {moment(news.datePublished).startOf('ss').fromNow()}
            </p>
        </div>
    ))

    const allBoxingNews = boxingNews.value.map((news, i) => (
        <div className='boxing-card' key={i}>
            <div className='boxing-card-container'>
                <div>
                    <h4>{news.name.length > 30 ? `${news.name.substring(0, 30)}...` : news.name}</h4>
                    <p>
                        {moment(news.datePublished).startOf('ss').fromNow()}
                    </p>
                </div>
                <img style={{ width: '100px', height: '100px' }} src={news?.image?.thumbnail?.contentUrl || demobox} alt="boxing" />
            </div>
            <a href={news.url} target="_blank" rel='noreferrer'>Read Article</a>
        </div>
    ))
    const allcyclingNews = cyclingNews.value.map((news, i) => (
        <div className='cycling-card' key={i}>
            <div className='cycling-card-container'>
                <div>
                    <h4>{news.name.length > 30 ? `${news.name.substring(0, 30)}...` : news.name}</h4>
                    <p>
                        {moment(news.datePublished).startOf('ss').fromNow()}
                    </p>
                </div>
                <img style={{ width: '100px', height: '100px' }} src={news?.image?.thumbnail?.contentUrl || demoImg} alt="cycling" />
            </div>
            <a className='' href={news.url} target="_blank" rel='noreferrer'>Read Article</a>
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
                <div className='othersports-container'>
                    {allBoxingNews}
                    {allcyclingNews}
                </div>
            </section>


        </main>
    )
}

export default Main