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
                <NavLink to={'/personalPage/'+auth.uid} >
                    <a class="nav-link" style={{color:"white"}}>{profile.initials}</a>
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/logedout'>
                    <a class="nav-link" style={{color:"white"}} onClick={props.signOut}>Log Out</a>
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