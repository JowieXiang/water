//this component shows websites collection of the logged-in user
import React, { Component } from 'react'

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
                <div className="col-12">
                    <br />
                </div>
                <div className="col-12 bg-transparent text-white" style={{ padding: 10, borderRadius: "5px" }}>
                    <div className='row '>
                        <p className="" style={{ float: "left" }} onClick={toggleDetail}><strong> {countryList[0].country}</strong> </p>
                        <div style={{ float: "right" }}> </div>
                        <div style={{ clear: "both" }}></div>
                    </div>
                    {this.state.showDetail ?
                        <div className='row justify-contents-center'>
                            {(countryList && countryList.length > 0) && countryList.map(website => {
                                return (
                                    <div className='col-1 justify-contents-center'>
                                        <div className='websiteInstance'>{website.domain}</div>
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