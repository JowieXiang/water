import React from 'react'


const PersonalProfile =(props)=> {
    const {profile}=props.profile;   
    console.log(props); 
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
                    <p>{profile}</p>
                    </div>
                </div>
            </div>
        );
}



export default PersonalProfile