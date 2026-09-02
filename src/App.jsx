import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";

// Common Components
import Topbar from "./component/Topbar";
import Header from "./component/Header";
import Footer from "./component/Footer";

// Home Page Components
import Banner from "./component/Banner";
import Banner2 from "./component/Banner2";
import Marquee from "./component/Marquee";
import AboutAdmaUniversity from "./component/AboutAdmaUniversity";
import ProgramsSection from "./component/ProgramsSection";
import HowToApply from "./component/HowToApply";
import StudentLife from "./component/StudentLife";
import CounterSection from "./component/CounterSection";
import WhyChooseAdma from "./component/WhyChooseAdma";
import Testimonials from "./component/Testimonials";
import LatestNews from "./component/LatestNews";
import Placementmorque from "./component/PlacementMarquee";
import Faq from "./component/Faq";

// Slick Carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// About Page Components
import Aboutinstutue from "./component/pages/about-us/AboutUs";
import Leadership from "./component/pages/about-us/Leadership";
import Award from "./component/pages/about-us/AwardsAndRankings";
import Ismr from "./component/pages/about-us/WhyIsmr";
import Recognition from "./component/pages/about-us/Recognition";
import Eligibilitycriteria from "./component/pages/admissions/EligibilityCriteria";
import Howtoapply from "./component/pages/admissions/HowToApplyPage";
import Educationloan from "./component/pages/admissions/EducationLoan";
import Disclaimer from "./component/pages/admissions/AdmissionDisclaimer";
import Refundpolicy from "./component/pages/admissions/RefundPolicy";
import Feesstructure from "./component/pages/admissions/FeeStructure";
import Admissioncontact from "./component/pages/admissions/AdmissionContact";
import Chairman from "./component/pages/about-us/leadership-team/ChairmanMessage";
import Director from "./component/pages/about-us/leadership-team/DirectorMessage";
import Secretary from "./component/pages/about-us/leadership-team/SecretaryMessage";

// Placement
import Placementoverview from "./component/pages/placements/PlacementsOverview";
import Ourplacement from "./component/pages/placements/InternshipsAndPlacements";
import Corporate from "./component/pages/placements/CorporatePartners";
import PlacementRules from "./component/pages/placements/PlacementRules";
import PlacementProcess from "./component/pages/placements/PlacementProcess";
// import
// Studentcampus
import Studentcampus from "./component/pages/campus-life/StudentLifePage";
import StudentFacilities from "./component/pages/campus-life/StudentFacilities";

//Academics
import ProgramOfferedPage from "./component/pages/academics/ProgramsOffered";
import Courseduration from "./component/pages/academics/CourseDuration";
// newsletter
import Newsletter from "./component/pages/campus-life/CampusNewsletter";
// Contactus Page
import Contactus from "./component/pages/contact-us/ContactUs";
import FAQPage from "./component/pages/admissions/MoreFaqs";
import Sticky from "./component/Sticky";
import DisclaimerFeePayment from "./component/pages/admissions/FeeDisclaimer";
import Blogs from "./component/Blogs";
import ApplyMba from "./component/ApplyMba";
import ApplyBba from "./component/ApplyBbaBca";
import Treasure from "./component/pages/about-us/leadership-team/TreasurerMessage";
import Applicationform from "./component/pages/contact-us/ApplicationForm";
import FAQBba from "./component/pages/admissions/FaqBbaBca";
import Termsconditions from "./component/TermsConditions";
import MarketingAcrossGenerations from "./component/blogs/MarketingAcrossGenerations";
import FutureInterfaceOfMarketing from "./component/blogs/FutureInterfaceOfMarketing";
import PredictiveMarketingExplained from "./component/blogs/PredictiveMarketingExplained";
import Listofdocument from "./component/pages/admissions/RequiredDocuments";
import AdmissionNote from "./component/pages/notices/AdmissionNotice";
import ChatbotLoader from "./component/ChatbotLoader";
import OperationSupplyChainManagement from "./component/pages/programs/MbaOperationsSupplyChain"
import MBAMarketingManagement from "./component/pages/programs/MbaMarketingManagement"
import MBAFinanceManagement from "./component/pages/programs/MbaFinanceManagement"
import MBAAgribusinessManagement from "./component/pages/programs/MbaAgribusinessManagement"
import MBAPharmaCollegesInPune from "./component/pages/programs/MbaPharmaHealthcare"
import MBAHRCollegesInPune from "./component/pages/programs/MbaHrCollegeInPune";
import MbaProgramPage from "./component/pages/academics/MbaProgramPage";
import BBACourse from "./component/pages/programs/BbaProgrammeInPune";
import BCACourse from "./component/pages/programs/BcaProgrammeInPune";
import NaacPage from "./component/pages/naac/NaacPage";
import ScrollToTop from "./component/ScrollToTop";
import SEO from "./component/SEO";

function App() {
    return (
        <Router>
            <ScrollToTop />
            {/* <ChatbotLoader /> */}
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
                            <Placementmorque />
                            <StudentLife />
                            <WhyChooseAdma />
                        </>
                    }
                />

                {/* 1. About Us */}
                <Route path="/about-us" element={<Aboutinstutue />} />
                <Route path="/about-us/leadership-team" element={<Leadership />} />
                <Route path="/about-us/leadership-team/chairman-message" element={<Chairman />} />
                <Route path="/about-us/leadership-team/director-message" element={<Director />} />
                <Route path="/about-us/leadership-team/secretary-message" element={<Secretary />} />
                <Route path="/about-us/leadership-team/treasurer-message" element={<Treasure />} />
                <Route path="/about-us/why-ismr" element={<Ismr />} />
                <Route path="/about-us/awards-and-rankings" element={<Award />} />

                {/* 2. Admissions */}
                <Route path="/admissions/eligibility-criteria" element={<Eligibilitycriteria />} />
                <Route path="/admissions/how-to-apply" element={<Howtoapply />} />
                <Route path="/admissions/education-loan" element={<Educationloan />} />
                <Route path="/admissions/refund-policy" element={<Refundpolicy />} />
                <Route path="/admissions/contact" element={<Admissioncontact />} />
                <Route path="/admissions/disclaimer" element={<Disclaimer />} />
                <Route path="/admissions/fee-disclaimer" element={<DisclaimerFeePayment />} />
                <Route path="/admissions/fee-structure" element={<Feesstructure />} />
                <Route path="/admissions/required-documents" element={<Listofdocument />} />
                <Route path="/admissions/more-faqs" element={<FAQPage />} />
                <Route path="/admissions/faq-bba-bca" element={<FAQBba />} />

                {/* 3. Academics */}
                <Route path="/academics/programs-offered" element={<ProgramOfferedPage />} />
                <Route path="/academics/programs" element={<Courseduration />} />

                {/* 4. Placements */}
                <Route path="/placements" element={<Placementoverview />} />
                <Route path="/placements/rules-and-regulations" element={<PlacementRules />} />
                <Route path="/placements/process" element={<PlacementProcess />} />
                <Route path="/placements/internships-and-placements" element={<Ourplacement />} />
                <Route path="/placements/corporate-partners" element={<Corporate />} />

                {/* 5. Campus Life */}
                <Route path="/campus-life/student-life" element={<Studentcampus />} />
                <Route path="/campus-life/student-facilities" element={<StudentFacilities />} />
                <Route path="/campus-life/newsletter" element={<Newsletter />} />

                {/* 6. Programs / Courses */}
                <Route path="/programs/mba-in-marketing-management-in-pune" element={<MBAMarketingManagement />} />
                <Route path="/programs/mba-hr-college-in-pune" element={<MBAHRCollegesInPune />} />
                <Route path="/programs/mba-in-finance-management-in-pune" element={<MBAFinanceManagement />} />
                <Route path="/programs/mba-in-business-analytics-pune" element={<MbaProgramPage />} />
                <Route path="/programs/mba-in-pharma-healthcare-management-in-pune" element={<MBAPharmaCollegesInPune />} />
                <Route path="/programs/mba-in-operations-and-supply-chain-management-in-pune" element={<OperationSupplyChainManagement />} />
                <Route path="/programs/mba-in-agribusiness-management-pune" element={<MBAAgribusinessManagement />} />
                <Route path="/programs/bba-college-in-pune" element={<BBACourse />} />
                <Route path="/programs/bca-college-in-pune" element={<BCACourse />} />

                {/* 7. Contact Us, Forms & Legal */}
                <Route path="/contact-us" element={<Contactus />} />
                <Route path="/application-form" element={<Applicationform />} />
                <Route path="/apply-mba" element={<ApplyMba />} />
                <Route path="/apply-bba" element={<ApplyBba />} />
                <Route path="/terms-and-conditions" element={<Termsconditions />} />

                {/* 8. NAAC & Notices */}
                <Route path="/naac" element={<NaacPage />} />
                <Route path="/notices/admission-notice" element={<AdmissionNote />} />

                {/* 9. Blogs */}
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/marketing-across-generations" element={<MarketingAcrossGenerations />} />
                <Route path="/blogs/future-interface-of-marketing" element={<FutureInterfaceOfMarketing />} />
                <Route path="/blogs/predictive-marketing-explained" element={<PredictiveMarketingExplained />} />

                {/* Fallback 404 Handler */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
            <Sticky />
        </Router>
    );
}

export default App;
