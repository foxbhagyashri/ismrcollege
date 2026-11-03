import React from "react";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import Faq from "../../Faq";

const feesData = [
    {
        srNo: 1,
        description: "Tuition Fees for 2027 (Reserved Category)",
        firstYear: 99000,
        secondYear: 99000,
        total: 198000,
    },
    {
        srNo: 2,
        description: "Other than Maharashtra State (OMS - Students)",
        firstYear: 350000,
        secondYear: 350000,
        total: 700000,
    },
];

const formatINR = (amount) => `₹ ${amount.toLocaleString("en-IN")}`;

export default function FeesStructure() {
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
                        Admissions • <span className="text-warning">Fees Structure</span>
                    </p>
                </div>
            </section>

            {/* -------- MAIN CONTENT -------- */}
            <div className="container pb-5" style={{ marginTop: "3rem" }}>
                {/* Title box */}
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
                            marginBottom: 0,
                        }}
                    >
                        Fees Structure for 2027 MBA Batch
                    </h3>
                </div>

                {/* Fees table */}
                <div
                    className="rounded-3 bg-white overflow-hidden"
                    style={{
                        boxShadow: "0 8px 30px rgba(15,51,80,0.06)",
                        border: "1px solid rgba(0,0,0,0.05)",
                    }}
                >
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead>
                                <tr style={{ backgroundColor: "#0a2240", color: "#ffffff" }}>
                                    <th className="text-center py-3" style={{ width: "80px", backgroundColor: "#0a2240", color: "#fff" }}>
                                        Sr. No
                                    </th>
                                    <th className="py-3" style={{ backgroundColor: "#0a2240", color: "#fff" }}>
                                        Description
                                    </th>
                                    <th className="text-end py-3" style={{ backgroundColor: "#0a2240", color: "#fff" }}>
                                        Fees First Year
                                    </th>
                                    <th className="text-end py-3" style={{ backgroundColor: "#0a2240", color: "#fff" }}>
                                        Fees Second Year
                                    </th>
                                    <th className="text-end py-3" style={{ backgroundColor: "#0a2240", color: "#fff" }}>
                                        Total Fees
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {feesData.map((row) => (
                                    <tr key={row.srNo}>
                                        <td className="text-center fw-bold py-3" style={{ color: "#0a2240" }}>
                                            {row.srNo}
                                        </td>
                                        <td className="py-3">{row.description}</td>
                                        <td className="text-end py-3">{formatINR(row.firstYear)}</td>
                                        <td className="text-end py-3">{formatINR(row.secondYear)}</td>
                                        <td className="text-end fw-bold py-3" style={{ color: "#0a2240" }}>
                                            {formatINR(row.total)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </div>
    );
}