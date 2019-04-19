import React from 'react'
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'


//注意，由于SignedInLinks是一个funciton，所以要将props导入argument，才能在内部引用
const SignedInLinks = (props) => {
    return (
        <ul className='navbar-nav'>
            <li className='nav-item'><NavLink class="nav-link"  to='/logedout'><a class="nav-link" onClick={props.signOut}>Log Out</a> </NavLink></li>
            <li className='nav-item'><NavLink class="nav-link" to='/' className='btn btn-default btn-circle'>
            NN
            </NavLink> </li>
        </ul>
    )
}


const mapDispatchToProps = (dispatch)=>{
    return{
        signOut:()=> dispatch(signOut())
    }
}

export default connect(null,mapDispatchToProps)(SignedInLinks)