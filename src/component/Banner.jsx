import React, { useState, useEffect } from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import ISMRFormModal from "./forms/ISMRFormModal";

const Travel = () => {
    // 🖼️ Replace these with your actual image paths (place files in /public or /src/assets)
    const images = [
        "/IMG_7011.jpg",
        "/IMG_7331.jpg",
        "/Industry Visit @ National Paints Abu Dhabi.jpg",
        "/Industry-Visit-to-Spark-Minda-1.png",
        "/_DSC3779.jpg",
       
    ];

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

    // 🔁 Rotate background image slides
    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

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

            {/* 🖼️ Image Background Slider */}
            {images.map((src, i) => (
                <div
                    key={i}
                    className={`image-slide ${i === activeIndex ? "active" : ""}`}
                >
                    <img
                        src={src}
                        alt={`Banner slide ${i + 1}`}
                        loading={i === 0 ? "eager" : "lazy"}
                    />
                </div>
            ))}

            {/* Center Content (Fades out after 6.5s) */}
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

            {/* Navigation dots (only if multiple images) */}
            {images.length > 1 && (
                <div className="slide-navigation">
                    {images.map((_, i) => (
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
