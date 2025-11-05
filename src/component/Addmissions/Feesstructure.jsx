import React, { useState } from "react";

export default function FeesStructure() {
    const [programme, setProgramme] = useState("B.Sc Computer Science");
    const [view, setView] = useState("annual"); // annual | per-semester

    const programmes = [
        {
            name: "B.Sc Computer Science",
            type: "Undergraduate",
            currency: "INR",
            fees: {
                annual: [
                    { label: "Tuition Fee", amount: 80000 },
                    { label: "Development & Lab Fee", amount: 8000 },
                    { label: "Library Fee", amount: 2000 },
                    { label: "Exam Fee", amount: 1500 },
                ],
                semester: [
                    { label: "Tuition Fee (per sem)", amount: 40000 },
                    { label: "Lab Fee (per sem)", amount: 4000 },
                    { label: "Exam Fee (per sem)", amount: 750 },
                ],
            },
        },
        {
            name: "MBA (Finance)",
            type: "Postgraduate",
            currency: "INR",
            fees: {
                annual: [
                    { label: "Tuition Fee", amount: 120000 },
                    { label: "Management & Infrastructure", amount: 10000 },
                    { label: "Exam Fee", amount: 2000 },
                ],
                semester: [
                    { label: "Tuition Fee (per sem)", amount: 60000 },
                    { label: "Infra Fee (per sem)", amount: 5000 },
                    { label: "Exam Fee (per sem)", amount: 1000 },
                ],
            },
        },
        {
            name: "M.A. English",
            type: "Postgraduate",
            currency: "INR",
            fees: {
                annual: [
                    { label: "Tuition Fee", amount: 50000 },
                    { label: "Library & Resources", amount: 3000 },
                ],
                semester: [
                    { label: "Tuition Fee (per sem)", amount: 25000 },
                    { label: "Library Fee (per sem)", amount: 1500 },
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
        <section className="fees-structure">
            <style>{`
        .fees-structure{font-family:Inter, Roboto, Arial, sans-serif;color:#0f2b44}
        .hero{position:relative;display:flex;align-items:center;min-height:180px;background:#0f3350;color:#fff;padding:36px 40px;overflow:hidden;}
        .hero-inner{position:relative;z-index:2;width:100%}
        .hero h1{font-size: 54px;margin:0 0 6px;font-weight:700}
        .hero p{margin:0;color:rgba(255,255,255,0.95)}
        .breadcrumb{color:#ffd27b;margin-top:8px;display:flex;gap:8px;align-items:center}
        .breadcrumb a{color:#ffd27b;text-decoration:none;font-weight:600}

        .container{max-width:1100px;margin:22px auto;padding:0 20px}
        .panel{background:#fff;padding:22px;border-radius:10px;}

        .controls{display:flex;gap:12px;align-items:center;flex-wrap:wrap}
        .select{padding:10px 12px;border-radius:8px;border:1px solid rgba(15,51,80,0.08);background:#fff}
        .toggle{display:flex;gap:8px}
        .toggle button{padding:8px 12px;border-radius:8px;border:1px solid rgba(15,51,80,0.06);cursor:pointer;background:#fff}
        .toggle button.active{background:#0f3350;color:#fff}

        .fee-table{width:100%;border-collapse:collapse;margin-top:18px}
        .fee-table th,.fee-table td{padding:12px;border:1px solid rgba(15,51,80,0.06);text-align:left}
        .fee-table th{background:#fbfdff;color:#0f3350}
        .fee-foot{font-weight:700;background:#f7f9fb}

        .actions{display:flex;gap:12px;margin-top:14px}
        .btn{padding:10px 14px;border-radius:8px;border:0;cursor:pointer}
        .btn-primary{background:#ff3a4e;color:#fff}
        .btn-outline{background:#fff;border:1px solid rgba(15,51,80,0.08);color:#0f3350}

        .help{margin-top:12px;color:#666}

        @media(max-width:800px){
          .hero{padding:24px}
          .hero h1{font-size:26px}
          .controls{flex-direction:column;align-items:stretch}
        }
      `}</style>

            <div className="hero" aria-label="Fees header">
                <div className="hero-inner">
                    <h1>Fees Structure</h1>
                    <p className="muted">Transparent fees for programmes — view annual or per‑semester breakdowns and download schedules.</p>
                    <nav className="breadcrumb" aria-label="Breadcrumb">
                        <a href="#">Home</a>
                        <span aria-hidden>•</span>
                        <a href="#">Admissions</a>
                        <span aria-hidden>•</span>
                        <span aria-current="page">Fees Structure</span>
                    </nav>
                </div>
            </div>

            <div className="container">
                <div className="panel" role="region" aria-labelledby="fees-heading">
                    <h2 id="fees-heading" style={{ marginTop: 0 }}>{selected.name} — {selected.type}</h2>

                    <div className="controls" style={{ marginTop: 12 }}>
                        <label className="select" htmlFor="programme-select" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <span style={{ color: '#666' }}>Programme</span>
                            <select id="programme-select" value={programme} onChange={(e) => setProgramme(e.target.value)} style={{ border: 'none', outline: 'none', background: 'transparent', fontWeight: 700 }}>
                                {programmes.map((p) => (
                                    <option key={p.name} value={p.name}>{p.name}</option>
                                ))}
                            </select>
                        </label>

                        <div className="toggle" role="tablist" aria-label="View toggle">
                            <button className={view === 'annual' ? 'active' : ''} onClick={() => setView('annual')} aria-pressed={view === 'annual'}>Annual</button>
                            <button className={view === 'semester' ? 'active' : ''} onClick={() => setView('semester')} aria-pressed={view === 'semester'}>Per semester</button>
                        </div>

                        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
                            <button className="btn btn-outline" onClick={() => window.print()}>Print</button>
                            <button className="btn btn-primary" onClick={downloadCSV}>Download CSV</button>
                        </div>
                    </div>

                    <table className="fee-table" aria-describedby="fees-heading">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th style={{ width: 160, textAlign: 'right' }}>Amount ({selected.currency})</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(view === 'annual' ? selected.fees.annual : selected.fees.semester).map((r, i) => (
                                <tr key={i}>
                                    <td>{r.label}</td>
                                    <td style={{ textAlign: 'right' }}>{currencyFormat(r.amount)}</td>
                                </tr>
                            ))}

                            <tr className="fee-foot">
                                <td style={{ textAlign: 'right' }}>Total</td>
                                <td style={{ textAlign: 'right' }}>{currencyFormat(total(view === 'annual' ? selected.fees.annual : selected.fees.semester))}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="help">Notes: Fees are indicative and subject to change. Additional charges (caution deposit, hostel, uniforms) are not included above. For exact fee receipts and payment gateway links, visit the admissions portal.</div>
                </div>
            </div>
        </section>
    );
}
