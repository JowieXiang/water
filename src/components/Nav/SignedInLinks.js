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
                <NavLink to={'/personalPage/' + auth.uid} className="nav-link default-link" title="go to your data dashboard" >
                Dashboard
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/logedout' className="nav-link default-link"  onClick={props.signOut} title="you will not be able to save websites or view your dashboard when logged out">Log Out
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