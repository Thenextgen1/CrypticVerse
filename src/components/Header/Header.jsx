import React from 'react'
import { Select } from 'antd';
import { TwitterCircleFilled, DownOutlined, InstagramFilled, DribbbleCircleFilled } from '@ant-design/icons'
import '../../styles/header.css'

const Header = () => {
    const { Option } = Select;

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <header className='header'>
            <ul>
                <li>
                    <a href='https://twitter.com'>
                        <TwitterCircleFilled className='social-links' />
                    </a>
                </li>
                <li>
                    <a href='https://instagram.com'>
                        <InstagramFilled className='social-links' />
                    </a>
                </li>
                <li>
                    <a href='https://dribble.com'>
                        <DribbbleCircleFilled className='social-links' />
                    </a>
                </li>
            </ul>
            <h1 style={{ letterSpacing: '2px' }}>Sportyverse</h1>
            <Select
                defaultValue="En"
                style={{
                    width: 120,
                }}
                onChange={handleChange}
            >
                <Option value="Fre">Fre</Option>
                <Option value="Fre">Ger</Option>
                <Option value="Ger">En</Option>
            </Select>
        </header>
    )
}

export default Header