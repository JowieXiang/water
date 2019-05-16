import React, { Component } from 'react'
import icons from 'glyphicons'
import { Link } from 'react-router-dom'
import Footer from '../footer/footer'


class PersonalPage extends Component {


    render() {

        return (
            <div className="container" style={{ color: "#82ca9d" }}>
                <div className='h1_place_holder'>
                </div>
                <div className='h1_place_holder'>
                </div>
                <div className="row justify-content-center">
                    <div className="col-8">
                        <div className="row text-left" style={{ verticalAlign: "text-bottom" }}>
                            <h4>Water - fostering Internet awareness</h4>
                        </div>
                        <div className="text-left">
                            <br />
                            <br />
                            <div className="row">
                                <h5>What is Water?</h5>
                                <br />
                                <br />
                            </div>
                            <div className="row">
                                <div className="col-10 offset-1">
                                    <p>'Water' is a web application aiming to reveal the physical layer of the World Wide Web to its users.
                                        The app provides a geo-localizing function which allows the users to look up websites' hosting servers across the globe.</p>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <h5>How to use Water?</h5>
                                <br />
                                <br />
                            </div>
                            <div className="row">
                                <div className="col-10 offset-1">
                                    <p>
                                        1. Download the <strong><a className="default-link" href="#">Water Chrome extension</a></strong> and activate it in Chrome.
                                        <br />
                                        <br />
                                        2. <strong><Link className="default-link" to='/signup'>Sign up</Link></strong> for a Water account.
                                        <br />
                                        <br />
                                        3. Open a few websites in new tabs of your current browser window.
                                        <br />
                                        <br />
                                        4. Click on the "save"  <button className="save-btn">{icons.suitHearts}</button>  button on <strong><Link className="default-link" to='/'>the map page</Link></strong> to look up your websites' server location.
                                         <br />
                                        <br />
                                        5. Click on <strong>Dashboard</strong> at the top-right of the page to view your statistics.

                                        </p>
                                </div>
                            </div>
                            <br />
                            {/* <div className="row">
                                <h5>About the creator</h5>
                                <br />
                                <br />
                            </div>
                            <div className="row">
                                <div className="col-10 offset-1">
                                    <p>
                                       
                                        <br />
                                        <br />
                                    </p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default PersonalPage



