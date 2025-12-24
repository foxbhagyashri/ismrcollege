import React, { useState } from "react";
import axios from "axios";
import allsectionbg from "../../../assets/allsectionbg.jpg";

function Applicationform() {


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const allowedTypes = [
            "image/jpeg",
            "image/png",
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];

        const maxSize = 10 * 1024 * 1024; // 10 MB

        if (!allowedTypes.includes(file.type)) {
            alert("Only JPG, PNG, PDF, and Word files are allowed.");
            e.target.value = "";
            return;
        }

        if (file.size > maxSize) {
            alert("File size must be less than 10 MB.");
            e.target.value = "";
            return;
        }

        setForm({ ...form, resume: file });
    };


    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        program: "",
        message: "",
        fromForm: "Enquiry Form",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");

    /* ================= VALIDATIONS ================= */
    const validate = () => {
        const newErrors = {};

        if (!form.name.trim()) newErrors.name = "Full name is required";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email))
            newErrors.email = "Enter a valid email address";

        if (form.phone.length !== 10)
            newErrors.phone = "Phone number must be 10 digits";

        if (!form.program)
            newErrors.program = "Please select a programme";


        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    /* ================= INPUT HANDLER ================= */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    /* ================= SUBMIT ================= */
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMsg("");

        if (!validate()) return;

        try {
            setLoading(true);

            const res = await axios.post(
                "https://api.ismrpune.edu.in/api/send-mail",
                form,
                { headers: { "Content-Type": "application/json" } }
            );

            if (res.data.success) {
                setSuccessMsg("✅ Thank you for your enquiry at ISMR Pune. Our team will get back to you soon.");
                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    city: "",
                    program: "",
                    message: "",

                });
            }
        } catch (err) {
            alert("❌ Failed to submit form. Try again.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="contact-page">




            {/* Header Section */}
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
                        Application  <span className="text-warning">Form</span>
                    </h1>
                    <p
                        className="mb-0"
                        style={{
                            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                            fontSize: "15px",
                            marginTop: "0.5rem",
                        }}
                    >
                        Application • <span className="text-warning">Form</span>
                    </p>
                </div>
            </section>

            <div className="container" style={{ paddingTop: "60px" }}>
                {/* <h1 className="page-title">How to Reach</h1> */}

                {/* Contact Cards */}


                {/* CTA Section */}
                <div className="cta-section mb-5">
                    <div className="row align-items-center">
                        <div className="col-lg-8 m-auto text-center mb-4 mb-lg-0" style={{ backgroundColor: "#00214736", padding: "30px", borderRadius: "10px" }}>
                            <h2 className="mb-5">Application Form</h2>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    className="form-control mb-2"
                                />
                                {errors.name && <small className="text-danger">{errors.name}</small>}


                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={(e) => {
                                        const nums = e.target.value.replace(/[^0-9]/g, "");
                                        if (nums.length <= 10)
                                            setForm({ ...form, phone: nums });
                                    }}
                                    placeholder="Mobile Number"
                                    className="form-control mb-2"
                                />
                                {errors.phone && <small className="text-danger">{errors.phone}</small>}

                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Email ID"
                                    className="form-control mb-2"
                                />
                                {errors.email && <small className="text-danger">{errors.email}</small>}


                                <input
                                    type="text"
                                    name="city"
                                    value={form.city}
                                    onChange={handleChange}
                                    placeholder="City"
                                    className="form-control mb-2"
                                />
                                <input
                                    type="text"
                                    name="state"
                                    value={form.state}
                                    onChange={handleChange}
                                    placeholder="State"
                                    className="form-control mb-2"
                                />


                                <select
                                    name="program"
                                    value={form.program}
                                    onChange={handleChange}
                                    className="form-control mb-2"
                                >
                                    <option value="">Position Applied For *</option>
                                    <option value="Director">Director</option>
                                    <option value="Professor">Professor</option>
                                    <option value="Associate Professor">Associate Professor</option>
                                    <option value="Assistant Professor">Assistant Professor</option>
                                    <option value="Visiting / Adjunct Faculty">Visiting / Adjunct Faculty</option>
                                    <option value="Librarian">Librarian</option>
                                    <option value="Office Superintendent">Office Superintendent</option>
                                    <option value="Admission Counsellor">Admission Counsellor</option>
                                    <option value="Accountant">Accountant</option>
                                    <option value="IT Technician">IT Technician</option>
                                    <option value="Clerk">Clerk</option>

                                </select>
                                {errors.program && (
                                    <small className="text-danger">{errors.program}</small>
                                )}


                                <input
                                    type="file"
                                    name="resume"
                                    value={form.resume}
                                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                    placeholder="resume"
                                    className="form-control mb-2"
                                />



                                <button
                                    type="submit"
                                    className="btn w-100 mt-3"
                                    disabled={loading}
                                    style={{
                                        backgroundColor: "#0a2240",
                                        color: "#fff",
                                        padding: "12px",
                                        borderRadius: "8px",
                                    }}
                                >
                                    {loading ? "Submitting..." : "Submit"}
                                </button>

                                {successMsg && (
                                    <div className="alert alert-success mt-3">{successMsg}</div>
                                )}
                            </form>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
}

export default Applicationform;
