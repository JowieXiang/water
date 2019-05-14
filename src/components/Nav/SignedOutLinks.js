import React from 'react'
import { NavLink } from "react-router-dom";


const SignedOutLinks = () => {
    return (
        <ul className='navbar-nav'>
            <li className='nav-item'><NavLink  className="nav-link default-link" to='/signup'>SignUp</NavLink> </li>
            <li className='nav-item'><NavLink className="nav-link default-link" to='/signin'>Login</NavLink> </li>
        </ul>

    )
}

export default SignedOutLinks