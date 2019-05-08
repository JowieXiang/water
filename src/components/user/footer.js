//this component shows websites collection of the logged-in user
import React from 'react'

const Footer = () => {
    return (
        <footer className="page-footer font-small blue pt-4" style={{color: "#82ca9d" ,borderTop:"1px dashed #82ca9d",marginTop:100}}>

            {/* <!-- Footer Links --> */}
            <div className="container-fluid text-center text-md-left">

                {/* <!-- Grid row --> */}
                <div className="row">

                    {/* <!-- Grid column --> */}
                    <div className="col-md-6 mt-md-0 mt-3">

                        {/* <!-- Content --> */}
                        <h5 className="text-uppercase" >Water.</h5>
                        <p>fostering Internet awareness.</p>

                    </div>
                    {/* <!-- Grid column --> */}

                    <hr className="clearfix w-100 d-md-none pb-3" />

                        {/* <!-- Grid column --> */}
                        <div className="col-md-3 mb-md-0 mb-3">

                            {/* <!-- Links --> */}
                            <h5 className="text-uppercase">Links</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!" style={{ color: "#82ca9d" }}>Link 1</a>
                                </li>
                                <li>
                                    <a href="#!" style={{ color: "#82ca9d" }}>Link 2</a>
                                </li>
                                <li>
                                    <a href="#!" style={{ color: "#82ca9d" }}style={{ color: "#82ca9d" }}style={{ color: "#82ca9d" }}>Link 3</a>
                                </li>
                                <li>
                                    <a href="#!" style={{ color: "#82ca9d" }}>Link 4</a>
                                </li>
                            </ul>

                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-3 mb-md-0 mb-3">

                            {/* <!-- Links --> */}
                            <h5 className="text-uppercase">Links</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!" style={{ color: "#82ca9d" }}style={{ color: "#82ca9d" }}>Link 1</a>
                                </li>
                                <li>
                                    <a href="#!" style={{ color: "#82ca9d" }}style={{ color: "#82ca9d" }}>Link 2</a>
                                </li>
                                <li>
                                    <a href="#!" style={{ color: "#82ca9d" }}style={{ color: "#82ca9d" }}>Link 3</a>
                                </li>
                                <li>
                                    <a href="#!" style={{ color: "#82ca9d" }}style={{ color: "#82ca9d" }}>Link 4</a>
                                </li>
                            </ul>

                        </div>
                        {/* <!-- Grid column --> */}

  </div>
                    {/* <!-- Grid row --> */}

                </div>
                {/* <!-- Footer Links --> */}

                {/* <!-- Copyright --> */}
                <div className="footer-copyright text-center py-3"> Copyright ©
  <a href="//zhangzhangzhang.space" style={{ color: "#82ca9d" }}> Zhang Yuxiang & Zhao Jiaxi </a>
                </div>
                {/* <!-- Copyright --> */}

</footer>
            )
        }
        
export default Footer