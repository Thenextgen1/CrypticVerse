import React from 'react'
import { Menu, Dropdown, message, Space } from 'antd';
import { TwitterCircleFilled, DownOutlined, InstagramFilled, DribbbleCircleFilled } from '@ant-design/icons'


const Header = () => {
    const onClick = ({ key }) => {
        message.info(`Click on item ${key}`);
    };
    const menu = (
        <Menu
            onClick={onClick}
            items={[
                {
                    label: 'Eng',
                    key: '1',
                },
                {
                    label: 'Ger',
                    key: '2',
                },
                {
                    label: 'Fre',
                    key: '3',
                },
            ]}
        />
    );


    return (
        <header>
            <ul>
                <li>
                    <a href='https://twitter.com'>
                        <TwitterCircleFilled />
                    </a>
                </li>
                <li>
                    <a href='https://instagram.com'>
                        <InstagramFilled />
                    </a>
                </li>
                <li>
                    <a href='https://dribble.com'>
                        <DribbbleCircleFilled />
                    </a>
                </li>
            </ul>
            <h1>Sportyverse</h1>
            <Dropdown overlay={menu}>
                <a href='https://google.com' onClick={e => e.preventDefault()}>
                    <Space>
                        Hover me, Click menu item
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
        </header>
    )
}

export default Header