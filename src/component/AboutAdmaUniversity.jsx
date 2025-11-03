import React from "react";
import "./AboutAdmaUniversity.css";

const Bullseye = () => (
    <svg viewBox="0 0 24 24" className="inline-icon" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
);

const Globe = () => (
    <svg viewBox="0 0 24 24" className="inline-icon" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 12h20M12 2v20" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4.5 6.5c2 3 5 4 7.5 4s5.5-1 7.5-4" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
);

const AboutAdmaUniversity = () => {
    return (
        <section className="about-container">
            <div className="about-left">
                <h2 className="about-title">
                    <span className="about-icon">🎓</span> About Adma University
                </h2>
                <p className="about-text">
                    At Adma, we believe in providing an exceptional educational experience
                    that prepares students for success in an ever-changing world. As a
                    leading institution of higher learning,
                </p>

                <div className="about-boxes">
                    <div className="about-box">
                        <h3><span className="icon-circle">
                            <Bullseye />
                        </span> Our Mission</h3>
                        <p>
                            We strive to provide a transformative and enriching educational
                            experience for our students & stay the best facilities.
                        </p>
                        <a href="#">University Overview →</a>
                    </div>

                    <div className="about-box">
                        <h3><span className="icon-circle">
                            <Globe />
                        </span>Our History</h3>
                        <p>
                            Diversity and inclusivity are integral to our university’s ethos.
                            We celebrate the richness of our multicultural community.
                        </p>
                        <a href="#">View Our Programs →</a>
                    </div>
                </div>
            </div>

            <div className="about-right">
                <img src="/about-2.jpg" alt="Adma University" />
            </div>
        </section>
    );
};

export default AboutAdmaUniversity;
