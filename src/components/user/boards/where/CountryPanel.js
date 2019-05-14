//this component shows websites collection of the logged-in user
import React, { Component } from 'react'
import icons from 'glyphicons'

class CountryPanel extends Component {

    state = {
        showDetail: false
    }

    render() {
        const { countryList } = this.props;
        // console.log(siteInfo.savedTime);

        const toggleDetail = () => {
            console.log('showing detail');
            this.setState({
                showDetail: !this.state.showDetail
            })
        }


        return (
            <div className='row'>

                <div className="col-12 text-white" style={{ padding: 10, borderRadius: "5px" }}>
                    <div className='row'>
                        <div className="col-12 country-panel" onClick={toggleDetail}>
                            <p className="my-auto" style={{ float: "left"}} >
                                <strong>{countryList[0].country}</strong>
                            </p>
                            <div style={{ float: "right"}}>{icons.arrowTriD}</div>
                            <div style={{ clear: "both" }}></div>
                        </div>
                    </div>
                    {this.state.showDetail ?
                        <div className='row justify-contents-center '>
                            {(countryList && countryList.length > 0) && countryList.map(website => {
                                return (
                                    <div className='col-1 justify-content-center ' style={{ height: 50, margin: 5}}>
                                        <div className="mx-auto" style={{ margin: 10 }}>
                                            <div className="websiteBtn" title={website.domain.split(".")[1]+'.'+website.domain.split(".")[2]}>
                                                <a  className="website-link"  href={"//"+website.domain}>{website.domain.split(".")[1].charAt(0)}</a>
                                            </div>
                                            {/* <p className="mx-auto">{website.domain.split(".")[1]}.{website.domain.split(".")[2]}</p> */}
                                        </div>

                                    </div>
                                )
                            }
                            )
                            }
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        )
    }
}

export default CountryPanel