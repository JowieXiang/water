//this component shows websites collection of the logged-in user
import React, { Component } from 'react'

class WebsiteInfo extends Component {

    state = {
        showDetail: false
    }

    render() {
        const { siteInfo } = this.props;
        // console.log(siteInfo.savedTime);
        const toggleDetail = () => {
            console.log('showing detail');
            this.setState({
                showDetail: !this.state.showDetail
            })
        }   


        return (
            <div className="bg-white text-black" style={{padding:10,borderRadius:"5px"}}>
                <p className="" style={{float:"left"}} onClick={toggleDetail}><strong> {siteInfo.domain.split(".")[1]}</strong> </p>
                <div style={{float:"right"}}> {siteInfo.savedTime.toDate().toString()} </div>
                <div style={{clear:"both"}}></div>
                {this.state.showDetail ?
                    <div>
                        <p className="">{siteInfo.domain}</p>
                        <p className="">{siteInfo.city}, {siteInfo.country}</p>
                        <p className="">{siteInfo.latitude}, {siteInfo.longitude}</p>
                        <p className="">{siteInfo.ipAddress}</p>

                    </div>
                    :
                    null
                }
            </div>
        )
    }
}

export default WebsiteInfo