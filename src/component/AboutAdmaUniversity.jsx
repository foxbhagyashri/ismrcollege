import React from "react";
import "./AboutAdmaUniversity.css";

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
                        <h3>Our Mission</h3>
                        <p>
                            We strive to provide a transformative and enriching educational
                            experience for our students & stay the best facilities.
                        </p>
                        <a href="#">University Overview →</a>
                    </div>

                    <div className="about-box">
                        <h3>Our History</h3>
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
