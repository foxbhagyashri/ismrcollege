import React from "react";
import "./HowToApply.css";
import { FaFileAlt, FaSearch, FaDollarSign } from "react-icons/fa";

const HowToApply = () => {
    return (
        <section className="apply-section">
            <div className="apply-inner">
              
                <h1 className="section-title mb-5 text-center">How To Apply</h1>


                <div className="apply-container">
                    <article className="apply-box">
                        <div className="apply-icon"><FaFileAlt /></div>
                        <span className="apply-step">01</span>
                        <h3 className="apply-heading">Complete Application Form</h3>
                        <p className="apply-text">
                            Furthermore, our university campus provides a vibrant & supportive
                            community that embraces diversity.
                        </p>
                    </article>

                    <article className="apply-box">
                        <div className="apply-icon"><FaSearch /></div>
                        <span className="apply-step">02</span>
                        <h3 className="apply-heading">Application Review</h3>
                        <p className="apply-text">
                            We believe that a diverse student body enhances learning
                            experience & prepares students to thrive in a globalized world.
                        </p>
                    </article>

                    <article className="apply-box">
                        <div className="apply-icon"><FaDollarSign /></div>
                        <span className="apply-step">03</span>
                        <h3 className="apply-heading">Payment of Fees</h3>
                        <p className="apply-text">
                            As a student at Adma, you will have access to state-of-the-art
                            facilities and research laboratories.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default HowToApply;
