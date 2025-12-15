import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
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
                setSuccessMsg("✅ Form submitted successfully!");
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
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="form-control mb-2"
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}

            <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={(e) => {
                    const nums = e.target.value.replace(/[^0-9]/g, "");
                    if (nums.length <= 10)
                        setForm({ ...form, phone: nums });
                }}
                placeholder="Phone"
                className="form-control mb-2"
            />
            {errors.phone && <small className="text-danger">{errors.phone}</small>}

            <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
                className="form-control mb-2"
            />

            <select
                name="program"
                value={form.program}
                onChange={handleChange}
                className="form-control mb-2"
            >
                <option value="">Select Programme *</option>
                <option value="MBA">MBA</option>
                <option value="BBA">BBA</option>
                <option value="BCA">BCA</option>
            </select>
            {errors.program && (
                <small className="text-danger">{errors.program}</small>
            )}

            <textarea
                name="message"
                rows="3"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your query"
                className="form-control mb-2"
            />
            {errors.message && (
                <small className="text-danger">{errors.message}</small>
            )}

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
    );
};

export default ContactForm;
