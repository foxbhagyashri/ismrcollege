import React, { useState } from "react";
import allsectionbg from "../../../assets/allsectionbg.jpg"; // update path based on your project
import { Link } from "react-router-dom";
import ContactForm from "../../form/ContactForm";
import SEO from "../../SEO";

export default function FAQBba() {



    const [openIndex, setOpenIndex] = useState(null);



    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: "",
        program: "",
    });


    const [showModal, setShowModal] = useState(false);

    const faqs = [
        {
            question: "What courses does ISMR Pune offer?",
            answer: `ISMR offers a full-time SPPU Affiliated MBA, BBA & BCA program with specializations in Marketing, Finance, Human Resource, Business Analytics, Operations & Supply Chain, Agri-Business Management & Pharma Health Care Management.`

        },

        {
            question: "Is the MBA, BBA & BCA program at ISMR affiliated?",
            answer: "Yes. The MBA, BBA, & BCA programs are affiliated with SavitribaiPhule Pune University (SPPU)."
        },
        {
            question: "Is the MBA, BBA & BCA program at ISMR approved?",
            answer: "Yes. The MBA, BBA & BCA programs areapproved by AICTE, New Delhi."
        },
        {
            question: "What is the eligibility Criteria for BBA/BCA Program?",
            answer: "• The candidate should have passed 10+2 examination with eligibility as per the Admission Policy of the Affiliating University. •	A valid score card in state-level entrance tests like MAH-BBA/BCA"
        },
        {
            question: "Which entrance exams are accepted for BBA/BCA Program ?",
            answer: "MAH-CET entrance exam score is accepted."
        },
        {
            question: "What is the campus environment like?",
            answer: "The ISMR campus offers a modern, industry-oriented learning environment with classrooms, labs, seminar hall, library, recreational facilities, conference room etc."
        },
        {
            id: "apply",
            question: "How to apply for admission?",
            answer: "You can apply online only through the ISMR website. Or click on the following link-"
        },
        {
            question: "What documents are required during BBA/BCA admission?",
            answer: "Documents Required : </br>  •	10th & 12th mark sheets,</br> •	Entrance exam scorecard,</br> •	Aadhaar Card, </br> • 10 Passport size photographs </br>"
        },
        {
            question: "How do I know my admission is confirmed?",
            answer: "Your admission is confirmed only after: </br> • Submission of required documents </br> • Payment of the registration fee </br> • Receiving an official confirmation email from the institute."
        },
        {
            question: "What are the fee payment options?",
            answer: "You can pay fees through Debit Card, Credit Card, UPI, NetBanking etc."
        },
        {
            question: "Are scholarships available?",
            answer: "Yes. ISMR offers merit-based scholarships based on academic performance."
        },
        {
            question: "What about placements at ISMR?",
            answer: "ISMR offers 100% Placement Assistance with top noch companies."
        },
        {
            question: "What companies visit ISMR for placements?",
            answer: "Reputed companies like Bajaj Finserv, Syntel, Eureka Forbes, Bank of Maharashtra, Tech Mahindra, XDBS, EXL, Amdocs and many more regularly visit the campus."
        },
        {
            question: "Is internship/industry exposure provided?",
            answer: "Yes. Students undergo On-Job-Training, workshops, corporate guest sessions, field project and industrial visits."
        },
        {
            question: "Are students required to complete internships?",
            answer: "Yes, internships are a mandatory part of the MBA curriculum to gain real corporate exposure."
        },
        {
            question: "Does ISMR provide educational loan assistance?",
            answer: "Yes. The institute provides full support with loan-related documents for easy processing through major banks."
        },
        {
            question: "What is syllabus of BBA/BCA?",
            answer: "We follow the syllabus prescribed by SavitribaiPhule Pune University."
        },
        {
            question: "Is there any value addition apart from the syllabus?",
            answer: "Yes. We provide value added courses with certifications throughout the semesters."
        },
        {
            question: "Are MOOCs available?",
            answer: "Yes. ISMR has recognized chapter of NPTEL on SWAYAM platform for MOOCs."
        },
        {
            question: "What are the facilities in Library?",
            answer: "Latest collection of Books, Journals, Periodicals are available backed by online resources. It has a well-lit, well-ventilated and comfortable reading room."
        },

        {
            question: "How are the faculties of ISMR?",
            answer: "ISMR has well – qualified and experienced faculties in every specialisation."
        },
        {
            question: "How does ISMR prepare students for examinations?",
            answer: "Faculties of ISMR provide regular sessions, doubt-clearing sessions, question bank, study material etc to prepare the students for examinations."
        },
        {
            question: "Does ISMR provide hostel facilities?",
            answer: "Yes, separate and secured boys’ and girls’ hostel facilities are available with mess, Wi-Fi, and other essential amenities outside the campus."
        },
        {
            question: "What are the sports facilities available in the campus?",
            answer: "Indoor and Outdoor sports facilities are available in the campus."
        },
        {
            question: "Does ISMR has a canteen facility?",
            answer: "Yes — ISMR has a canteen / cafeteria on campus for staff and students."
        },
        {
            question: "Does ISMR offers transport facility?",
            answer: "Yes, we offer transport facility to all students."
        },
        {
            question: "Can I cancel my admission?",
            answer: "Yes. Admission cancellation and refund requests must be emailed to admissions@ismrpune.edu.in before the CET Cell deadline."
        },
        {
            question: "How can I contact ISMR for queries?",
            answer: "You can reach us at:</br>📩admissions@ismrpune.edu.in</br>📞 Institute phone number - 9923786079</br>Or visit the campus during working hours 9AM – 6 PM from Monday to Saturday"
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    <style>{`
       .apply-now-btnn {
    background: #930512 !important;
    border: none !important;
    padding: 10px 18px !important;
    border-radius: 9px !important;
    color: white !important;
    font-weight: 600;
    cursor: pointer;
}

.apply-now-btnn:hover {
    background: linear-gradient(90deg, #ffb347, #ff7a18) !important;
    transform: rotate(0deg) !important;
}


        `}
    </style>



    return (
        <>
            <SEO
                title="BBA & BCA Admissions FAQ | ISMR Pune"
                description="Explore frequently asked questions on undergraduate BBA and BCA admissions, syllabus, fee structure, and eligibility at ISMR Pune."
                canonical="https://ismrpune.edu.in/admissions/fee-structure/"
            />




            {/* ---------- PAGE HEADING + BREADCRUMB SECTION ---------- */}
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
                            margin: 0,
                        }}
                    >
                        <span className="text-warning">FAQ's For BBA & BCA</span>
                    </h1>
                    <p
                        className="mb-0"
                        style={{
                            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                            fontSize: "15px",
                            marginTop: "0.5rem",
                        }}
                    >
                        Admissions • <span className="text-warning">FAQ's</span>
                    </p>
                </div>
            </section>

            <div className="container py-5">


                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        style={{
                            background: "#f8f8f8",
                            marginBottom: "12px",
                            borderRadius: "8px",
                            padding: "15px",
                            cursor: "pointer",
                            transition: "0.3s",
                        }}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div
                            style={{
                                fontSize: "18px",
                                fontWeight: "600",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            {faq.question}
                            <span style={{ fontSize: "20px" }}>
                                {openIndex === index ? "−" : "+"}
                            </span>
                        </div>

                        <div
                            style={{
                                maxHeight: openIndex === index ? "200px" : "0px",
                                overflow: "hidden",
                                transition: "max-height 0.4s ease",
                            }}
                        >
                            <p
                                style={{ marginTop: "10px", lineHeight: "1.6" }}
                                dangerouslySetInnerHTML={{ __html: faq.answer }}
                            ></p>

                            {/* Show button ONLY for Apply FAQ */}
                            {faq.id === "apply" && (
                                <button
                                    className="apply-now-btnn"
                                    onClick={() => setShowModal(true)}
                                >
                                    Apply Now
                                </button>
                            )}



                            {/* -------- FORM MODAL -------- */}
                            {showModal && (
                                <div
                                    className="modal-backdrop"
                                    style={{
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        backgroundColor: "rgba(0,0,0,0.6)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        zIndex: 9999,
                                    }}
                                >
                                    <div
                                        className="modal-content rounded-3 p-4"
                                        style={{
                                            backgroundColor: "#fff",
                                            maxWidth: "500px",
                                            width: "90%",
                                        }}
                                    >
                                        <h4 style={{ color: "#0a2240", marginBottom: "1rem" }}>
                                            Enquiry Form
                                        </h4>
                                        <ContactForm />

                                        <button
                                            onClick={() => setShowModal(false)}
                                            style={{
                                                marginTop: "10px",
                                                background: "transparent",
                                                border: "none",
                                                color: "#d95c5c",
                                                cursor: "pointer",
                                            }}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
