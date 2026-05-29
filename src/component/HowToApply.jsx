import React from "react";
import "./HowToApply.css";
import { FaRegEdit, FaUserFriends, FaCheckCircle, FaGraduationCap } from "react-icons/fa";

const HowToApply = () => {
    return (
        <section className="apply-section">
            <div className="apply-inner">
                <div className="section-header">
                    <h1 className="section-title mb-5 text-center">How To Apply</h1>
                </div>
                <div className="apply-container">

                    <article className="apply-box">
                        <div className="apply-icon"><FaRegEdit /></div>
                        <span className="apply-step">01</span>
                        <h3 className="apply-heading">Apply Online</h3>
                        <p className="apply-text">
                            Visit the official website, click on “Apply Online,” fill out the institute’s application form, and pay the registration fee of ₹ 1100 /-.
                        </p>
                    </article>

                    <article className="apply-box">
                        <div className="apply-icon"><FaUserFriends /></div>
                        <span className="apply-step">02</span>
                        <h3 className="apply-heading">Counselling & Telephonic Interview</h3>
                        <p className="apply-text">
                            Once the form is submitted, the admission cell initiates the counselling process followed by an telephonic interview session.
                        </p>
                    </article>

                    <article className="apply-box">
                        <div className="apply-icon"><FaCheckCircle /></div>
                        <span className="apply-step">03</span>
                        <h3 className="apply-heading">Seat Confirmation</h3>
                        <p className="apply-text">
                            After the telephonic interview, selected candidates will receive the Admission Letter via email. To confirm their seat, you must pay Rs. 30,000/- within four days of receiving the Admission Letter.
                        </p>
                    </article>

                    <article className="apply-box">
                        <div className="apply-icon"><FaGraduationCap /></div>
                        <span className="apply-step">04</span>
                        <h3 className="apply-heading"> Provisional Admission</h3>
                        <p className="apply-text">
                            After the seat confirmation , your admission is provisionally confirmed subject to fulfilment of all the required documents.
                        </p>
                    </article>

                </div>

            </div>
        </section>
    );
};

export default HowToApply;
