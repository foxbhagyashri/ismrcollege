import React, { useState } from "react";
import allsectionbg from "../../../assets/allsectionbg.jpg"; // update path based on your project

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What documents are required during admission?",
      answer: "You need:  •	10th & 12th mark sheets , •	Graduation mark sheets (if applicable) , •	Entrance exam scorecard , •	ID & address proof , •	Passport-size photographs(Additional documents may be requested based on your profile.). For more details, please click on the link give - "

    },

    {
      question: "How do I know my admission is confirmed?",
      answer: "Your admission is confirmed only after: •	Submission of required documents , • Payment of the registration fee , • Receiving an official confirmation email from the institute."
    },
    {
      question: "What are the fee payment options?",
      answer: "You can pay fees through Debit Card, Credit Card, UPI etc."
    },
    {
      question: "Are scholarships available?",
      answer: "Yes. ISMR offers merit-based scholarships based on entrance exam scores, academic performance, and special categories."
    },
    {
      question: "What about placements at ISMR?",
      answer: "ISMR has a strong placement record with top companies visiting every year."
    },
    {
      question: "What companies visit ISMR for placements?",
      answer: "Reputed companies from IT, BFSI, manufacturing, retail, consulting, FMCG, and analytics sectors regularly visit the campus."
    },
    {
      question: "Is internship/industry exposure provided?",
      answer: "Yes. Students undergo On-Job-Training, workshops, corporate guest sessions, Field Project and industrial visits."
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
      question: "What is the campus environment like?",
      answer: "The ISMR campus offers a modern, industry-oriented learning environment with classrooms, labs, seminar halls, library, recreational facilities etc."
    },
    {
      question: "What is syllabus of MBA?",
      answer: "We follow the syllabus prescribed by SavitribaiPhule Pune University. It is according to NEP 2020 recommendations. For more details, please click on the given link."
    },
    {
      question: "Is there any value addition apart from the syllabus?",
      answer: "Yes. We provide value added courses with certifications throughout 4 semesters"
    },
    {
      question: "Are MOOCs available?",
      answer: "Yes. ISMR has recognized chapter on NPTEL for MOOCs."
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
      answer: "Yes, separate and secured boys’ and girls’ hostel facilities are available with mess, Wi-Fi, and other essential amenities."
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
      answer: "You can reach us at: 📩admissions@ismrpune.edu.in , 📞 Institute phone number - 9923786079 Or visit the campus during working hours 9AM – 6 PM"
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
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
            <span className="text-warning">FAQ's</span>
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
              <p style={{ marginTop: "10px", lineHeight: "1.6" }}>
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
