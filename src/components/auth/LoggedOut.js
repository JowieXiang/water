
import React from 'react'

import { Redirect } from 'react-router-dom'


const LoggedOut = (props) => {
    setTimeout(() => {
        props.history.push('/')
    }, 4000)
    return (
        <div className='container' >
            <div className='col-12'>
                <div className='row justify-content-center align-items-center' style={{ height: 500 }}>
                    <p >
                        You are now logged out<br />
                        redirecting back to main page...
            </p>
                </div>
            </div>
        </div>
    )
}



export default LoggedOut
