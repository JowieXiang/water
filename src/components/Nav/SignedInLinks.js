import React from 'react'
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'


//注意，由于SignedInLinks是一个funciton，所以要将props导入argument，才能在内部引用
const SignedInLinks = (props) => {
    const { auth, profile } = props;
    // console.log(props);
    return (
        <ul className='navbar-nav'>
            <li className='nav-item'>
                <NavLink to={'/personalPage/' + auth.uid} className="nav-link" style={{ color: "#82ca9d" }}>
                Dashboard
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/logedout' className="nav-link" style={{ color: "#82ca9d" }} onClick={props.signOut}>Log Out
                </NavLink>
            </li>
        </ul>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)