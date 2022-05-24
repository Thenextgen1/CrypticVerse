import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/football">football</Link>
                </li>
                <li>
                    <Link to="/basketball">Basketball</Link>
                </li>
                <li>
                    <Link to="/rugby">Rugby</Link></li>
                <li>
                    <Link to="/cycling">Cycling</Link>
                </li>
                <li>
                    <Link to="/tennis">Tennis</Link>
                </li>
            </ul>


        </nav>
    )
}

export default Navbar