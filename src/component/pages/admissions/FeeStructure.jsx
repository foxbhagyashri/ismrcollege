import React, { useState } from "react";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import Faq from "../../Faq";
import SEO from "../../SEO";

export default function FeesStructure() {

    return (
        <div style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif" }}>
            <SEO
                title="Fee Structure | MBA, BBA & BCA Course Fees | ISMR Pune"
                description="Explore transparent course fee structures, instalment plans, and financial aid information for MBA, BBA & BCA programs at ISMR Pune."
                canonical="https://ismrpune.edu.in/admissions/fee-structure/"
            />
            {/* -------- HEADER SECTION -------- */}
            <section
                className="py-5 text-white text-center position-relative"
                style={{
                    background: "linear-gradient(135deg, #0a2240 0%, #1a4d7a 100%)",
                }}
            >
                <div
                    className="position-absolute top-0 end-0 w-100 h-100 opacity-25"
                    style={{
                        backgroundImage: `url(${allsectionbg})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                ></div>

                <div className="container position-relative py-5">
                    <h1
                        className="mb-3"
                        style={{
                            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                            fontSize: "40px",
                            fontWeight: 700,
                            color: "#ffffff",
                            margin: 0,
                        }}
                    >
                        Fees <span className="text-warning">Structure</span>
                    </h1>
                    <p
                        className="mb-0"
                        style={{
                            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                            fontSize: "15px",
                            marginTop: "0.5rem",
                            color: "#ffffff",
                        }}
                    >
                        Admissions •  <span className="text-warning">Fees Structure</span>
                    </p>
                </div>
            </section>

            {/* -------- MAIN CONTENT -------- */}
            <div className="container pb-5" style={{ marginTop: "3rem" }}>
                {/* MBA Information Section */}
                <div
                    className="rounded-3 p-4 mb-4 text-center"
                    style={{
                        backgroundColor: "#f8f9fa",
                        border: "2px solid #FFC333",
                    }}
                >
                    <h3
                        style={{
                            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                            fontSize: "20px",
                            fontWeight: "700",
                            color: "#0a2240",
                            marginBottom: "0.5rem",
                        }}
                    >
                        Fees 2026 - 2027
                    </h3>


                </div>

                <div
                    className="rounded-3 p-4 p-md-5 text-center"
                    style={{
                        backgroundColor: "#fff",
                        boxShadow: "0 8px 30px rgba(15,51,80,0.06)",
                        border: "1px solid rgba(0,0,0,0.05)"
                    }}
                >
                    <img
                        src="/WhatsApp Image 2025-12-29 at 2.24.21 PM.jpeg"
                        alt="Fees Structure"
                        className="img-fluid mx-auto d-block"
                    // normal width
                    />
                </div>

            </div>
            <Faq />
        </div>
    );
}