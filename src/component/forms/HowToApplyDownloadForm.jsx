import React, { useState } from "react";
import axios from "axios";
import brochurePdf from "../../assets/ISMR Brochure 2026.pdf";

const Howtoaplydownoadform = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
    });


    /* ================= PDF DOWNLOAD ================= */
    const downloadBrochure = () => {
        const link = document.createElement("a");
        link.href = brochurePdf;
        link.download = "ISMR Brochure 2026.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");

    /* ================= VALIDATIONS ================= */
    const validate = () => {
        const newErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "Full name is required";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            newErrors.email = "Enter a valid email address";
        }

        if (!/^\d{10}$/.test(form.phone)) {
            newErrors.phone = "Phone number must be 10 digits";
        }

        if (!form.city.trim()) {
            newErrors.city = "City is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    /* ================= INPUT HANDLER ================= */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
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
                {
                    headers: { "Content-Type": "application/json" },
                }
            );

            if (res.data?.success) {
                setSuccessMsg(
                    "✅ Thank you for downloading the brochure. For any further queries, kindly reach us."
                );
                downloadBrochure();

                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    city: "",
                });

                setErrors({});
            }
        } catch (error) {
            alert("❌ Failed to submit form. Please try again.");
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
                className="form-control mb-2 mt-2"
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}

            <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                maxLength="10"
                className="form-control mb-2 mt-2"
            />
            {errors.phone && <small className="text-danger">{errors.phone}</small>}

            <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
                className="form-control mb-3 mt-2"
            />
            {errors.city && <small className="text-danger">{errors.city}</small>}

            {successMsg && (
                <div className="alert alert-success mt-3">{successMsg}</div>
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
                    fontSize: "16px",
                    fontWeight: "500",
                }}
            >
                {loading ? "Submitting..." : "Submit & Download"}
            </button>
        </form>
    );
};

export default Howtoaplydownoadform;
