import React from 'react'
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import '../../styles/main.css'
import football from '../../assets/football.jpg'
import basketball from '../../assets/basketball.jpg'
import cycling from '../../assets/cycling.jpg'
import rugby from '../../assets/rugby.jpg'



const Main = () => {
    return (
        <main className='main'>
            <Row className='sport-images-container'>
                <Col span={12}>
                    <img src={cycling} alt="cycling" />
                    <div>
                        {/* <Link className="" to="/cycling">Cycling</Link>
                        <p>Lorem, ipsum dolor.</p> */}
                    </div>
                </Col>
                <Col span={12}>
                    <div className="football-container">
                        <img src={football} alt="football" className='football' />
                        {/* <Link to="/football">Football</Link>
                        <p>Lorem, ipsum dolor.</p> */}
                    </div>

                    <div className='sport-showcase'>
                        <div className="basketball-container">
                            <img src={basketball} alt="basketball" />
                            {/* <Link to="/basketball">Basketball</Link>
                            <p>Lorem, ipsum dolor.</p> */}
                        </div>
                        <div className="rugby-container">
                            <img src={rugby} alt="rugby" />
                            {/* <Link to="/rugby">Rugby</Link>
                            <p>Lorem, ipsum dolor.</p> */}
                        </div>


                    </div>
                </Col>
            </Row>

        </main>
    )
}

export default Main