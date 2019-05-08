//this component shows websites collection of the logged-in user
import React from 'react'
import WebsiteInfo from "./WebsiteInfo";
const WebsiteList = (props) => {

    const { webList } = props;

    return (
        <div className='row'>
            {webList.map(website => {
                return (
                    <div className="col-12 text-black">
                        {/* <hr style={{borderTop: "1px dashed white"}}/> */}
                        <br />
                        <WebsiteInfo siteInfo={website} />
                    </div>
                )
            })
            }
        </div>
    )
}

export default WebsiteList