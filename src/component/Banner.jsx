import React from 'react'
import "./banner.css";

const Banner = () => {
    return (
        <div>
            <div className="banner-wrap-area">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="banner-wrap-image">
                                <img src="/banner-wrap-1.png" alt="banner-wrap-image"></img>
                                <div className="image-2">
                                    <img src="/banner-wrap-city.png" alt="banner-wrap"></img>
                                    <div className="middle-img">
                                        <img src="/banner-wrap-city-2.png" alt="banner-wrap"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-wrap-content">
                                <div className="title">
                                    <p>The Best University In The NY City Since <span>1996</span></p>
                                    <h1>Build Your Career At Adma</h1>
                                    <p>We are a Top 06 Canadian university and one of the Top 120 in the world. Find out what
                                        makes our student experience so rich.</p>
                                </div>
                                <ul className="list-unstyled ps-0 mb-0 d-flex align-items-center btn-list">
                                    <li className="d-inline-block">
                                        <a className="text-decoration-none default-btn" href="university-overview.html">
                                            University Overview
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </li>
                                    <li className="d-inline-block">
                                        <ul className="list-unstyled d-flex align-items-center ps-0 mb-0 play-btn">
                                            <li>
                                                <a className="text-decoration-none icon" data-fslightbox="gallery"
                                                    href="https://www.youtube.com/watch?v=3nQNiWdeH2Q">
                                                    <i className="ri-play-mini-fill"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-decoration-none arrow-btn" data-fslightbox="gallery"
                                                    href="https://www.youtube.com/watch?v=3nQNiWdeH2Q">
                                                    See How To Apply
                                                    <i className="flaticon-right-arrow"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="list-unstyled ps-0 mb-0 d-flex align-items-center user-list">
                                    <li>
                                        <ul className="list-unstyled ps-0 mb-0 d-flex align-items-center image">
                                            <li>
                                                <img src="/hero-user-1.jpg" alt="hero-user"></img>
                                            </li>
                                            <li>
                                                <img src="/hero-user-2.jpg" alt="hero-user"></img>
                                            </li>
                                            <li>
                                                <img src="/hero-user-3.jpg" alt="hero-user"></img>
                                            </li>
                                            <li>
                                                <img src="/hero-user-4.jpg" alt="hero-user"></img>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h2><span className="counter">90859</span>+</h2>
                                        <p>Student around in the world</p>
                                    </li>
                                </ul>
                                <div className="content-shape">
                                    <img src="/banner-wrap-city-3.png" alt="banner-wrap-shape"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
