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
                <div className="col-12">
                    <br />
                </div>
                <div className="col-12" style={{ padding: 10, borderRadius: "5px" }}>
                    <div className='row'>
                        <div className="col-12 text-white" style={{ backgroundColor: "#82ca9d", borderRadius: 3 }}>
                            <p className="my-auto" style={{ float: "left" }} onClick={toggleDetail}>
                                {icons.dot}
                                <strong> {countryList[0].country}</strong>
                            </p>
                        </div>
                        <div style={{ float: "right" }}></div>
                        <div style={{ clear: "both" }}></div>
                    </div>
                    {this.state.showDetail ?
                        <div className='row justify-contents-center'>
                            {(countryList && countryList.length > 0) && countryList.map(website => {
                                return (
                                    <div className='col-2 align-self-center' style={{ height: 200, margin: 5 }}>
                                        <div class="card card-block h-200 align-items-center">
                                            <h3>Card</h3>
                                            <div className="websiteInstance">
                                                <p>{website.domain.split(".")[1].charAt(0)}</p>
                                            </div>
                                        </div>
                                        {/* <p>{website.domain.split(".",2)}</p> */}
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