import React from 'react'
import icons from 'glyphicons'

const BeginModal = (props) => {
    const { toggleModal } = props;
    return (
        <div className="bg-modal">
            <div className="container">
                <div className="h1_place_holder"></div>
                <div className="row justify-content-center align-items-center" style={{ height: 500 }}>
                    <div className="col-6">
                        <div className="modal-contents">
                            <h4>How to use <strong>water</strong>
                            </h4>
                            <div className="text-left">
                                <br />
                                <p>1. download the chrome extension and activate it in chrome. <br />
                                    2. go to <a href="#" style={{ color: "#82ca9d" }}>waterinternetawareness.com</a>. <br />
                                    3. sign up for a water account and you'll be automatically logged in. <br />
                                    4. click on the "show"{icons.moonFirst} button and "save"{icons.suitHearts} button at the buttom of the page to see magic happen.</p>
                            </div>
                            <button className="close" onClick={toggleModal}>x</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default BeginModal