import React from 'react'
import {connect} from 'react-redux'

const PersonalProfile =(props)=> {
        return (
            <div>
                <div className='row'>
                    <h2>profile.</h2>
                </div>
                <div className='row'>
                    <div className='userPhoto'>
                    </div>
                </div>
                <div className='row'>
                    <div className='text-left userProfile'>
                    <p>{props.profile}</p>
                    </div>
                </div>
            </div>
        );
}

//这里的state指的是reducer里面的state
const mapStatetoProps=(state)=>{
    return{
        photo:state.photo,
        profile:state.profile
    }
}

export default connect(mapStatetoProps)(PersonalProfile)