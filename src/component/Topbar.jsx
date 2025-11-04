import React from 'react';
import "./TopHeader.css";

const TopHeader = () => {
    return (
        <div className="top-header-area">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                {/* Left Section - Contact Info */}
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

                {/* Right Section - Links */}
                <div className="top-header-right">
                    <ul>
                        <li><a href="/faculty">Faculty</a></li>
                        <li><a href="/community">Community</a></li>
                        <li><a href="/login">Log in</a></li>
                        <li><a href="/register">Register</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
