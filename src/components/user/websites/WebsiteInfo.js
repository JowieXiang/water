//this component shows websites collection of the logged-in user
import React, { Component } from 'react'

class WebsiteInfo extends Component {

    state = {
        showDetail: false
    }

    render() {
        const { siteInfo } = this.props;
        const toggleDetail = () => {
            console.log('showing detail');
            this.setState({
                showDetail: !this.state.showDetail
            })
        }

        return (
            <div className="">
                <h5 className="" onClick={toggleDetail}>· {siteInfo.domain}</h5>
                {this.state.showDetail ?
                    <div>
                        <p className="">{siteInfo.city}, {siteInfo.country}</p>
                        <p className="">{siteInfo.latitude}, {siteInfo.longitude}</p>
                        <p className=""></p>
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}

export default WebsiteInfo