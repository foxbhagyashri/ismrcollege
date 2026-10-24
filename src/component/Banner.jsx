import React, { useState, useEffect } from "react";
import "./Banner.css";
import ISMRFormModal from "./forms/ISMRFormModal";

const images = [
    "/Students Ready for CLasses.JPG",
    "/Academic Award Distribution.JPG",
    "/Bus Facility for Students.JPG",
    "/Ganpati Celebration @ Campus.jpg",
    "/Independance Day Celebration.JPG",
    "/Industrial Visit @ E T N.jpg",
    "/Industrial Visit @ Renishaw.jpg",
    "/Industrial Visit To Mapro.JPG",
    "/Industry Visit @ National Paints Abu Dhabi.jpg",
    "/Sports Activity.JPG",
    "/Students @ Burj Al Arab Beach Dubai.jpg",
];

// One caption per image, same order as `images`
const bottomSlides = [
    { white: "Students Ready ", yellow: "for Classes" },
    { white: "Academic Award ", yellow: "Distribution" },
    { white: "Bus Facility ", yellow: "for Students" },
    { white: "Ganpati Celebration ", yellow: "@ Campus" },
    { white: "Independance Day ", yellow: "Celebration" },
    { white: "Industrial Visit ", yellow: "@ E T N" },
    { white: "Industrial Visit", yellow: "@ Renishaw" },
    { white: "Industrial Visit", yellow: "To Mapro" },
    { white: "Industry Visit @ National", yellow: "Paints Abu Dhabi" },
    { white: "Sports ", yellow: "Activity" },
    { white: "Students @ Burj Al Arab ", yellow: "Beach Dubai " },
];

const Travel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

    // 🔁 Rotate background image AND its caption together
    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

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

            {/* Bottom-left caption — same style for every slide, including the first two */}
            <div className="bottom-left-showcase showcase-visible">
                {bottomSlides.map((slide, index) => {
                    const isActive = index === activeIndex;
                    const isExiting =
                        index === (activeIndex - 1 + bottomSlides.length) % bottomSlides.length;
                    let statusClass = "";
                    if (isActive) statusClass = "slide-active";
                    else if (isExiting) statusClass = "slide-exiting";

                    return (
                        <h2 key={index} className={`showcase-title ${statusClass}`}>
                            <span className="text-white-part">{slide.white} </span>
                            <span className="text-yellow-part">{slide.yellow}</span>
                        </h2>
                    );
                })}
            </div>

            {/* Navigation dots */}
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
                <ISMRFormModal open={showModal} onClose={() => setShowModal(false)} />
            )}
        </section>
    );
};

export default Travel;