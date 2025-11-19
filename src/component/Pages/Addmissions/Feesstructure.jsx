import React, { useState } from "react";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import Faq from "../../Faq";

export default function FeesStructure() {
    const [programme, setProgramme] = useState("MBA (Finance)");
    const [view, setView] = useState("annual"); // annual | semester

    const programmes = [
        {
            name: "MBA (Finance)",
            type: "Postgraduate",
            currency: "INR",
            fees: {
                annual: [
                    { label: "Tuition Fee", amount: 120000 },
                    { label: "Management & Infrastructure", amount: 10000 },
                    { label: "Exam Fee", amount: 2000 },
                    { label: "Industry Interface Fee", amount: 5000 },
                ],
                semester: [
                    { label: "Tuition Fee (per sem)", amount: 60000 },
                    { label: "Infra Fee (per sem)", amount: 5000 },
                    { label: "Exam Fee (per sem)", amount: 1000 },
                    { label: "Industry Interface Fee (per sem)", amount: 2500 },
                ],
            },
        },
        {
            name: "BCA",
            type: "Undergraduate",
            currency: "INR",
            fees: {
                annual: [
                    { label: "Tuition Fee", amount: 70000 },
                    { label: "Development & Lab Fee", amount: 7000 },
                    { label: "Library Fee", amount: 2000 },
                    { label: "Exam Fee", amount: 1500 },
                ],
                semester: [
                    { label: "Tuition Fee (per sem)", amount: 35000 },
                    { label: "Lab Fee (per sem)", amount: 3500 },
                    { label: "Library Fee (per sem)", amount: 1000 },
                    { label: "Exam Fee (per sem)", amount: 750 },
                ],
            },
        },
        {
            name: "BBA",
            type: "Undergraduate",
            currency: "INR",
            fees: {
                annual: [
                    { label: "Tuition Fee", amount: 75000 },
                    { label: "Management Fee", amount: 6000 },
                    { label: "Library Fee", amount: 2000 },
                    { label: "Exam Fee", amount: 1500 },
                ],
                semester: [
                    { label: "Tuition Fee (per sem)", amount: 37500 },
                    { label: "Management Fee (per sem)", amount: 3000 },
                    { label: "Library Fee (per sem)", amount: 1000 },
                    { label: "Exam Fee (per sem)", amount: 750 },
                ],
            },
        },
    ];

    const selected = programmes.find((p) => p.name === programme) || programmes[0];

    const currencyFormat = (n) => {
        return n.toLocaleString("en-IN", { style: "currency", currency: selected.currency, maximumFractionDigits: 0 });
    };

    const total = (items) => items.reduce((s, it) => s + it.amount, 0);

    const downloadCSV = () => {
        const rows = (view === "annual" ? selected.fees.annual : selected.fees.semester).map((r) => [r.label, r.amount]);
        const header = [["Description", "Amount"]];
        const csv = [...header, ...rows].map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${selected.name.replace(/\s+/g, "_")}_${view}_fees.csv`;
        a.click();
        URL.revokeObjectURL(url);
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
                            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                            fontSize: "40px",
                            fontWeight: 700,
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
                            marginTop: "0.5rem" 
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
                        MBA Approved by AICTE, Affiliated to Savitribai Phule Pune University, Recognized by Govt. of Maharashtra
                    </h3>
                    <p
                        style={{
                            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                            fontSize: "16px",
                            color: "#444",
                            marginBottom: "0.5rem",
                        }}
                    >
                        <strong>Institute code - MB6798 - International School of Management & Research</strong>
                    </p>
                    <p
                        style={{
                            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                            fontSize: "16px",
                            color: "#444",
                            margin: 0,
                        }}
                    >
                        Course Fee: <strong>As per Shikshan Shulka Samiti</strong>
                    </p>
                </div>

                <div 
                    className="rounded-3 p-4 p-md-5"
                    style={{
                        backgroundColor: "#fff",
                        boxShadow: "0 8px 30px rgba(15,51,80,0.06)",
                        border: "1px solid rgba(0,0,0,0.05)"
                    }}
                >
                    {/* HEADER AND CONTROLS */}
                    <div className="row align-items-center mb-4">
                        <div className="col-12 col-md-6">
                            <h2
                                style={{
                                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                                    fontSize: "28px",
                                    fontWeight: "700",
                                    color: "#0a2240",
                                    margin: 0
                                }}
                            >
                                {selected.name}
                            </h2>
                            <p
                                style={{
                                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                                    fontSize: "16px",
                                    color: "#666",
                                    margin: "0.25rem 0 0 0"
                                }}
                            >
                                {selected.type} Programme
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-flex flex-column flex-md-row gap-3 justify-content-md-end align-items-start align-items-md-center">
                                {/* PROGRAMME SELECTOR */}
                                <div className="d-flex align-items-center gap-2">
                                    <label 
                                        htmlFor="programme-select"
                                        style={{
                                            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                                            fontSize: "14px",
                                            color: "#666",
                                            fontWeight: "500"
                                        }}
                                    >
                                        Programme:
                                    </label>
                                    <select 
                                        id="programme-select" 
                                        value={programme} 
                                        onChange={(e) => setProgramme(e.target.value)}
                                        style={{
                                            padding: "8px 12px",
                                            border: "1px solid #dee2e6",
                                            borderRadius: "6px",
                                            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                                            fontSize: "14px",
                                            backgroundColor: "#fff",
                                            outline: "none"
                                        }}
                                    >
                                        {programmes.map((p) => (
                                            <option key={p.name} value={p.name}>{p.name}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* VIEW TOGGLE */}
                                <div className="btn-group" role="group" aria-label="View toggle">
                                    <button
                                        type="button"
                                        className={`btn ${view === 'annual' ? 'btn-primary' : 'btn-outline-primary'}`}
                                        onClick={() => setView('annual')}
                                        style={{
                                            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                                            fontSize: "14px",
                                            padding: "8px 16px",
                                            backgroundColor: view === 'annual' ? "#0a2240" : "transparent",
                                            color: view === 'annual' ? "#fff" : "#0a2240",
                                            border: `1px solid #0a2240`,
                                        }}
                                    >
                                        Annual
                                    </button>
                                    <button
                                        type="button"
                                        className={`btn ${view === 'semester' ? 'btn-primary' : 'btn-outline-primary'}`}
                                        onClick={() => setView('semester')}
                                        style={{
                                            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                                            fontSize: "14px",
                                            padding: "8px 16px",
                                            backgroundColor: view === 'semester' ? "#0a2240" : "transparent",
                                            color: view === 'semester' ? "#fff" : "#0a2240",
                                            border: `1px solid #0a2240`,
                                        }}
                                    >
                                        Per Semester
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FEES TABLE */}
                    <div className="table-responsive">
                        <table 
                            className="table table-hover"
                            style={{
                                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                            }}
                        >
                            <thead>
                                <tr>
                                    <th
                                        style={{
                                            backgroundColor: "#f8f9fa",
                                            color: "#0a2240",
                                            fontWeight: "600",
                                            borderBottom: "2px solid #dee2e6",
                                            padding: "12px 16px"
                                        }}
                                    >
                                        Description
                                    </th>
                                    <th
                                        style={{
                                            backgroundColor: "#f8f9fa",
                                            color: "#0a2240",
                                            fontWeight: "600",
                                            borderBottom: "2px solid #dee2e6",
                                            padding: "12px 16px",
                                            textAlign: "right",
                                            width: "200px"
                                        }}
                                    >
                                        Amount ({selected.currency})
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {(view === "annual" ? selected.fees.annual : selected.fees.semester).map((fee, index) => (
                                    <tr key={index}>
                                        <td style={{ padding: "12px 16px", borderColor: "#f0f0f0" }}>
                                            {fee.label}
                                        </td>
                                        <td style={{ padding: "12px 16px", borderColor: "#f0f0f0", textAlign: "right", fontWeight: "500" }}>
                                            {currencyFormat(fee.amount)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td 
                                        style={{ 
                                            padding: "16px", 
                                            borderColor: "#dee2e6",
                                            fontWeight: "700",
                                            fontSize: "16px",
                                            textAlign: "right",
                                            backgroundColor: "#f8f9fa"
                                        }}
                                    >
                                        Total Amount
                                    </td>
                                    <td 
                                        style={{ 
                                            padding: "16px", 
                                            borderColor: "#dee2e6",
                                            fontWeight: "700",
                                            fontSize: "16px",
                                            textAlign: "right",
                                            backgroundColor: "#f8f9fa",
                                            color: "#0a2240"
                                        }}
                                    >
                                        {currencyFormat(total(view === "annual" ? selected.fees.annual : selected.fees.semester))}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="row mt-4">
                        <div className="col-12">
                            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-between align-items-start align-items-sm-center">
                                <div
                                    className="rounded-3 p-3"
                                    style={{
                                        backgroundColor: "#FFF8E6",
                                        border: "1px solid #FFE8A3",
                                        flex: "1"
                                    }}
                                >
                                    <p
                                        style={{
                                            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                                            fontSize: "14px",
                                            color: "#664400",
                                            margin: 0,
                                            fontWeight: "500"
                                        }}
                                    >
                                        💡 <strong>Note:</strong> Fees are indicative and subject to change. Additional charges (caution deposit, hostel, uniforms) are not included above. For exact fee receipts and payment gateway links, visit the admissions portal.
                                    </p>
                                </div>
                                <div className="d-flex gap-2">
                                    <button
                                        className="btn fw-semibold"
                                        onClick={() => window.print()}
                                        style={{
                                            padding: "10px 20px",
                                            backgroundColor: "#0a2240",
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: "8px",
                                            fontSize: "14px",
                                            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                                        }}
                                    >
                                        🖨️ Print
                                    </button>
                                    <button
                                        className="btn fw-semibold"
                                        onClick={downloadCSV}
                                        style={{
                                            padding: "10px 20px",
                                            backgroundColor: "#d95c5c",
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: "8px",
                                            fontSize: "14px",
                                            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                                        }}
                                    >
                                        📥 Download CSV
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ADDITIONAL INFORMATION */}
                    <div className="row mt-5">
                        <div className="col-12">
                            <h3
                                style={{
                                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                                    fontSize: "20px",
                                    fontWeight: "600",
                                    color: "#0a2240",
                                    marginBottom: "1rem"
                                }}
                            >
                                Payment Information
                            </h3>
                            <div className="row g-4">
                                <div className="col-12 col-md-6">
                                    <div
                                        className="rounded-3 p-3 h-100"
                                        style={{
                                            backgroundColor: "#f8f9fa",
                                            borderLeft: "4px solid #FFC333"
                                        }}
                                    >
                                        <h4
                                            style={{
                                                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                                                fontSize: "16px",
                                                fontWeight: "600",
                                                color: "#0a2240",
                                                marginBottom: "0.5rem"
                                            }}
                                        >
                                            Payment Methods
                                        </h4>
                                        <ul
                                            style={{
                                                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                                                fontSize: "14px",
                                                color: "#444",
                                                margin: 0,
                                                paddingLeft: "1rem"
                                            }}
                                        >
                                            <li>Online Payment Gateway</li>
                                            <li>Bank Transfer</li>
                                            <li>Demand Draft</li>
                                            <li>Cash Payment at Campus</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div
                                        className="rounded-3 p-3 h-100"
                                        style={{
                                            backgroundColor: "#f8f9fa",
                                            borderLeft: "4px solid #d95c5c"
                                        }}
                                    >
                                        <h4
                                            style={{
                                                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                                                fontSize: "16px",
                                                fontWeight: "600",
                                                color: "#0a2240",
                                                marginBottom: "0.5rem"
                                            }}
                                        >
                                            Important Dates
                                        </h4>
                                        <ul
                                            style={{
                                                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                                                fontSize: "14px",
                                                color: "#444",
                                                margin: 0,
                                                paddingLeft: "1rem"
                                            }}
                                        >
                                            <li>First Installment: At Admission</li>
                                            <li>Second Installment: Before Semester Start</li>
                                            <li>Final Installment: Mid-Semester</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Faq />
        </div>
    );
}