import React, { useState, useEffect } from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Travel = () => {
    const videos = ["hC3H64UZGA8"]; // YouTube Video ID

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % videos.length);
        }, 7000);
        return () => clearInterval(timer);
    }, [videos.length]);

    return (
        <section className="home">

            {/* 🎥 YouTube Background */}
            {videos.map((id, i) => (
                <div
                    key={i}
                    className={`video-slide ${i === activeIndex ? "active" : ""}`}
                >
                    <iframe
                        src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&playsinline=1`}
                        title="YouTube video"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    ></iframe>
                </div>
            ))}

            {/* Content */}
            <div className="content">
                <div className="title">
                    <p style={{ color: "#ffffff", fontWeight: 600 }}>Sri Balaji Education Society's</p>

                    <h1>
                        INTERNATIONAL SCHOOL OF <br />
                        MANAGEMENT AND RESEARCH
                    </h1>

                    <Link to="/Aboutpage/Aboutinstutue">Read more</Link>
                </div>
            </div>

            {/* Navigation */}
            <div className="slide-navigation">
                {videos.map((_, i) => (
                    <div
                        key={i}
                        className={`nav-btn ${i === activeIndex ? "active" : ""}`}
                        onClick={() => setActiveIndex(i)}
                    ></div>
                ))}
            </div>
        </section>
    );
};

export default Travel;