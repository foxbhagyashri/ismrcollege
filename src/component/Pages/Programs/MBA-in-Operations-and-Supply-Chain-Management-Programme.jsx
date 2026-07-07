import { useState } from "react";

const NAV_LINKS = ["Program", "Curriculum", "Eligibility", "Careers", "Admissions", "FAQs"];

const OUTCOMES = [
    { icon: "🎓", title: "Day-One Ready", desc: "Transition from graduate to industry-certified specialist in global logistics and lean operations." },
    { icon: "💻", title: "Master Enterprise Tech", desc: "Gain hands-on mastery of SAP, Oracle, and advanced inventory simulation platforms." },
    { icon: "📈", title: "Command Leadership Roles", desc: "Qualify for tracks like Supply Chain Analyst, Logistics Manager, and Procurement Specialist." },
    { icon: "🚀", title: "Hassle-Free Admissions", desc: "Step-by-step guidance from entrance test counseling to final enrollment." },
];

const SUBJECTS = [
    { title: "Supply Chain Strategy & Global Logistics", desc: "International trade barriers, customs compliance, and cross-border risk management." },
    { title: "Logistics & Warehouse Management", desc: "Multimodal transport networks, distribution physics, and automated warehousing layouts." },
    { title: "Procurement & Vendor Management", desc: "Strategic sourcing models and sustainable, cost-effective supplier networks." },
    { title: "Lean, Six Sigma & Demand Forecasting", desc: "Eliminate operational waste, improve quality control, and predict consumer demand through data." },
    { title: "ERP Systems & Inventory Control", desc: "Software literacy in SAP/Oracle with JIT and real-time inventory models." },
];

const WHO_PROFILES = [
    { label: "Fresh Graduates", icon: "🎯", desc: "No prior experience required. From engineering, commerce, science, or arts — ISMR bridges the gap to a corporate launchpad." },
    { label: "Working Professionals", icon: "🏭", desc: "Already in operations or manufacturing? Gain strategic credentials to break the growth ceiling into senior roles." },
    { label: "BFSI / Retail / E-Commerce", icon: "🛒", desc: "Lead cross-functional projects and optimize multi-city delivery routes and tech-enabled fulfillment centers." },
    { label: "Tech & ERP Aspirants", icon: "🖥️", desc: "Prepare for specialized roles in cloud-based inventory tracking and software implementation." },
    { label: "Entrepreneurs", icon: "💡", desc: "Use Lean and Six Sigma to eliminate waste and negotiate smarter vendor contracts in your own business." },
];

const CAREERS = [
    { role: "Supply Chain Manager", responsibility: "Governs complete product movement from raw materials to final consumers.", relevance: "Procurement protocols, international shipping, lean inventory systems." },
    { role: "Operations Manager", responsibility: "Shop-floor orchestration, capacity planning, and resource allocation.", relevance: "Engineering methodologies to eliminate waste and boost output quality." },
    { role: "Logistics & Distribution Manager", responsibility: "Designs multimodal shipping networks and supervises fulfillment facilities.", relevance: "Fleet utilization, automated sorting, cutting delivery times." },
    { role: "Procurement & Vendor Manager", responsibility: "Analyzes global supplier markets and executes commercial agreements.", relevance: "Reduces material costs through data-driven negotiation." },
    { role: "Demand Forecasting Analyst", responsibility: "Anticipates market patterns to avoid overproduction or shortages.", relevance: "Designs mathematical data models reviewing retail patterns." },
    { role: "ERP Implementation Analyst", responsibility: "Configures cloud platforms and software modules for companies.", relevance: "Automates inventory tracking in SAP or Oracle environments." },
];

const STEPS = [
    { step: "01", title: "Apply Online", desc: "Complete the digital form in under 15 minutes. Pay a registration fee of ₹1,100 to initiate your candidate file." },
    { step: "02", title: "Counselling Interview", desc: "Connect with an academic counselor via telephonic interview to align your entrance scores and career goals." },
    { step: "03", title: "Seat Confirmation", desc: "Receive your official Admission Letter. Submit a processing fee of ₹30,000 within four days to lock your seat." },
    { step: "04", title: "Provisional Admission", desc: "Your seat is formally registered. Submit transcripts and entrance scorecards as guided by the ISMR team." },
];

const FAQS = [
    { q: "What is an MBA in Operations and Supply Chain Management?", a: "A specialized two-year postgraduate degree focused on making production and distribution lines as efficient as possible — covering raw material sourcing, automated warehousing, and international transportation networks." },
    { q: "Who can apply?", a: "Any graduate with a bachelor's degree in any stream from a recognized university with a minimum of 50% marks (45% for reserved categories), plus valid MAH-MBA CET, CAT, or CMAT scores." },
    { q: "What is the duration of the course?", a: "Two academic years split into four comprehensive semesters — the first year covers management fundamentals; the second dives into advanced operations, ERP systems, and field projects." },
    { q: "Is ISMR AICTE-approved?", a: "Yes. ISMR holds complete statutory approvals from AICTE and DTE Maharashtra, and is affiliated with Savitribai Phule Pune University (SPPU)." },
    { q: "What is the typical starting salary?", a: "ISMR graduates typically secure entry-level packages ranging from ₹4.5 LPA to ₹7.5 LPA across Pune's automotive, logistics, and e-commerce sectors." },
    { q: "What are the program fees?", a: "The complete two-year program typically costs between ₹4.5 Lakhs to ₹5.5 Lakhs, covering academics, software training, and placement services. Contact the finance desk for exact figures." },
];

const WHY = [
    { icon: "🏛️", title: "AICTE & SPPU Credibility", desc: "Formally approved by AICTE and DTE, affiliated with Savitribai Phule Pune University." },
    { icon: "🔧", title: "Tech-Driven Curriculum", desc: "Interactive case studies and hands-on SAP/Oracle modules — no textbook-only approach." },
    { icon: "🤝", title: "Active Placement Cell", desc: "Direct connections with Pune's industrial ecosystem for proactive placement support." },
    { icon: "👩‍🏫", title: "Domain-Expert Faculty", desc: "Management scholars combined with visiting supply chain directors from industry." },
    { icon: "📍", title: "Strategic Location", desc: "Positioned inside the Pune and PCMC manufacturing corridors for plant visits and networking." },
    { icon: "💰", title: "Financial Transparency", desc: "Complete clarity on fees with no hidden costs. Education loan guidance available." },
];

// ── Style objects ──────────────────────────────────────────────
const styles = {
    page: {
        fontFamily: "sans-serif",
        color: "#1e293b",
        backgroundColor: "#ffffff",
        scrollBehavior: "smooth",
    },

    // HERO
    hero: {
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #0f172a 0%, #172554 50%, #164e63 100%)",
        color: "#ffffff",
    },
    heroBgGrid: {
        position: "absolute",
        inset: 0,
        opacity: 0.1,
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "40px 40px",
    },
    heroInner: {
        position: "relative",
        maxWidth: "80rem",
        margin: "0 auto",
        padding: "5rem 1.5rem 6rem",
    },
    heroContent: {
        maxWidth: "48rem",
    },
    heroBadge: {
        display: "inline-block",
        backgroundColor: "rgba(34,211,238,0.2)",
        border: "1px solid rgba(34,211,238,0.4)",
        color: "#67e8f9",
        fontSize: "0.7rem",
        fontWeight: 600,
        padding: "0.25rem 0.75rem",
        borderRadius: "9999px",
        marginBottom: "1.5rem",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
    },
    heroH1: {
        fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
        fontWeight: 900,
        lineHeight: 1.15,
        marginBottom: "1.5rem",
    },
    heroGradientText: {
        background: "linear-gradient(to right, #67e8f9, #93c5fd)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
    },
    heroSubtitle: {
        color: "#cbd5e1",
        fontSize: "1.1rem",
        lineHeight: 1.7,
        marginBottom: "2.5rem",
        maxWidth: "42rem",
    },
    heroCtas: {
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        marginBottom: "3rem",
    },
    ctaPrimary: {
        backgroundColor: "#22d3ee",
        color: "#0f172a",
        fontWeight: 900,
        padding: "0.75rem 1.5rem",
        borderRadius: "0.75rem",
        textDecoration: "none",
        fontSize: "1rem",
        transition: "background-color 0.2s",
        display: "inline-block",
    },
    ctaSecondary: {
        border: "1px solid rgba(255,255,255,0.3)",
        color: "#ffffff",
        fontWeight: 600,
        padding: "0.75rem 1.5rem",
        borderRadius: "0.75rem",
        textDecoration: "none",
        fontSize: "1rem",
        transition: "background-color 0.2s",
        display: "inline-block",
    },
    statsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
        gap: "1rem",
    },
    statCard: {
        backgroundColor: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(8px)",
        borderRadius: "0.75rem",
        padding: "1rem",
        border: "1px solid rgba(255,255,255,0.1)",
    },
    statVal: {
        fontSize: "1.5rem",
        fontWeight: 900,
        color: "#67e8f9",
    },
    statLabel: {
        color: "#94a3b8",
        fontSize: "0.7rem",
        marginTop: "0.25rem",
    },

    // SECTIONS
    sectionWhite: {
        padding: "5rem 0",
        backgroundColor: "#ffffff",
    },
    sectionSlate: {
        padding: "5rem 0",
        backgroundColor: "#f8fafc",
    },
    container: {
        maxWidth: "80rem",
        margin: "0 auto",
        padding: "0 1.5rem",
    },
    sectionHeader: {
        textAlign: "center",
        marginBottom: "3.5rem",
    },
    eyebrow: {
        color: "#1d4ed8",
        fontWeight: 700,
        fontSize: "0.75rem",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
    },
    sectionH2: {
        fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
        fontWeight: 900,
        marginTop: "0.5rem",
        color: "#0f172a",
    },
    sectionSubtitle: {
        color: "#64748b",
        marginTop: "0.75rem",
        maxWidth: "36rem",
        margin: "0.75rem auto 0",
    },

    // OUTCOMES GRID
    outcomesGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "1.5rem",
    },
    outcomeCard: {
        padding: "1.5rem",
        borderRadius: "1rem",
        border: "1px solid #f1f5f9",
        backgroundColor: "#ffffff",
        transition: "border-color 0.3s, box-shadow 0.3s",
    },
    outcomeIcon: {
        fontSize: "1.75rem",
        marginBottom: "1rem",
    },
    outcomeTitle: {
        fontWeight: 900,
        color: "#0f172a",
        fontSize: "1.1rem",
        marginBottom: "0.5rem",
    },
    outcomeDesc: {
        color: "#64748b",
        fontSize: "0.875rem",
        lineHeight: 1.6,
    },

    // WHO GRID
    whoGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "1.5rem",
    },
    whoCard: {
        backgroundColor: "#ffffff",
        borderRadius: "1rem",
        padding: "1.5rem",
        border: "1px solid #f1f5f9",
    },
    whoIcon: { fontSize: "1.75rem" },
    whoTitle: {
        fontWeight: 900,
        color: "#0f172a",
        fontSize: "1.1rem",
        marginTop: "0.75rem",
        marginBottom: "0.5rem",
    },
    whoDesc: {
        color: "#64748b",
        fontSize: "0.875rem",
        lineHeight: 1.6,
    },

    // CURRICULUM
    curriculumGrid: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        alignItems: "center",
    },
    curriculumLeft: {},
    subjectList: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        marginTop: "2rem",
    },
    subjectItem: {
        display: "flex",
        gap: "1rem",
        padding: "1rem",
        borderRadius: "0.75rem",
        backgroundColor: "#eff6ff",
        transition: "background-color 0.2s",
    },
    subjectDot: {
        width: "0.5rem",
        height: "0.5rem",
        borderRadius: "50%",
        backgroundColor: "#1d4ed8",
        marginTop: "0.5rem",
        flexShrink: 0,
    },
    subjectTitle: {
        fontWeight: 700,
        color: "#0f172a",
        fontSize: "0.875rem",
    },
    subjectDesc: {
        color: "#64748b",
        fontSize: "0.875rem",
        marginTop: "0.25rem",
    },
    curriculumRight: {
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
    },
    learningCard: {
        background: "linear-gradient(135deg, #1d4ed8, #0891b2)",
        color: "#ffffff",
        padding: "2rem",
        borderRadius: "1rem",
    },
    learningCardTitle: {
        fontWeight: 900,
        fontSize: "1.2rem",
        marginBottom: "1rem",
    },
    methodList: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
    methodItem: {
        display: "flex",
        gap: "0.75rem",
    },
    methodIcon: { fontSize: "1.5rem" },
    methodTitle: { fontWeight: 700, fontSize: "0.875rem" },
    methodDesc: { color: "#bfdbfe", fontSize: "0.875rem", marginTop: "0.125rem" },
    erpCard: {
        backgroundColor: "#0f172a",
        color: "#ffffff",
        padding: "1.5rem",
        borderRadius: "1rem",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
    },
    erpIcon: { fontSize: "2.5rem" },
    erpTitle: { fontWeight: 900 },
    erpDesc: { color: "#94a3b8", fontSize: "0.875rem", marginTop: "0.25rem" },

    // ELIGIBILITY
    eligibilityGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.5rem",
        maxWidth: "48rem",
        margin: "0 auto",
    },
    eligCard: {
        backgroundColor: "#ffffff",
        padding: "2rem",
        borderRadius: "1rem",
        border: "1px solid #f1f5f9",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
    },
    eligIcon: {
        width: "3rem",
        height: "3rem",
        borderRadius: "0.75rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.5rem",
        marginBottom: "1.25rem",
    },
    eligIconBlue: { backgroundColor: "#dbeafe" },
    eligIconCyan: { backgroundColor: "#cffafe" },
    eligTitle: {
        fontWeight: 900,
        color: "#0f172a",
        fontSize: "1.1rem",
        marginBottom: "0.75rem",
    },
    eligDesc: {
        color: "#64748b",
        fontSize: "0.875rem",
        lineHeight: 1.6,
    },
    tagRow: {
        display: "flex",
        gap: "0.5rem",
        flexWrap: "wrap",
        marginTop: "1rem",
    },
    tag: {
        backgroundColor: "#eff6ff",
        color: "#1d4ed8",
        fontSize: "0.75rem",
        fontWeight: 700,
        padding: "0.25rem 0.75rem",
        borderRadius: "9999px",
        border: "1px solid #bfdbfe",
    },

    // CAREERS TABLE
    tableWrapper: {
        overflowX: "auto",
        borderRadius: "1rem",
        border: "1px solid #f1f5f9",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
    },
    table: {
        width: "100%",
        fontSize: "0.875rem",
        borderCollapse: "collapse",
    },
    thead: {
        backgroundColor: "#0f172a",
        color: "#ffffff",
    },
    th: {
        textAlign: "left",
        padding: "1rem 1.5rem",
        fontWeight: 700,
    },
    tdRole: {
        padding: "1rem 1.5rem",
        fontWeight: 700,
        color: "#1d4ed8",
        whiteSpace: "nowrap",
    },
    tdBody: {
        padding: "1rem 1.5rem",
        color: "#475569",
    },
    tdMuted: {
        padding: "1rem 1.5rem",
        color: "#64748b",
    },
    trEven: { backgroundColor: "#ffffff" },
    trOdd: { backgroundColor: "#f8fafc" },
    industryRow: {
        marginTop: "2.5rem",
        textAlign: "center",
    },
    industryLabel: {
        color: "#64748b",
        fontSize: "0.875rem",
        fontWeight: 600,
        marginBottom: "1rem",
    },
    industryTags: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "0.75rem",
    },
    industryTag: {
        backgroundColor: "#0f172a",
        color: "#ffffff",
        fontSize: "0.75rem",
        fontWeight: 600,
        padding: "0.5rem 1rem",
        borderRadius: "9999px",
    },

    // ADMISSIONS
    admissionsSection: {
        padding: "5rem 0",
        background: "linear-gradient(135deg, #1d4ed8 0%, #0891b2 100%)",
        color: "#ffffff",
    },
    admissionsBadge: {
        display: "inline-block",
        backgroundColor: "rgba(255,255,255,0.2)",
        color: "#ffffff",
        fontSize: "0.7rem",
        fontWeight: 700,
        padding: "0.25rem 0.75rem",
        borderRadius: "9999px",
        marginBottom: "1rem",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
    },
    admissionsSubtitle: {
        color: "#bfdbfe",
        marginTop: "0.75rem",
    },
    stepsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "1.5rem",
    },
    stepCard: {
        backgroundColor: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: "1rem",
        padding: "1.5rem",
        transition: "background-color 0.2s",
    },
    stepNum: {
        fontSize: "3rem",
        fontWeight: 900,
        color: "rgba(255,255,255,0.3)",
        lineHeight: 1,
        marginBottom: "0.75rem",
    },
    stepTitle: {
        fontWeight: 900,
        fontSize: "1.1rem",
        marginBottom: "0.5rem",
    },
    stepDesc: {
        color: "#bfdbfe",
        fontSize: "0.875rem",
        lineHeight: 1.6,
    },
    ctaBox: {
        display: "inline-block",
        backgroundColor: "#ffffff",
        color: "#1e3a8a",
        borderRadius: "1rem",
        padding: "1.5rem 2rem",
        boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        maxWidth: "28rem",
        marginTop: "3rem",
        textAlign: "center",
    },
    ctaBoxTitle: {
        fontWeight: 900,
        fontSize: "1.1rem",
        marginBottom: "0.5rem",
    },
    ctaBoxSubtitle: {
        color: "#64748b",
        fontSize: "0.875rem",
        marginBottom: "1.25rem",
    },
    ctaBoxBtns: {
        display: "flex",
        flexWrap: "wrap",
        gap: "0.75rem",
        justifyContent: "center",
    },
    callBtn: {
        backgroundColor: "#1d4ed8",
        color: "#ffffff",
        fontWeight: 700,
        padding: "0.625rem 1.25rem",
        borderRadius: "0.75rem",
        fontSize: "0.875rem",
        textDecoration: "none",
        display: "inline-block",
    },
    emailBtn: {
        border: "1px solid #bfdbfe",
        color: "#1d4ed8",
        fontWeight: 700,
        padding: "0.625rem 1.25rem",
        borderRadius: "0.75rem",
        fontSize: "0.875rem",
        textDecoration: "none",
        display: "inline-block",
    },

    // WHY
    whyGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "1.5rem",
    },
    whyCard: {
        display: "flex",
        gap: "1rem",
        padding: "1.5rem",
        borderRadius: "1rem",
        border: "1px solid #f1f5f9",
        transition: "border-color 0.2s, box-shadow 0.2s",
    },
    whyIcon: { fontSize: "1.75rem", flexShrink: 0 },
    whyTitle: {
        fontWeight: 900,
        color: "#0f172a",
        marginBottom: "0.25rem",
    },
    whyDesc: {
        color: "#64748b",
        fontSize: "0.875rem",
        lineHeight: 1.6,
    },

    // FAQS
    faqsInner: {
        maxWidth: "48rem",
        margin: "0 auto",
        padding: "0 1.5rem",
    },
    faqList: {
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
    },
    faqItem: {
        backgroundColor: "#ffffff",
        borderRadius: "1rem",
        border: "1px solid #f1f5f9",
        overflow: "hidden",
    },
    faqBtn: {
        width: "100%",
        textAlign: "left",
        padding: "1.25rem 1.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontWeight: 700,
        color: "#0f172a",
        background: "none",
        border: "none",
        cursor: "pointer",
        transition: "background-color 0.2s",
    },
    faqQ: {
        fontSize: "0.875rem",
        paddingRight: "1rem",
    },
    faqIcon: {
        color: "#1d4ed8",
        fontSize: "1.25rem",
        flexShrink: 0,
    },
    faqAnswer: {
        padding: "0 1.5rem 1.25rem",
        color: "#64748b",
        fontSize: "0.875rem",
        lineHeight: 1.7,
        borderTop: "1px solid #f1f5f9",
        paddingTop: "1rem",
    },

    // FOOTER CTA
    footerCta: {
        padding: "4rem 0",
        backgroundColor: "#0f172a",
        color: "#ffffff",
        textAlign: "center",
    },
    footerH2: {
        fontSize: "1.875rem",
        fontWeight: 900,
        marginBottom: "1rem",
    },
    footerSubtitle: {
        color: "#94a3b8",
        marginBottom: "2rem",
    },
    footerBtn: {
        display: "inline-block",
        backgroundColor: "#22d3ee",
        color: "#0f172a",
        fontWeight: 900,
        padding: "1rem 2rem",
        borderRadius: "0.75rem",
        textDecoration: "none",
        fontSize: "1rem",
        transition: "background-color 0.2s",
    },
    footerNote: {
        color: "#475569",
        fontSize: "0.75rem",
        marginTop: "1.5rem",
    },
};

export default function ISMRLanding() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div style={styles.page}>
            {/* ── HERO ── */}
            <section id="program" style={styles.hero}>
                <div style={styles.heroBgGrid} />
                <div style={styles.heroInner}>
                    <div style={styles.heroContent}>
                        <span style={styles.heroBadge}>SPPU Affiliated · AICTE Approved</span>
                        <h1 style={styles.heroH1}>
                            Transform Global Supply Chains by Choosing the Finest<br />
                            <span style={styles.heroGradientText}>MBA in Operations and Supply Chain Management Colleges in Pune</span>
                        </h1>

                        {/* Program Outcomes */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
                            {[
                                { icon: "🎓", title: "Graduate as a Day-One Ready Specialist", desc: "Transition from a general graduate to an industry-ready professional certified in global logistics and lean operations." },
                                { icon: "💻", title: "Master Top Enterprise Tech", desc: "Gain immediate career leverage by mastering corporate operations tools, including SAP, Oracle, and advanced inventory simulations." },
                                { icon: "📈", title: "Command Leadership Roles", desc: "Qualify directly for high-growth corporate tracks like Supply Chain Analyst, Logistics Manager, and Procurement Specialist." },
                                { icon: "🚀", title: "Secure Hassle-Free Admissions", desc: "Navigate your entry smoothly with step-by-step guidance, from management entrance test counseling to final enrollment." },
                            ].map((item, i) => (
                                <div key={i} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start", backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.875rem", padding: "1rem 1.25rem", backdropFilter: "blur(8px)" }}>
                                    <span style={{ fontSize: "1.25rem", flexShrink: 0, marginTop: "0.1rem" }}>{item.icon}</span>
                                    <div>
                                        <p style={{ fontWeight: 800, fontSize: "0.875rem", color: "#ffffff", marginBottom: "0.2rem" }}>{item.title}</p>
                                        <p style={{ fontSize: "0.8rem", color: "#94a3b8", lineHeight: 1.5 }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div style={styles.heroCtas}>
                            <a href="#admissions" style={styles.ctaPrimary}>Apply for 2026 →</a>
                            <a href="#curriculum" style={styles.ctaSecondary}>Explore Curriculum</a>
                        </div>

                        {/* Counseling Note */}
                        <div style={{ backgroundColor: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.25)", borderRadius: "0.875rem", padding: "1rem 1.25rem", marginBottom: "2.5rem" }}>
                            <p style={{ fontSize: "0.825rem", color: "#cbd5e1", lineHeight: 1.6 }}>
                                Have specific questions regarding the <strong style={{ color: "#67e8f9" }}>MBA SCM Pune Admission 2026</strong> criteria, accepted cutoff scores, or seat reservation timelines?{" "}
                                <a href="tel:+91" style={{ color: "#22d3ee", fontWeight: 700, textDecoration: "none" }}>Get in touch today for personalized counseling →</a>
                            </p>
                        </div>

                        {/* Stats */}
                        <div style={styles.statsGrid}>
                            {[
                                { val: "2 Years", label: "Full-Time Program" },
                                { val: "4", label: "Comprehensive Semesters" },
                                { val: "₹4.5–7.5L", label: "Avg. Starting Package" },
                                { val: "100%", label: "Industry-Integrated Learning" },
                            ].map(s => (
                                <div key={s.label} style={styles.statCard}>
                                    <p style={styles.statVal}>{s.val}</p>
                                    <p style={styles.statLabel}>{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <svg style={{ position: "absolute", bottom: 0, width: "100%", display: "block" }} viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 60L1440 60L1440 0C1200 50 960 60 720 40C480 20 240 0 0 20L0 60Z" fill="white" />
                </svg>
            </section>

          {/* ── UNDERSTANDING THE PROGRAMME ── */}
<section style={{ padding: "5rem 0", backgroundColor: "#ffffff" }}>
    <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span style={{ color: "#1d4ed8", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>About the Programme</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>Understanding the MBA in Operations and Supply Chain Management</h2>
            <p style={{ color: "#64748b", marginTop: "0.75rem", maxWidth: "48rem", margin: "0.75rem auto 0", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Modern businesses no longer compete just as individual brands — they compete as entire supply chains. This specialized discipline balances day-to-day operational efficiency with long-term strategic planning, teaching students how to transform raw materials into finished products and deliver them globally with maximum speed and minimal cost.
            </p>
        </div>

        {/* Affiliation Banner */}
        <div style={{ backgroundColor: "#0f172a", borderRadius: "1.25rem", padding: "1.5rem 2rem", marginBottom: "3rem", display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "0.75rem", backgroundColor: "rgba(34,211,238,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", flexShrink: 0 }}>🏛️</div>
                <div>
                    <p style={{ fontWeight: 900, color: "#ffffff", fontSize: "0.95rem" }}>ISMR — SPPU-Affiliated MBA in Supply Chain College in Pune</p>
                    <p style={{ color: "#94a3b8", fontSize: "0.825rem", marginTop: "0.2rem" }}>Structured over 2 years · 4 comprehensive semesters · Full-time format</p>
                </div>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                {["Management Fundamentals", "→", "Advanced Global Logistics Architecture"].map((tag, i) => (
                    tag === "→"
                        ? <span key={i} style={{ color: "#67e8f9", fontWeight: 900, fontSize: "1.1rem", alignSelf: "center" }}>→</span>
                        : <span key={i} style={{ backgroundColor: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.25)", color: "#67e8f9", fontSize: "0.775rem", fontWeight: 700, padding: "0.4rem 0.9rem", borderRadius: "9999px" }}>{tag}</span>
                ))}
            </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>

            {/* Learning Format */}
            <div style={{ backgroundColor: "#f8fafc", borderRadius: "1.25rem", border: "1px solid #e2e8f0", overflow: "hidden" }}>
                <div style={{ background: "linear-gradient(135deg, #1d4ed8, #0891b2)", padding: "1.5rem" }}>
                    <span style={{ color: "#bfdbfe", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Pedagogy</span>
                    <h3 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#ffffff", marginTop: "0.3rem" }}>The Learning Format at ISMR</h3>
                    <p style={{ color: "#bfdbfe", fontSize: "0.825rem", marginTop: "0.4rem", lineHeight: 1.5 }}>Active, industry-integrated learning methods to ensure you graduate with practical, actionable skills.</p>
                </div>
                <div style={{ padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: "0" }}>
                    {[
                        { icon: "🧪", title: "Simulations & Case Studies", desc: "Analyze real-world disruptions such as global shipping bottlenecks or sudden demand surges using interactive software to practice real-time risk mitigation." },
                        { icon: "🏗️", title: "Live Industry Projects", desc: "Partner with corporate brands across Pune's manufacturing belts to solve actual operational challenges on active shop floors." },
                        { icon: "📚", title: "Classroom Instruction", desc: "Master core management models delivered by experienced, university-vetted faculty and visiting supply chain veterans." },
                    ].map((item, i) => (
                        <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "1.1rem 0", borderBottom: i < 2 ? "1px solid #e2e8f0" : "none" }}>
                            <div style={{ width: "2.25rem", height: "2.25rem", borderRadius: "0.5rem", backgroundColor: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>{item.icon}</div>
                            <div>
                                <p style={{ fontWeight: 800, fontSize: "0.875rem", color: "#0f172a", marginBottom: "0.25rem" }}>{item.title}</p>
                                <p style={{ color: "#64748b", fontSize: "0.8rem", lineHeight: 1.6 }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Key Subjects */}
            <div style={{ backgroundColor: "#f8fafc", borderRadius: "1.25rem", border: "1px solid #e2e8f0", overflow: "hidden" }}>
                <div style={{ backgroundColor: "#0f172a", padding: "1.5rem" }}>
                    <span style={{ color: "#94a3b8", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Curriculum</span>
                    <h3 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#ffffff", marginTop: "0.3rem" }}>Key Subjects Covered</h3>
                    <p style={{ color: "#94a3b8", fontSize: "0.825rem", marginTop: "0.4rem", lineHeight: 1.5 }}>Meticulously designed to cover every touchpoint of the modern product lifecycle.</p>
                </div>
                <div style={{ padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: "0" }}>
                    {[
                        { icon: "🌐", title: "Supply Chain Strategy & Global Logistics", desc: "International trade barriers, customs compliance, and cross-border risk management." },
                        { icon: "🚚", title: "Logistics & Warehouse Management", desc: "Multimodal transport networks, distribution physics, and automated warehousing layouts." },
                        { icon: "🤝", title: "Procurement & Vendor Management", desc: "Strategic sourcing models and sustainable, cost-effective supplier networks." },
                        { icon: "⚙️", title: "Lean, Six Sigma & Demand Forecasting", desc: "Eliminate operational waste, improve quality control, and predict consumer demand through data." },
                        { icon: "🖥️", title: "ERP Systems & Inventory Control", desc: "Software literacy in SAP/Oracle with JIT and real-time inventory models." },
                    ].map((item, i) => (
                        <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "0.9rem 0", borderBottom: i < 4 ? "1px solid #e2e8f0" : "none" }}>
                            <div style={{ width: "2rem", height: "2rem", borderRadius: "0.5rem", backgroundColor: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.95rem", flexShrink: 0 }}>{item.icon}</div>
                            <div>
                                <p style={{ fontWeight: 800, fontSize: "0.825rem", color: "#0f172a", marginBottom: "0.2rem" }}>{item.title}</p>
                                <p style={{ color: "#64748b", fontSize: "0.775rem", lineHeight: 1.5 }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    </div>
</section>


{/* ── ELIGIBILITY & ADMISSIONS ── */}
<section style={{ padding: "5rem 0", backgroundColor: "#f8fafc" }}>
    <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span style={{ color: "#1d4ed8", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Admissions 2026</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>Eligibility & Admissions Requirements</h2>
            <p style={{ color: "#64748b", marginTop: "0.75rem", maxWidth: "38rem", margin: "0.75rem auto 0", fontSize: "0.95rem", lineHeight: 1.6 }}>
                Securing your seat in this competitive program requires fulfilling specific academic and competitive benchmarks.
            </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", maxWidth: "56rem", margin: "0 auto" }}>

            {/* Academic Criteria */}
            <div style={{ backgroundColor: "#ffffff", borderRadius: "1.25rem", border: "1px solid #e2e8f0", overflow: "hidden" }}>
                <div style={{ background: "linear-gradient(135deg, #1d4ed8, #0891b2)", padding: "1.75rem" }}>
                    <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "0.75rem", backgroundColor: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", marginBottom: "1rem" }}>🎓</div>
                    <h3 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#ffffff", marginBottom: "0.4rem" }}>Academic Criteria</h3>
                    <p style={{ color: "#bfdbfe", fontSize: "0.825rem", lineHeight: 1.5 }}>A bachelor's degree in any stream or discipline from a recognized university.</p>
                </div>
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                    <div style={{ display: "flex", gap: "1rem", alignItems: "center", backgroundColor: "#f8fafc", borderRadius: "0.875rem", padding: "1rem 1.25rem", border: "1px solid #e2e8f0" }}>
                        <div style={{ textAlign: "center", minWidth: "3.5rem" }}>
                            <p style={{ fontSize: "1.75rem", fontWeight: 900, color: "#1d4ed8", lineHeight: 1 }}>50%</p>
                            <p style={{ fontSize: "0.65rem", color: "#94a3b8", fontWeight: 600, marginTop: "0.15rem" }}>General</p>
                        </div>
                        <div style={{ width: "1px", height: "2.5rem", backgroundColor: "#e2e8f0", flexShrink: 0 }} />
                        <p style={{ color: "#475569", fontSize: "0.825rem", lineHeight: 1.5 }}>Minimum aggregate marks required from a recognised university</p>
                    </div>
                    <div style={{ display: "flex", gap: "1rem", alignItems: "center", backgroundColor: "#eff6ff", borderRadius: "0.875rem", padding: "1rem 1.25rem", border: "1px solid #bfdbfe" }}>
                        <div style={{ textAlign: "center", minWidth: "3.5rem" }}>
                            <p style={{ fontSize: "1.75rem", fontWeight: 900, color: "#0891b2", lineHeight: 1 }}>45%</p>
                            <p style={{ fontSize: "0.65rem", color: "#94a3b8", fontWeight: 600, marginTop: "0.15rem" }}>Reserved</p>
                        </div>
                        <div style={{ width: "1px", height: "2.5rem", backgroundColor: "#bfdbfe", flexShrink: 0 }} />
                        <p style={{ color: "#475569", fontSize: "0.825rem", lineHeight: 1.5 }}>Minimum aggregate marks for reserved category candidates</p>
                    </div>
                    <div style={{ backgroundColor: "#dbeafe", borderRadius: "0.75rem", padding: "0.875rem 1rem", border: "1px solid #bfdbfe" }}>
                        <p style={{ fontSize: "0.8rem", color: "#1d4ed8", fontWeight: 600, lineHeight: 1.5 }}>
                            📌 Any stream or discipline is accepted — engineering, commerce, arts, or science.
                        </p>
                    </div>
                </div>
            </div>

            {/* Entrance Exam */}
            <div style={{ backgroundColor: "#ffffff", borderRadius: "1.25rem", border: "1px solid #e2e8f0", overflow: "hidden" }}>
                <div style={{ backgroundColor: "#0f172a", padding: "1.75rem" }}>
                    <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "0.75rem", backgroundColor: "rgba(34,211,238,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", marginBottom: "1rem" }}>📝</div>
                    <h3 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#ffffff", marginBottom: "0.4rem" }}>Entrance Exam Performance</h3>
                    <p style={{ color: "#94a3b8", fontSize: "0.825rem", lineHeight: 1.5 }}>Admission is strictly merit-based, requiring valid scores in state or national-level management entrance tests.</p>
                </div>
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                    <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em" }}>Accepted Entrance Exams</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                        {[
                            { exam: "MAH-MBA CET", type: "State Level", color: "#dbeafe", textColor: "#1d4ed8" },
                            { exam: "CAT", type: "National Level", color: "#dcfce7", textColor: "#15803d" },
                            { exam: "CMAT", type: "National Level", color: "#fef3c7", textColor: "#b45309" },
                            { exam: "MAT", type: "National Level", color: "#ede9fe", textColor: "#7c3aed" },
                            { exam: "ATMA", type: "National Level", color: "#fce7f3", textColor: "#be185d" },
                            { exam: "XAT", type: "National Level", color: "#cffafe", textColor: "#0891b2" },
                        ].map((item, i) => (
                            <div key={i} style={{ backgroundColor: item.color, borderRadius: "0.75rem", padding: "0.875rem", textAlign: "center" }}>
                                <p style={{ fontWeight: 900, fontSize: "1rem", color: item.textColor }}>{item.exam}</p>
                                <p style={{ fontSize: "0.7rem", color: item.textColor, opacity: 0.75, marginTop: "0.15rem", fontWeight: 600 }}>{item.type}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ backgroundColor: "#0f172a", borderRadius: "0.875rem", padding: "1rem 1.25rem", marginTop: "0.25rem" }}>
                        <p style={{ fontSize: "0.825rem", color: "#67e8f9", fontWeight: 700, marginBottom: "0.25rem" }}>⚡ Merit-Based Admission</p>
                        <p style={{ fontSize: "0.8rem", color: "#94a3b8", lineHeight: 1.5 }}>Shortlisting is based on entrance exam scores aligned with DTE Maharashtra and SPPU norms.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>



{/* ── WHO SHOULD PURSUE ── */}
<section id="curriculum" style={{ backgroundColor: "#fff", padding: "5rem 0" }}>
  <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
    <span style={{ display: "inline-block", fontSize: 13, fontWeight: 500, color: "#2563eb", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
      Is This Right for You?
    </span>
    <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>
      Who Should Pursue an MBA in Operations<br />and Supply Chain Management?
    </h2>
    <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: 640 }}>
      Choosing a management specialisation depends on your background and future objectives.
      ISMR's curriculum is structured to add career-accelerating value to several distinct profiles.
    </p>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))", gap: "1.25rem" }}>
      {[
        {
          icon: "🎓",
          tag: "Fresh graduates",
          title: "Recent graduates from any stream",
          hook: "No prior experience required.",
          desc: "ISMR trains graduates to manage procurement pipelines, distribution frameworks, and logistics networks from scratch — regardless of background. Engineering, commerce, science, or arts: the programme bridges the gap to a corporate launchpad.",
        },
        {
          icon: "🏭",
          tag: "Working professionals",
          title: "Professionals in operations or manufacturing",
          hook: "Break the growth ceiling.",
          desc: "Already working on shop floors, managing warehouses, or handling vendors? This MBA adds macro-level strategic insights and leadership credentials to transition into high-paying managerial positions.",
        },
        {
          icon: "🏦",
          tag: "BFSI / Retail / E-Commerce",
          title: "Professionals from BFSI, retail, or e-commerce",
          hook: "Lead cross-functional projects.",
          desc: "Modern banking, retail, and digital marketplaces rely on backend processing speed and distribution efficiency. Learn to optimise multi-city delivery routes and build tech-enabled fulfilment centres.",
        },
        {
          icon: "🖥️",
          tag: "Tech-enabled roles",
          title: "Aspiring ERP and tech-enabled professionals",
          hook: "Bridge business and technology.",
          desc: "Technology has transformed traditional logistics, making data literacy essential. ISMR's curriculum prepares you for specialised roles in ERP implementation, SAP, and cloud-based inventory tracking.",
        },
        {
          icon: "💼",
          tag: "Entrepreneurs",
          title: "Entrepreneurs and family business members",
          hook: "Protect and grow your margins.",
          desc: "Running or inheriting a manufacturing or wholesale distribution enterprise? This programme equips you with Lean and Six Sigma methodologies to eliminate waste and negotiate smarter vendor contracts.",
        },
      ].map((p, i) => (
        <div key={i} style={{ background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 12, padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
            <div style={{ width: 42, height: 42, borderRadius: 10, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 20 }}>{p.icon}</span>
            </div>
            <div>
              <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "#2563eb", background: "#eff6ff", borderRadius: 6, padding: "3px 9px", display: "inline-block", marginBottom: "0.25rem" }}>
                {p.tag}
              </span>
              <p style={{ fontSize: 16, fontWeight: 500, color: "#0f172a", margin: 0, lineHeight: 1.3 }}>{p.title}</p>
            </div>
          </div>
          <hr style={{ border: "none", borderTop: "0.5px solid #e2e8f0", margin: 0 }} />
          <p style={{ fontSize: 13, fontWeight: 500, color: "#2563eb", margin: 0 }}>{p.hook}</p>
          <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


          
      
     {/* ── STRATEGIC MARKET BENEFITS ── */}
<section id="benefits" style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
  <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>

    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
      <span style={{ display: "inline-block", fontSize: 13, fontWeight: 500, color: "#2563eb", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
        Why Choose This Specialisation
      </span>
      <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>
        Strategic Market Benefits of the Programme
      </h2>
      <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.7, maxWidth: 620, margin: "0 auto" }}>
        Evolving global trade dynamics have shifted supply chains from a backend support function into a primary driver of competitive business advantage.
      </p>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.25rem" }}>
      {[
        {
          icon: "🌐",
          badge: "Resilient career paths",
          title: "Surging global industry demand",
          desc: "Recent disruptions in global logistics have forced companies to completely rethink their sourcing strategies. This shift has created urgent corporate demand for qualified managers who can anticipate bottlenecks and build resilient vendor networks.",
        },
        {
          icon: "💰",
          badge: "Strong ROI",
          title: "Highly competitive earning potential",
          desc: "Operational efficiency directly impacts corporate profitability, which translates into premium compensation. The average MBA Supply Chain Management salary in Pune reflects this value, offering graduates competitive starting packages and rapid increments within expanding e-commerce and manufacturing hubs.",
        },
        {
          icon: "🖥️",
          badge: "Day-one productivity",
          title: "Practical exposure to enterprise tools",
          desc: "Employers look for candidates who can contribute immediately without lengthy training cycles. Students gain hands-on experience with industry-standard systems like SAP and Oracle, alongside practical exposure to Lean and Six Sigma frameworks.",
        },
        {
          icon: "🔄",
          badge: "Maximum career flexibility",
          title: "Versatile cross-sector applicability",
          desc: "Unlike narrow specialisations, operations expertise transfers perfectly across multiple fields. Graduates can build their professional futures anywhere — from automotive assembly lines and FMCG networks to pharmaceutical cold chains and retail infrastructure.",
        },
        {
          icon: "🧠",
          badge: "Become a complete leader",
          title: "Balanced managerial skill development",
          desc: "True operational leadership requires sharp analytical thinking combined with team management. The programme balances quantitative training like demand forecasting with essential modules covering corporate negotiation and leadership psychology.",
        },
        {
          icon: "📍",
          badge: "Direct corporate access",
          title: "Unmatched regional industrial placement",
          desc: "Geography plays a critical role in management placements. Positioned near Pune and PCMC's massive industrial, automotive, and IT corridors, ISMR students benefit from regular corporate networking, plant visits, and direct recruitment pathways.",
        },
      ].map((b, i) => (
        <div key={i} style={{ background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 12, padding: "1.75rem", display: "flex", flexDirection: "column", gap: "0.85rem" }}>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 22 }}>{b.icon}</span>
            </div>
            <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "#2563eb", background: "#eff6ff", borderRadius: 20, padding: "4px 12px", whiteSpace: "nowrap" }}>
              {b.badge}
            </span>
          </div>

          <h3 style={{ fontSize: 17, fontWeight: 500, color: "#0f172a", margin: 0, lineHeight: 1.35 }}>
            {b.title}
          </h3>

          <hr style={{ border: "none", borderTop: "0.5px solid #e2e8f0", margin: 0 }} />

          <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, margin: 0 }}>
            {b.desc}
          </p>

        </div>
      ))}
    </div>

  </div>
</section>



{/* ── ADMISSION PROCESS + CAREER OPPORTUNITIES ── */}

{/* ADMISSION PROCESS */}
<section id="admissions" style={{ backgroundColor: "#fff", padding: "5rem 0" }}>
  <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>

    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
      <span style={{ display: "inline-block", fontSize: 13, fontWeight: 500, color: "#2563eb", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
        Admissions 2026
      </span>
      <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>
        The Structured ISMR Admission Process
      </h2>
      <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.7, maxWidth: 580, margin: "0 auto" }}>
        Navigating college enrolment should be straightforward and stress-free. ISMR supports students through every stage of the admission process.
      </p>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0", position: "relative" }}>
      {[
        {
          step: "01",
          icon: "📝",
          title: "Apply Online",
          badge: "Quick digital portal",
          desc: "Complete our online form in under 15 minutes with basic academic records. A registration fee of ₹1,100 initiates your candidate file.",
        },
        {
          step: "02",
          icon: "📞",
          title: "Counselling & Interview",
          badge: "Personalised career alignment",
          desc: "Connect with an academic counsellor for a telephonic interview evaluating your entrance scores, background, and career goals.",
        },
        {
          step: "03",
          icon: "✅",
          title: "Seat Confirmation",
          badge: "Secure your enrolment",
          desc: "Receive your official Admission Letter via email. Secure your seat by submitting a processing fee of ₹30,000 within four days.",
        },
        {
          step: "04",
          icon: "🎓",
          title: "Provisional Admission",
          badge: "Final document verification",
          desc: "Your provisional admission is locked into the university system. ISMR provides a checklist to guide transcript and scorecard submission.",
        },
      ].map((s, i) => (
        <div key={i} style={{ position: "relative", padding: "2rem 1.75rem", borderTop: i === 0 ? "3px solid #2563eb" : "3px solid #e2e8f0", background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#2563eb", letterSpacing: "0.1em" }}>STEP {s.step}</span>
            <div style={{ flex: 1, height: "0.5px", background: "#e2e8f0" }} />
            <span style={{ fontSize: 20 }}>{s.icon}</span>
          </div>
          <h3 style={{ fontSize: 18, fontWeight: 500, color: "#0f172a", margin: "0 0 0.4rem", lineHeight: 1.3 }}>{s.title}</h3>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "#2563eb", background: "#eff6ff", borderRadius: 20, padding: "3px 10px", display: "inline-block", marginBottom: "1rem" }}>
            {s.badge}
          </span>
          <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
        </div>
      ))}
    </div>

  </div>
</section>

{/* CAREER OPPORTUNITIES */}
<section id="careers" style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
  <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>

    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
      <span style={{ display: "inline-block", fontSize: 13, fontWeight: 500, color: "#2563eb", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
        Your Future Awaits
      </span>
      <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>
        Career Opportunities After an MBA in<br />Operations and Supply Chain Management
      </h2>
      <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.7, maxWidth: 620, margin: "0 auto" }}>
        Graduating with this specialisation opens diverse paths across the global corporate ecosystem — transitioning you into high-growth leadership tracks designed around maximum efficiency.
      </p>
    </div>

    {/* Roles Table */}
    <div style={{ background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 12, overflow: "hidden", marginBottom: "2.5rem" }}>
      {/* Table Header */}
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 2fr 2fr", background: "#0f172a", padding: "1rem 1.5rem", gap: "1rem" }}>
        <span style={{ fontSize: 12, fontWeight: 500, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em" }}>Job Role</span>
        <span style={{ fontSize: 12, fontWeight: 500, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em" }}>Core Corporate Responsibility</span>
        <span style={{ fontSize: 12, fontWeight: 500, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em" }}>Strategic Career Relevance</span>
      </div>

      {[
        {
          role: "Supply Chain Manager",
          icon: "🔗",
          responsibility: "Governs the complete movement of products from raw materials to final consumers.",
          relevance: "Critical for managing procurement protocols, international shipping, and lean inventory systems.",
        },
        {
          role: "Operations Manager",
          icon: "⚙️",
          responsibility: "Focuses on shop-floor orchestration, capacity planning, and resource allocation.",
          relevance: "Utilises engineering methodologies to eliminate production waste and boost output quality.",
        },
        {
          role: "Logistics & Distribution Manager",
          icon: "🚚",
          responsibility: "Designs smart multimodal shipping networks and supervises large fulfilment facilities.",
          relevance: "Maximises fleet utilisation, scales automated sorting, and cuts delivery times.",
        },
        {
          role: "Procurement & Vendor Manager",
          icon: "🤝",
          responsibility: "Analyses global supplier markets and executes complex commercial agreements.",
          relevance: "Balances data planning and communication to secure assets while reducing material costs.",
        },
        {
          role: "Demand Forecasting Analyst",
          icon: "📊",
          responsibility: "Anticipates changing market patterns to avoid overproduction or stock shortages.",
          relevance: "Designs mathematical data models and reviews past retail patterns with marketing teams.",
        },
        {
          role: "ERP Implementation Analyst",
          icon: "🖥️",
          responsibility: "Helps companies transition onto cloud platforms by configuring software modules.",
          relevance: "Designs automated inventory tracking inside systems like SAP or Oracle.",
        },
        {
          role: "Operations Consultant",
          icon: "🔍",
          responsibility: "Audits third-party infrastructure to find hidden organisational inefficiencies.",
          relevance: "Broad exposure to varied corporate models while deploying customised lean solutions.",
        },
      ].map((r, i) => (
        <div key={i} style={{ display: "grid", gridTemplateColumns: "1.2fr 2fr 2fr", padding: "1.1rem 1.5rem", gap: "1rem", borderTop: "0.5px solid #e2e8f0", background: i % 2 === 0 ? "#fff" : "#f8fafc", alignItems: "start" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <span style={{ fontSize: 16 }}>{r.icon}</span>
            <span style={{ fontSize: 14, fontWeight: 500, color: "#0f172a", lineHeight: 1.4 }}>{r.role}</span>
          </div>
          <p style={{ fontSize: 13.5, color: "#475569", lineHeight: 1.65, margin: 0 }}>{r.responsibility}</p>
          <p style={{ fontSize: 13.5, color: "#475569", lineHeight: 1.65, margin: 0 }}>{r.relevance}</p>
        </div>
      ))}
    </div>

    {/* Hiring Industries */}
    <div style={{ background: "#0f172a", borderRadius: 12, padding: "2rem 2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <span style={{ fontSize: 18 }}>🏢</span>
        <h3 style={{ fontSize: 16, fontWeight: 500, color: "#fff", margin: 0 }}>Key Hiring Industries</h3>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
        {[
          "Automotive Assembly",
          "FMCG & Consumer Goods",
          "Pharmaceuticals & Cold Chain",
          "E-Commerce & Rapid Delivery",
          "Multinational Logistics",
          "Infrastructure Conglomerates",
          "Corporate Consulting",
        ].map((industry, i) => (
          <span key={i} style={{ fontSize: 13, fontWeight: 500, color: "#93c5fd", background: "rgba(37,99,235,0.15)", border: "0.5px solid rgba(59,130,246,0.3)", borderRadius: 20, padding: "5px 14px" }}>
            {industry}
          </span>
        ))}
      </div>
      <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.7, margin: 0 }}>
        Our graduates enjoy high demand across automotive assembly hubs, high-volume FMCG businesses, pharmaceutical cold chains, rapid-delivery e-commerce platforms, multinational logistics enterprises, infrastructure conglomerates, and top-tier consulting firms.
      </p>
    </div>

  </div>
</section>

{/* ── WHY ISMR ── */}
<section id="why-ismr" style={{ backgroundColor: "#fff", padding: "5rem 0" }}>
  <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>

    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
      <span style={{ display: "inline-block", fontSize: 13, fontWeight: 500, color: "#2563eb", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
        The ISMR Advantage
      </span>
      <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>
        Why Students Choose ISMR for an MBA<br />in Supply Chain Management
      </h2>
      <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.7, maxWidth: 620, margin: "0 auto" }}>
        Building a successful corporate path depends on choosing an educational ecosystem that integrates practical training with solid market authority.
      </p>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.25rem", marginBottom: "4rem" }}>
      {[
        {
          icon: "🏛️",
          badge: "Rigorous academic backing",
          title: "AICTE & SPPU credibility",
          desc: "Our programme carries formal approvals from AICTE and DTE, delivering a university-vetted syllabus from Savitribai Phule Pune University — commanding instant institutional trust across global corporations.",
        },
        {
          icon: "💻",
          badge: "Boardroom readiness from day one",
          title: "Tech-driven curriculum",
          desc: "The programme bypasses purely textbook training by integrating interactive case studies and hands-on software modules. Students practice balancing live procurement flows inside actual SAP and Oracle layouts.",
        },
        {
          icon: "🚀",
          badge: "Proactive career launchpads",
          title: "Active placement cell",
          desc: "ISMR's structured placement programme and industry connections give graduates a direct edge when entering Pune's competitive operations and supply chain job market.",
        },
        {
          icon: "👨‍🏫",
          badge: "Mentorship from corporate veterans",
          title: "Domain-expert faculty",
          desc: "Classes are guided by accomplished management scholars and visiting supply chain directors — ensuring you analyse actual corporate bottlenecks and study modern, practical solutions.",
        },
        {
          icon: "📍",
          badge: "Positioned inside an industrial core",
          title: "Strategic location",
          desc: "Located directly within the expanding Pune and PCMC manufacturing corridors, ISMR offers unrivalled local industrial access for plant visits, summer projects, and routine networking.",
        },
        {
          icon: "💳",
          badge: "Honest financial clarity",
          title: "Financial transparency",
          desc: "ISMR maintains complete transparency regarding MBA fees in Pune, protecting families from hidden costs while offering step-by-step guidance on securing education loans.",
        },
      ].map((item, i) => (
        <div key={i} style={{ background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 12, padding: "1.75rem", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 22 }}>{item.icon}</span>
            </div>
            <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "#2563eb", background: "#eff6ff", borderRadius: 20, padding: "4px 12px", whiteSpace: "nowrap" }}>
              {item.badge}
            </span>
          </div>
          <h3 style={{ fontSize: 17, fontWeight: 500, color: "#0f172a", margin: 0, lineHeight: 1.35 }}>{item.title}</h3>
          <hr style={{ border: "none", borderTop: "0.5px solid #e2e8f0", margin: 0 }} />
          <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
        </div>
      ))}
    </div>

  </div>
</section>

{/* ── CTA BANNER ── */}
<section style={{ backgroundColor: "#0f172a", padding: "4rem 0" }}>
  <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "2rem" }}>
    <div style={{ maxWidth: 560 }}>
      <span style={{ display: "inline-block", fontSize: 13, fontWeight: 500, color: "#93c5fd", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
        Take the Next Step
      </span>
      <h2 style={{ fontSize: 28, fontWeight: 500, color: "#fff", margin: "0 0 0.75rem", lineHeight: 1.3 }}>
        Ready to Shape Global Business Infrastructure?
      </h2>
      <p style={{ fontSize: 15, color: "#94a3b8", lineHeight: 1.7, margin: 0 }}>
        Our expert academic counsellors are here to help you make a confident, informed decision. Get a complete cost breakdown including hostel packages and education loan guidance.
      </p>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <a href="#contact" style={{ display: "inline-block", background: "#2563eb", color: "#fff", fontWeight: 500, fontSize: 15, padding: "0.85rem 2rem", borderRadius: 8, textDecoration: "none", textAlign: "center" }}>
        Talk to a Counsellor
      </a>
      <a href="#fees" style={{ display: "inline-block", background: "transparent", color: "#93c5fd", fontWeight: 500, fontSize: 14, padding: "0.75rem 2rem", borderRadius: 8, textDecoration: "none", border: "0.5px solid rgba(59,130,246,0.4)", textAlign: "center" }}>
        Get Fee Breakdown
      </a>
    </div>
  </div>
</section>

{/* ── FAQs ── */}
<section id="faqs" style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
  <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 2rem" }}>

    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
      <span style={{ display: "inline-block", fontSize: 13, fontWeight: 500, color: "#2563eb", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
        Got Questions?
      </span>
      <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>
        Frequently Asked Questions
      </h2>
      <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.7 }}>
        Everything you need to know before applying to ISMR's MBA in Operations and Supply Chain Management.
      </p>
    </div>

    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      {[
        {
          q: "What is an MBA in Operations and Supply Chain Management?",
          a: "A specialised two-year postgraduate degree centred on making business production and distribution lines as efficient as possible. The programme trains students to manage raw material sourcing, organise automated warehousing layouts, and coordinate international transportation networks — blending leadership principles with modern analytical tools.",
        },
        {
          q: "Who can apply for an MBA in Supply Chain Management in Pune?",
          a: "Any graduate holding a bachelor's degree in any stream from a recognised university with a minimum aggregate of 50% marks (45% for reserved categories). Candidates must also possess a valid scorecard from management entrance examinations like MAH-MBA CET, CAT, or CMAT.",
        },
        {
          q: "What is the duration of the MBA Operations and Supply Chain Management course?",
          a: "The programme spans two academic years split into four comprehensive semesters. The first year builds foundational management capabilities, while the second year dives into advanced operations, ERP systems, and field-based industry projects.",
        },
        {
          q: "Is an MBA in SCM suitable for working professionals?",
          a: "Yes. This track is exceptionally rewarding for professionals in manufacturing, logistics, or backend retail roles. The corporate frameworks, lean strategies, and software insights provide the strategic authority needed to step away from daily frontline execution and clear senior internal promotions.",
        },
        {
          q: "Is ISMR AICTE-approved for MBA in Supply Chain Management?",
          a: "Yes. ISMR holds complete statutory approvals from AICTE and the Directorate of Technical Education (DTE), Maharashtra. The programme is formally affiliated with Savitribai Phule Pune University (SPPU), guaranteeing strict educational quality controls and global validity.",
        },
        {
          q: "What is the scope of MBA Supply Chain Management in Pune?",
          a: "The professional scope is exceptionally broad due to Pune's status as a booming automotive, manufacturing, and IT centre. Graduates can step into procurement logistics, inventory forecasting, warehouse automation, and strategic global sourcing — with consistent long-term demand across multiple industries.",
        },
        {
          q: "What is the typical MBA Supply Chain Management salary in Pune for fresh graduates?",
          a: "ISMR graduates typically secure entry-level packages ranging between INR 4.5 Lakhs to INR 7.5 Lakhs per annum, with placements across Pune's automotive, logistics, and e-commerce sectors. Earning potential increases rapidly with hands-on experience managing large-scale global networks.",
        },
        {
          q: "What are the fees for the MBA in Operations and Supply Chain Management at ISMR?",
          a: "The competitive tuition fee typically ranges between INR 4.5 Lakhs to INR 5.5 Lakhs for the complete two-year full-time programme, covering academic modules, enterprise software training, and comprehensive on-campus placement services. Connect with our finance desk for the current-year fee structure and loan options.",
        },
      ].map((faq, i) => (
        <details key={i} style={{ background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 10, overflow: "hidden" }}>
          <summary style={{ padding: "1.25rem 1.5rem", fontSize: 15, fontWeight: 500, color: "#0f172a", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", listStyle: "none", gap: "1rem" }}>
            {faq.q}
            <span style={{ fontSize: 20, color: "#2563eb", flexShrink: 0, lineHeight: 1 }}>+</span>
          </summary>
          <div style={{ padding: "0 1.5rem 1.25rem", borderTop: "0.5px solid #e2e8f0" }}>
            <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.75, margin: "1rem 0 0" }}>{faq.a}</p>
          </div>
        </details>
      ))}
    </div>

  </div>
</section>
          













            {/* ── FOOTER CTA ── */}
            <section style={styles.footerCta}>
                <div style={{ maxWidth: "40rem", margin: "0 auto", padding: "0 1.5rem" }}>
                    <h2 style={styles.footerH2}>Shape Global Business Infrastructure</h2>
                    <p style={styles.footerSubtitle}>Seats for MBA SCM Pune 2026 are limited. Secure yours with a single step — our counselors handle the rest.</p>
                    <a href="#admissions" style={styles.footerBtn}>Start Your Application →</a>
                    <p style={styles.footerNote}>ISMR Pune · AICTE Approved · SPPU Affiliated · DTE Maharashtra Recognized</p>
                </div>
            </section>
        </div>
    );
}