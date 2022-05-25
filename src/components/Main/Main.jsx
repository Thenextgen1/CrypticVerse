import React from 'react'
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import '../../styles/main.css'


const Main = () => {
    return (
        <main className='main'>
            <Row className='sport-images-container'>
                <Col span={12}>
                    <div className='cycling-container'>
                        <Link className="cycling-link" to="/cycling">Cycling</Link>
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                </Col>
                <Col span={12} className="allsports-showcase">
                    <div className="football-container">
                        <Link to="/football" className='football-link'>Football</Link>
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                    <div className='sport-showcase'>
                        <div className="basketball-container">
                            <Link to="/basketball" className='basketball-link'>Basketball</Link>
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                        <div className="rugby-container">
                            <Link to="/rugby" className='rugby-link'>Rugby</Link>
                            <p>Lorem, ipsum dolor.</p>
                        </div>


                    </div>
                </Col>
            </Row>

        </main>
    )
}

export default Main