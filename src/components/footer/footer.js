//this component shows websites collection of the logged-in user
import React from 'react'

const Footer = () => {
    return (
        <footer className="page-footer font-small blue pt-4" style={{ color: "#82ca9d", borderTop: "1px dashed #82ca9d", marginTop: 100 }}>


            <div className="container-fluid text-center text-md-left">


                <div className="row">


                    <div className="col-md-6 mt-md-0 mt-3">

                        <h5 className="text-uppercase" >Water.</h5>
                        <p >fostering Internet awareness.</p>

                    </div>


                    <hr className="clearfix w-100 d-md-none pb-3" />


                    <div className="col-md-3 mb-md-0 mb-3">

                        <h5 className="text-uppercase"></h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" style={{ color: "#82ca9d" }}></a>
                            </li>
                            <li>
                                <a href="#!" style={{ color: "#82ca9d" }}></a>
                            </li>
                            <li>
                                <a href="#!" style={{ color: "#82ca9d" }} style={{ color: "#82ca9d" }} style={{ color: "#82ca9d" }}></a>
                            </li>
                            <li>
                                <a href="#!" style={{ color: "#82ca9d" }}></a>
                            </li>
                        </ul>

                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">

                        {/* <!-- Links --> */}
                        <h5 className="text-uppercase"></h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" style={{ color: "#82ca9d" }} style={{ color: "#82ca9d" }}></a>
                            </li>
                            <li>
                                <a href="#!" style={{ color: "#82ca9d" }} style={{ color: "#82ca9d" }}></a>
                            </li>
                            <li>
                                <a href="#!" style={{ color: "#82ca9d" }} style={{ color: "#82ca9d" }}></a>
                            </li>
                            <li>
                                <a href="#!" style={{ color: "#82ca9d" }} style={{ color: "#82ca9d" }}></a>
                            </li>
                        </ul>

                    </div>


                </div>


            </div>

            <div className="footer-copyright text-center py-3"> Copyright ©
  <a href="//zhangzhangzhang.space" style={{ color: "#82ca9d" }}> Zhang Yuxiang & Zhao Jiaxi </a>
            </div>


        </footer>
    )
}

export default Footer