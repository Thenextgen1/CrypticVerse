import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from 'antd';
import '../../styles/navbar.css'
import hamburger from '../../assets/icon-hamburger.svg'

const Navbar = () => {
    const { Search } = Input;
    const onSearch = (value) => console.log(value);


    return (
        <nav className="navbar">
            <img className="hamburger" src={hamburger} alt="hamburger" />
            <ul>
                <li>
                    <Link className="category-links" to="/football">Football</Link>
                </li>
                <li>
                    <Link className="category-links" to="/basketball">Basketball</Link>
                </li>
                <li>
                    <Link className="category-links" to="/rugby">Rugby</Link></li>
                <li>
                    <Link className="category-links" to="/cycling">Cycling</Link>
                </li>
                <li>
                    <Link className="category-links" to="/tennis">Tennis</Link>
                </li>
            </ul>
            <Search
                placeholder="Search"
                onSearch={onSearch}
                style={{
                    width: 200,
                }}
            />

        </nav>
    )
}

export default Navbar