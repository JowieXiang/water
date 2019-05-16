
import React from 'react'

import { Redirect } from 'react-router-dom'


const LoggedOut = (props) => {
    setTimeout(() => {
        props.history.push('/')
    }, 2000)
    return (
        <div className='container' >
            <div className='col-12'>
                <div className='row justify-content-center align-items-center green' style={{ height: 500 }}>
                    <h5 >
                        You are now logged out<br />
                        redirecting back to main page...
            </h5>
                </div>
            </div>
        </div>
    )
}



export default LoggedOut
