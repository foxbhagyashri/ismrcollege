import React, { useState } from "react";
import allsectionbg from "../assets/allsectionbg.jpg";


export default function ApplyMba() {

    const [openIndex, setOpenIndex] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        city: "",
        program: "",
        message: "",
    });

    // 🔥 FIXED FUNCTIONS
    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);

        alert("Form submitted successfully!");

        setFormData({
            name: "",
            phone: "",
            email: "",
            city: "",
            program: "",
            message: "",
        });
    };

    return (
        <div style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif" }}>

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
                            fontSize: "40px",
                            fontWeight: 700,
                            margin: 0,
                        }}
                    >
                        Apply for <span className="text-warning">MBA</span>
                    </h1>

                    <p
                        className="mb-0"
                        style={{
                            fontSize: "15px",
                            marginTop: "0.5rem",
                        }}
                    >
                        Admissions • <span className="text-warning">Apply for MBA</span>
                    </p>
                </div>
            </section>

            {/* -------- MAIN REFUND POLICY SECTION -------- */}
            <section className="refund-policy">
                <style>{`
        .refund-policy {
          font-family: 'Inter', Arial, Helvetica, sans-serif;
          color: #0f2b44;
          background: #f8f9fa;
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
          margin: 50px auto;
          padding: 0 40px;
        }

        /* FORM UI */
        .contact-form {
          background: #ffffff;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }

        .contact-form h2 {
          font-size: 28px;
          font-weight: 700;
          color: #0f3350;
          margin-bottom: 10px;
        }

        .form-row {
          display: flex;
          gap: 15px;
        }

        input, select, textarea {
          width: 100%;
          padding: 14px;
          font-size: 1rem;
          margin-bottom: 15px;
          border-radius: 8px;
          border: 1px solid #d0d7de;
          outline: none;
        }

        textarea {
          height: 120px;
        }

        .btn-row {
          margin-top: 10px;
        }

        .btn-primary {
          background: #ff3a4e;
          color: #fff;
          padding: 12px 30px;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: 0.3s;
        }

        .btn-primary:hover {
          background: #e03547;
        }

        @media(max-width:768px){
          .form-row {
            flex-direction: column;
          }
        }
        `}</style>

                <div className="container">
                    {/* ---- FORM ---- */}
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10">
                            <div className="contact-form">
                                <h2 className="text-center mb-5">Apply for MBA Programme 2026</h2>

                                <form onSubmit={handleSubmit}>

                                    <div className="form-row">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Full Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />

                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone Number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />

                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="hidden"
                                        name="program"
                                        placeholder="City"
                                        value={formData.MBA}
                                        onChange={handleChange}
                                        required
                                    />

                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Category *</option>
                                        <option value="SC/ST">SC/ST</option>
                                        <option value="OPEN">OPEN</option>
                                        <option value="OBC/EBC/EWS">OBC/EBC/EWS</option>
                                        <option value="VJ-DT/NT/SEBC">VJ-DT/NT/SEBC</option>
                                        <option value="TFWS">TFWS</option>
                                        <option value="OTHER">OTHER</option>
                                    </select>

                                    <textarea
                                        name="message"
                                        placeholder="Please write your query here"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>

                                    <div className="btn-row">
                                        <button type="submit" className="btn-primary">Submit</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}
