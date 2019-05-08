import React from 'react'
import { NavLink } from "react-router-dom";


const SignedOutLinks = () => {
    return (
        <ul className='navbar-nav'>
            <li className='nav-item'><NavLink style={{ color: "#82ca9d" }} className="nav-link" to='/signup'>SignUp</NavLink> </li>
            <li className='nav-item'><NavLink style={{ color: "#82ca9d" }} className="nav-link" to='/signin'>Login</NavLink> </li>
        </ul>

    )
}

export default SignedOutLinks