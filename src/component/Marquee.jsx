import React from 'react';
import "./Marquee.css";

const Marquee = () => {
    const imageSrc = "/banner-wrap-1.png";

    return (
        <div className="marquee-container">
            <div className="marquee-content">
                {[...Array(6)].map((_, index) => (
                    <img
                        key={index}
                        src={imageSrc}
                        alt={`banner-${index}`}
                        className="me-2"
                    />
                ))}
            </div>
        </div>
    );
};

export default Marquee;
