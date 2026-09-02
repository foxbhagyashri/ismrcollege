import React, { useState, useEffect } from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import ISMRFormModal from "./forms/ISMRFormModal";

const Travel = () => {
    const videos = ["hC3H64UZGA8"]; // YouTube Video ID

    const [activeIndex, setActiveIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [bottomSlideIndex, setBottomSlideIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const bottomSlides = [
        { white: "Skill-Based", yellow: "Curriculum" },
        { white: "Best Placement", yellow: "Assistance" },
        { white: "Industry-Driven", yellow: "Excellence" },
        { white: "Global Immersion &", yellow: "Certifications" },
        { white: "AICTE Approved &", yellow: "SPPU Affiliated" }
    ];

    useEffect(() => {
        if (videos.length <= 1) return;
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % videos.length);
        }, 7000);
        return () => clearInterval(timer);
    }, [videos.length]);

    useEffect(() => {
        // Center text stays visible before fading out
        const hideTimer = setTimeout(() => {
            setIsVisible(false);
        }, 6500);
        return () => clearTimeout(hideTimer);
    }, []);

    useEffect(() => {
        if (isVisible) return;
        // Each bottom-left sliding sentence stays
        const slideTimer = setInterval(() => {
            setBottomSlideIndex((prev) => (prev + 1) % bottomSlides.length);
        }, 5000);
        return () => clearInterval(slideTimer);
    }, [isVisible, bottomSlides.length]);

    return (
        <section className="home">

            {/* 🎥 YouTube Background - Continuous Loop */}
            {videos.map((id, i) => (
                <div
                    key={i}
                    className="video-slide active"
                >
                    <iframe
                        src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&disablekb=1&fs=0&rel=0&iv_load_policy=3&cc_load_policy=0&modestbranding=1&playsinline=1`}
                        title="YouTube video"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    ></iframe>
                </div>
            ))}

            {/* Center Content (Fades out after 2s) */}
            <div className={`content ${!isVisible ? "content-hidden" : ""}`}>
                <div className="title">
                    <p style={{ color: "#ffffff", fontWeight: 600 }}>Sri Balaji Education Society's</p>

                    <h1>
                        INTERNATIONAL SCHOOL OF <br />
                        MANAGEMENT AND RESEARCH
                    </h1>

                    <div className="banner-cta-group">
                        <button
                            type="button"
                            className="banner-apply-btn"
                            onClick={() => setShowModal(true)}
                        >
                            Apply Now
                        </button>
                        <Link to="/about-us" className="banner-readmore-btn">
                            Read more
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom-left Sliding Showcase (Appears after center text hides) */}
            <div className={`bottom-left-showcase ${!isVisible ? "showcase-visible" : ""}`}>
                {bottomSlides.map((slide, index) => {
                    const isActive = index === bottomSlideIndex;
                    const isExiting = index === (bottomSlideIndex - 1 + bottomSlides.length) % bottomSlides.length;
                    let statusClass = "";
                    if (isActive) statusClass = "slide-active";
                    else if (isExiting) statusClass = "slide-exiting";

                    return (
                        <h2
                            key={index}
                            className={`showcase-title ${statusClass}`}
                        >
                            <span className="text-white-part">{slide.white} </span>
                            <span className="text-yellow-part">{slide.yellow}</span>
                        </h2>
                    );
                })}
            </div>

            {/* Navigation (only if multiple videos) */}
            {videos.length > 1 && (
                <div className="slide-navigation">
                    {videos.map((_, i) => (
                        <div
                            key={i}
                            className={`nav-btn ${i === activeIndex ? "active" : ""}`}
                            onClick={() => setActiveIndex(i)}
                        ></div>
                    ))}
                </div>
            )}

            {/* Form Modal */}
            {showModal && (
                <ISMRFormModal
                    open={showModal}
                    onClose={() => setShowModal(false)}
                />
            )}
        </section>
    );
};

export default Travel;