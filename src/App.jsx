import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Layout & Global Components
import Topbar from "./component/Topbar";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Sticky from "./component/Sticky";
import ScrollToTop from "./component/ScrollToTop";
import SEO from "./component/SEO";

// Home Page Sections
import Banner from "./component/Banner";
import Banner2 from "./component/Banner2";
import Marquee from "./component/Marquee";
import CounterSection from "./component/CounterSection";
import ProgramsSection from "./component/ProgramsSection";
import AboutAdmaUniversity from "./component/AboutAdmaUniversity";
import HowToApply from "./component/HowToApply";
import PlacementMarquee from "./component/PlacementMarquee";
import StudentLife from "./component/StudentLife";
import WhyChooseAdma from "./component/WhyChooseAdma";

// 1. About Us Pages
import AboutUs from "./component/pages/about-us/AboutUs";
import Leadership from "./component/pages/about-us/Leadership";
import ChairmanMessage from "./component/pages/about-us/leadership-team/ChairmanMessage";
import DirectorMessage from "./component/pages/about-us/leadership-team/DirectorMessage";
import SecretaryMessage from "./component/pages/about-us/leadership-team/SecretaryMessage";
import TreasurerMessage from "./component/pages/about-us/leadership-team/TreasurerMessage";
import WhyIsmr from "./component/pages/about-us/WhyIsmr";
import AwardsAndRankings from "./component/pages/about-us/AwardsAndRankings";

// 2. Admissions Pages
import EligibilityCriteria from "./component/pages/admissions/EligibilityCriteria";
import HowToApplyPage from "./component/pages/admissions/HowToApplyPage";
import EducationLoan from "./component/pages/admissions/EducationLoan";
import RefundPolicy from "./component/pages/admissions/RefundPolicy";
import AdmissionContact from "./component/pages/admissions/AdmissionContact";
import AdmissionDisclaimer from "./component/pages/admissions/AdmissionDisclaimer";
import FeeDisclaimer from "./component/pages/admissions/FeeDisclaimer";
import FeeStructure from "./component/pages/admissions/FeeStructure";
import RequiredDocuments from "./component/pages/admissions/RequiredDocuments";
import MoreFaqs from "./component/pages/admissions/MoreFaqs";
import FaqBbaBca from "./component/pages/admissions/FaqBbaBca";

// 3. Academics Pages
import ProgramsOffered from "./component/pages/academics/ProgramsOffered";
import CourseDuration from "./component/pages/academics/CourseDuration";
import MbaProgramPage from "./component/pages/academics/MbaProgramPage";

// 4. Placements Pages
import PlacementsOverview from "./component/pages/placements/PlacementsOverview";
import PlacementRules from "./component/pages/placements/PlacementRules";
import PlacementProcess from "./component/pages/placements/PlacementProcess";
import InternshipsAndPlacements from "./component/pages/placements/InternshipsAndPlacements";
import CorporatePartners from "./component/pages/placements/CorporatePartners";

// 5. Campus Life Pages
import StudentLifePage from "./component/pages/campus-life/StudentLifePage";
import StudentFacilities from "./component/pages/campus-life/StudentFacilities";
import CampusNewsletter from "./component/pages/campus-life/CampusNewsletter";

// 6. Programs / Courses Pages
import MbaMarketingManagement from "./component/pages/programs/MbaMarketingManagement";
import MbaHrCollegeInPune from "./component/pages/programs/MbaHrCollegeInPune";
import MbaFinanceManagement from "./component/pages/programs/MbaFinanceManagement";
import MbaPharmaHealthcare from "./component/pages/programs/MbaPharmaHealthcare";
import MbaOperationsSupplyChain from "./component/pages/programs/MbaOperationsSupplyChain";
import MbaAgribusinessManagement from "./component/pages/programs/MbaAgribusinessManagement";
import BbaProgrammeInPune from "./component/pages/programs/BbaProgrammeInPune";
import BcaProgrammeInPune from "./component/pages/programs/BcaProgrammeInPune";

// 7. Contact, Application & Legal Pages
import ContactUs from "./component/pages/contact-us/ContactUs";
import ApplicationForm from "./component/pages/contact-us/ApplicationForm";
import ApplyMba from "./component/ApplyMba";
import ApplyBbaBca from "./component/ApplyBbaBca";
import TermsConditions from "./component/TermsConditions";

// 8. NAAC & Notices
import NaacPage from "./component/pages/naac/NaacPage";
import AdmissionNotice from "./component/pages/notices/AdmissionNotice";

// 9. Blog Pages
import Blogs from "./component/Blogs";
import MarketingAcrossGenerations from "./component/blogs/MarketingAcrossGenerations";
import FutureInterfaceOfMarketing from "./component/blogs/FutureInterfaceOfMarketing";
import PredictiveMarketingExplained from "./component/blogs/PredictiveMarketingExplained";

// Automatic lowercase URL normalizer: redirects uppercase URLs to clean lowercase
function LowercaseRedirect() {
    const location = useLocation();
    if (location.pathname !== location.pathname.toLowerCase()) {
        return <Navigate to={location.pathname.toLowerCase() + location.search + location.hash} replace />;
    }
    return null;
}

// Legacy URLs mapped cleanly to their official SEO-friendly routes
const LEGACY_REDIRECTS = [
    // Old Course URLs
    { from: "/programs/mba-marketing-management-in-pune", to: "/programs/mba-in-marketing-management-in-pune" },
    { from: "/programs/mba-hr-management-in-pune", to: "/programs/mba-hr-college-in-pune" },
    { from: "/programs/mba-business-analytics", to: "/programs/mba-in-business-analytics-pune" },
    { from: "/programs/mba-in-operations-and-supply-chain-management-programme-in-pune", to: "/programs/mba-in-operations-and-supply-chain-management-in-pune" },
    { from: "/programs/mba-in-agribusiness-management-college-in-pune", to: "/programs/mba-in-agribusiness-management-pune" },

    // Old Section Aliases
    { from: "/reach-us", to: "/contact-us" },
    { from: "/contactus", to: "/contact-us" },
    { from: "/aboutus", to: "/about-us" },
    { from: "/applicationform", to: "/application-form" },
    { from: "/placements/placementoverview", to: "/placements" },
    { from: "/placementpage/placementoverview", to: "/placements" },
    { from: "/placementpage/placementprocess", to: "/placements/process" },
    { from: "/placementpage/rules-and-regulations", to: "/placements/rules-and-regulations" },
    { from: "/placementpage/our-internship-and-placement", to: "/placements/internships-and-placements" },
    { from: "/admissions/howtoapply", to: "/admissions/how-to-apply" },
    { from: "/admissions/disclaimerfeepayment", to: "/admissions/fee-disclaimer" },
    { from: "/admissions/faqbbabca", to: "/admissions/faq-bba-bca" },
    { from: "/notices/admissionnotice", to: "/notices/admission-notice" },
];

function App() {
    return (
        <Router>
            <ScrollToTop />
            <LowercaseRedirect />
            <Topbar />
            <Header />

            <Routes>
                {/* Home Page */}
                <Route
                    path="/"
                    element={
                        <>
                            <SEO
                                title="ISMR B-School Pune | Best MBA, BBA & BCA College in Pune"
                                description="ISMR B-School Pune is a premier management institute offering AICTE approved & SPPU affiliated MBA, BBA and BCA programs with 100% placement assistance."
                                canonical="https://ismrpune.edu.in/"
                            />
                            <Banner />
                            <Marquee />
                            <CounterSection />
                            <Banner2 />
                            <ProgramsSection />
                            <AboutAdmaUniversity />
                            <HowToApply />
                            <PlacementMarquee />
                            <StudentLife />
                            <WhyChooseAdma />
                        </>
                    }
                />

                {/* 1. About Us */}
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/about-us/leadership-team" element={<Leadership />} />
                <Route path="/about-us/leadership-team/chairman-message" element={<ChairmanMessage />} />
                <Route path="/about-us/leadership-team/director-message" element={<DirectorMessage />} />
                <Route path="/about-us/leadership-team/secretary-message" element={<SecretaryMessage />} />
                <Route path="/about-us/leadership-team/treasurer-message" element={<TreasurerMessage />} />
                <Route path="/about-us/why-ismr" element={<WhyIsmr />} />
                <Route path="/about-us/awards-and-rankings" element={<AwardsAndRankings />} />

                {/* 2. Admissions */}
                <Route path="/admissions/eligibility-criteria" element={<EligibilityCriteria />} />
                <Route path="/admissions/how-to-apply" element={<HowToApplyPage />} />
                <Route path="/admissions/education-loan" element={<EducationLoan />} />
                <Route path="/admissions/refund-policy" element={<RefundPolicy />} />
                <Route path="/admissions/contact" element={<AdmissionContact />} />
                <Route path="/admissions/disclaimer" element={<AdmissionDisclaimer />} />
                <Route path="/admissions/fee-disclaimer" element={<FeeDisclaimer />} />
                <Route path="/admissions/fee-structure" element={<FeeStructure />} />
                <Route path="/admissions/required-documents" element={<RequiredDocuments />} />
                <Route path="/admissions/more-faqs" element={<MoreFaqs />} />
                <Route path="/admissions/faq-bba-bca" element={<FaqBbaBca />} />

                {/* 3. Academics */}
                <Route path="/academics/programs-offered" element={<ProgramsOffered />} />
                <Route path="/academics/programs" element={<CourseDuration />} />

                {/* 4. Placements */}
                <Route path="/placements" element={<PlacementsOverview />} />
                <Route path="/placements/rules-and-regulations" element={<PlacementRules />} />
                <Route path="/placements/process" element={<PlacementProcess />} />
                <Route path="/placements/internships-and-placements" element={<InternshipsAndPlacements />} />
                <Route path="/placements/corporate-partners" element={<CorporatePartners />} />

                {/* 5. Campus Life */}
                <Route path="/campus-life/student-life" element={<StudentLifePage />} />
                <Route path="/campus-life/student-facilities" element={<StudentFacilities />} />
                <Route path="/campus-life/newsletter" element={<CampusNewsletter />} />

                {/* 6. Programs / Courses */}
                <Route path="/programs/mba-in-marketing-management-in-pune" element={<MbaMarketingManagement />} />
                <Route path="/programs/mba-hr-college-in-pune" element={<MbaHrCollegeInPune />} />
                <Route path="/programs/mba-in-finance-management-in-pune" element={<MbaFinanceManagement />} />
                <Route path="/programs/mba-in-business-analytics-pune" element={<MbaProgramPage />} />
                <Route path="/programs/mba-in-pharma-healthcare-management-in-pune" element={<MbaPharmaHealthcare />} />
                <Route path="/programs/mba-in-operations-and-supply-chain-management-in-pune" element={<MbaOperationsSupplyChain />} />
                <Route path="/programs/mba-in-agribusiness-management-pune" element={<MbaAgribusinessManagement />} />
                <Route path="/programs/bba-college-in-pune" element={<BbaProgrammeInPune />} />
                <Route path="/programs/bca-college-in-pune" element={<BcaProgrammeInPune />} />

                {/* 7. Contact Us, Forms & Legal */}
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/application-form" element={<ApplicationForm />} />
                <Route path="/apply-mba" element={<ApplyMba />} />
                <Route path="/apply-bba" element={<ApplyBbaBca />} />
                <Route path="/terms-and-conditions" element={<TermsConditions />} />

                {/* 8. NAAC & Notices */}
                <Route path="/naac" element={<NaacPage />} />
                <Route path="/notices/admission-notice" element={<AdmissionNotice />} />

                {/* 9. Blogs */}
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/marketing-across-generations" element={<MarketingAcrossGenerations />} />
                <Route path="/blogs/future-interface-of-marketing" element={<FutureInterfaceOfMarketing />} />
                <Route path="/blogs/predictive-marketing-explained" element={<PredictiveMarketingExplained />} />

                {/* 10. Legacy URL 301 Redirect Handlers */}
                {LEGACY_REDIRECTS.map(({ from, to }) => (
                    <Route key={from} path={from} element={<Navigate to={to} replace />} />
                ))}

                {/* 11. Fallback 404 Handler */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
            <Sticky />
        </Router>
    );
}

export default App;
