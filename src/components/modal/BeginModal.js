import React from 'react'

const BeginModal = (props) => {
    const {toggleModal}=props;
    return (
        <div className="bg-modal">
            <div className="container">
                <div className="h1_place_holder"></div>
                <div className="row justify-content-center align-items-center" style={{ height: 500 }}>
                    <div className="col-6">
                        <div className="modal-contents">
                            <h2>NEW TO THE APP?</h2>
                            <div className="text-left">
                                <p>Please follow the processes:</p>
                                <p>1.download the chrome extension <br />
                                2.</p>
                            </div>
                            <div>
                                <a href="#">Don't want this to show again?</a>
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