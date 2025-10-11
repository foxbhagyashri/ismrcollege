import React from 'react'
import "./TopHeader.css";



const Topbar = () => {
    return (
        <div className="top-header-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                    {/* Left Section */}
                    <div className="col-lg-6 col-md-6">
                        <div className="top-header-left">
                            <ul>
                                <li>
                                    <a href="tel:+4599399990">
                                        <i className="ri-phone-fill"></i> +459 9393 9990
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:helloadma@gmail.com">
                                        <i className="ri-mail-line"></i> helloadma@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="col-lg-6 col-md-6">
                        <div className="top-header-right">
                            <ul>
                                <li>
                                    <a href="/faculty">Faculty</a>
                                </li>
                                <li>
                                    <a href="/community">Community</a>
                                </li>
                                <li>
                                    <a href="/login">Log in</a>
                                </li>
                                <li>
                                    <a href="/register">Register</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
