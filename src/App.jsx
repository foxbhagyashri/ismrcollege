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
import MBAHRCollegesInPune from "./component/pages/programs/MbaHrCollegeInPune"
import MbaProgramPage from "./component/pages/academics/MbaProgramPage"
import BBACourse from "./component/pages/programs/BbaProgrammeInPune";
import BCACourse from "./component/pages/programs/BcaProgrammeInPune";
import NaacPage from "./component/Pages/naac/NaacPage";
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
                            {/* <Testimonials /> */}

                            {/* <LatestNews /> */}
                        </>
                    }
                />

                {/* 1. About Us Routes */}
                <Route path="/about-us" element={<Aboutinstutue />} />
                <Route path="/about-us/" element={<Aboutinstutue />} />
                <Route path="/about-us/AboutUs" element={<Navigate to="/about-us" replace />} />
                <Route path="/Aboutpage/Aboutinstutue" element={<Navigate to="/about-us" replace />} />

                {/* 2. Leadership Team */}
                <Route path="/about-us/leadership-team" element={<Leadership />} />
                <Route path="/about-us/leadership-team/" element={<Leadership />} />
                <Route path="/about-us/Leadership" element={<Navigate to="/about-us/leadership-team" replace />} />

                {/* 3. Chairman Message */}
                <Route path="/about-us/leadership-team/chairman-message" element={<Chairman />} />
                <Route path="/about-us/leadership-team/chairman-message/" element={<Chairman />} />
                <Route path="/about-us/leadership-team/Chairman" element={<Navigate to="/about-us/leadership-team/chairman-message" replace />} />
                <Route path="/about-us/leadership-team/ChairmanMessage" element={<Navigate to="/about-us/leadership-team/chairman-message" replace />} />

                {/* 4. Secretary Message */}
                <Route path="/about-us/leadership-team/secretary-message" element={<Secretary />} />
                <Route path="/about-us/leadership-team/secretary-message/" element={<Secretary />} />
                <Route path="/about-us/leadership-team/Secretary" element={<Navigate to="/about-us/leadership-team/secretary-message" replace />} />
                <Route path="/about-us/leadership-team/SecretaryMessage" element={<Navigate to="/about-us/leadership-team/secretary-message" replace />} />

                {/* 5. Treasurer Message */}
                <Route path="/about-us/leadership-team/treasurer-message" element={<Treasure />} />
                <Route path="/about-us/leadership-team/treasurer-message/" element={<Treasure />} />
                <Route path="/about-us/leadership-team/Treasure" element={<Navigate to="/about-us/leadership-team/treasurer-message" replace />} />
                <Route path="/about-us/leadership-team/TreasurerMessage" element={<Navigate to="/about-us/leadership-team/treasurer-message" replace />} />

                {/* 6. Why ISMR */}
                <Route path="/about-us/why-ismr" element={<Ismr />} />
                <Route path="/about-us/why-ismr/" element={<Ismr />} />
                <Route path="/about-us/WhyIsmr" element={<Navigate to="/about-us/why-ismr" replace />} />

                {/* 7. Awards & Rankings */}
                <Route path="/about-us/awards-and-rankings" element={<Award />} />
                <Route path="/about-us/awards-and-rankings/" element={<Award />} />
                <Route path="/about-us/AwardsAndRankings" element={<Navigate to="/about-us/awards-and-rankings" replace />} />

                {/* Director Message */}
                <Route path="/about-us/leadership-team/director-message" element={<Director />} />
                <Route path="/about-us/leadership-team/director-message/" element={<Director />} />
                <Route path="/about-us/leadership-team/DirectorMessage" element={<Navigate to="/about-us/leadership-team/director-message" replace />} />

                {/* 8. Eligibility Criteria */}
                <Route path="/admissions/eligibility-criteria" element={<Eligibilitycriteria />} />
                <Route path="/admissions/eligibility-criteria/" element={<Eligibilitycriteria />} />
                <Route path="/admissions/EligibilityCriteria" element={<Navigate to="/admissions/eligibility-criteria" replace />} />

                {/* 9. How To Apply */}
                <Route path="/admissions/how-to-apply" element={<Howtoapply />} />
                <Route path="/admissions/how-to-apply/" element={<Howtoapply />} />
                <Route path="/admissions/HowToApplyPage" element={<Navigate to="/admissions/how-to-apply" replace />} />

                {/* 10. Education Loan */}
                <Route path="/admissions/education-loan" element={<Educationloan />} />
                <Route path="/admissions/education-loan/" element={<Educationloan />} />
                <Route path="/admissions/EducationLoan" element={<Navigate to="/admissions/education-loan" replace />} />

                {/* 11. Refund Policy */}
                <Route path="/admissions/refund-policy" element={<Refundpolicy />} />
                <Route path="/admissions/refund-policy/" element={<Refundpolicy />} />
                <Route path="/admissions/RefundPolicy" element={<Navigate to="/admissions/refund-policy" replace />} />

                {/* 12. Admission Contact */}
                <Route path="/admissions/contact" element={<Admissioncontact />} />
                <Route path="/admissions/contact/" element={<Admissioncontact />} />
                <Route path="/admissions/AdmissionContact" element={<Navigate to="/admissions/contact" replace />} />

                {/* 13. Disclaimer for Admissions */}
                <Route path="/admissions/disclaimer" element={<Disclaimer />} />
                <Route path="/admissions/disclaimer/" element={<Disclaimer />} />
                <Route path="/admissions/AdmissionDisclaimer" element={<Navigate to="/admissions/disclaimer" replace />} />

                {/* 14. Fee Disclaimer */}
                <Route path="/admissions/fee-disclaimer" element={<DisclaimerFeePayment />} />
                <Route path="/admissions/fee-disclaimer/" element={<DisclaimerFeePayment />} />
                <Route path="/admissions/FeeDisclaimer" element={<Navigate to="/admissions/fee-disclaimer" replace />} />

                {/* 15. Fee Structure */}
                <Route path="/admissions/fee-structure" element={<Feesstructure />} />
                <Route path="/admissions/fee-structure/" element={<Feesstructure />} />
                <Route path="/admissions/FeeStructure" element={<Navigate to="/admissions/fee-structure" replace />} />

                {/* 16. Required Documents */}
                <Route path="/admissions/required-documents" element={<Listofdocument />} />
                <Route path="/admissions/required-documents/" element={<Listofdocument />} />
                <Route path="/admissions/RequiredDocuments" element={<Navigate to="/admissions/required-documents" replace />} />

                {/* Admission FAQs */}
                <Route path="/admissions/more-faqs" element={<FAQPage />} />
                <Route path="/admissions/more-faqs/" element={<FAQPage />} />
                <Route path="/Addmissions/more-faqs" element={<Navigate to="/admissions/more-faqs" replace />} />
                <Route path="/admissions/MoreFaqs" element={<Navigate to="/admissions/more-faqs" replace />} />

                <Route path="/admissions/faq-bba-bca" element={<FAQBba />} />
                <Route path="/admissions/faq-bba-bca/" element={<FAQBba />} />
                <Route path="/admissions/FaqBbaBca" element={<Navigate to="/admissions/faq-bba-bca" replace />} />
                <Route path="/Addmissions/FaqBbaBca" element={<Navigate to="/admissions/faq-bba-bca" replace />} />

                {/* 17. Academics Programs Offered */}
                <Route path="/academics/programs-offered" element={<ProgramOfferedPage />} />
                <Route path="/academics/programs-offered/" element={<ProgramOfferedPage />} />
                <Route path="/academics/ProgramsOffered" element={<Navigate to="/academics/programs-offered" replace />} />
                <Route path="/Academics/programs-offered" element={<Navigate to="/academics/programs-offered" replace />} />

                {/* 18. Academics Programs / Duration */}
                <Route path="/academics/programs" element={<Courseduration />} />
                <Route path="/academics/programs/" element={<Courseduration />} />
                <Route path="/academics/course-duration" element={<Courseduration />} />
                <Route path="/academics/CourseDuration" element={<Navigate to="/academics/programs" replace />} />
                <Route path="/Academics/programs" element={<Navigate to="/academics/programs" replace />} />

                {/* 19. Placements Overview */}
                <Route path="/placements" element={<Placementoverview />} />
                <Route path="/placements/" element={<Placementoverview />} />
                <Route path="/placements/PlacementsOverview" element={<Navigate to="/placements" replace />} />

                {/* 20. Placement Rules & Regulations */}
                <Route path="/placements/rules-and-regulations" element={<PlacementRules />} />
                <Route path="/placements/rules-and-regulations/" element={<PlacementRules />} />
                <Route path="/placements/PlacementRules" element={<Navigate to="/placements/rules-and-regulations" replace />} />

                {/* 21. Placement Process */}
                <Route path="/placements/process" element={<PlacementProcess />} />
                <Route path="/placements/process/" element={<PlacementProcess />} />
                <Route path="/placements/PlacementProcess" element={<Navigate to="/placements/process" replace />} />

                {/* 22. Our Internship & Placement */}
                <Route path="/placements/internships-and-placements" element={<Ourplacement />} />
                <Route path="/placements/internships-and-placements/" element={<Ourplacement />} />
                <Route path="/placements/InternshipsAndPlacements" element={<Navigate to="/placements/internships-and-placements" replace />} />

                <Route path="/placements/corporate-partners" element={<Corporate />} />
                <Route path="/placements/corporate-partners/" element={<Corporate />} />
                <Route path="/placements/CorporatePartners" element={<Navigate to="/placements/corporate-partners" replace />} />
                <Route path="/placements/corporate" element={<Navigate to="/placements/corporate-partners" replace />} />
                <Route path="/Placementpage/Corporate" element={<Navigate to="/placements/corporate-partners" replace />} />

                {/* 23. Student Campus Life */}
                <Route path="/campus-life/student-life" element={<Studentcampus />} />
                <Route path="/campus-life/student-life/" element={<Studentcampus />} />
                <Route path="/campus-life/StudentLifePage" element={<Navigate to="/campus-life/student-life" replace />} />

                {/* 24. Student Facilities */}
                <Route path="/campus-life/student-facilities" element={<StudentFacilities />} />
                <Route path="/campus-life/student-facilities/" element={<StudentFacilities />} />

                {/* 25. Newsletter */}
                <Route path="/campus-life/newsletter" element={<Newsletter />} />
                <Route path="/campus-life/newsletter/" element={<Newsletter />} />
                <Route path="/campus-life/CampusNewsletter" element={<Navigate to="/campus-life/newsletter" replace />} />

                {/* 26. Reach Us / Contact Us */}
                <Route path="/contact-us" element={<Contactus />} />
                <Route path="/contact-us/" element={<Contactus />} />

                {/* Forms & Legal */}
                <Route path="/application-form" element={<Applicationform />} />
                <Route path="/application-form/" element={<Applicationform />} />
                <Route path="/Applicationform" element={<Navigate to="/application-form" replace />} />

                <Route path="/apply-mba" element={<ApplyMba />} />
                <Route path="/apply-mba/" element={<ApplyMba />} />
                <Route path="/ApplyMba" element={<Navigate to="/apply-mba" replace />} />

                <Route path="/apply-bba" element={<ApplyBba />} />
                <Route path="/apply-bba/" element={<ApplyBba />} />
                <Route path="/ApplyBba" element={<Navigate to="/apply-bba" replace />} />

                <Route path="/terms-and-conditions" element={<Termsconditions />} />
                <Route path="/terms-and-conditions/" element={<Termsconditions />} />
                <Route path="/TermsConditions" element={<Navigate to="/terms-and-conditions" replace />} />

                {/* Blogs */}
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/" element={<Blogs />} />
                <Route path="/Blogs" element={<Navigate to="/blogs" replace />} />

                <Route path="/blogs/marketing-across-generations" element={<MarketingAcrossGenerations />} />
                <Route path="/blogs/marketing-across-generations/" element={<MarketingAcrossGenerations />} />
                <Route path="/blogs/MarketingAcrossGenerations" element={<Navigate to="/blogs/marketing-across-generations" replace />} />
                <Route path="/blogs/Marketing-Across-Generations" element={<Navigate to="/blogs/marketing-across-generations" replace />} />

                <Route path="/blogs/future-interface-of-marketing" element={<FutureInterfaceOfMarketing />} />
                <Route path="/blogs/future-interface-of-marketing/" element={<FutureInterfaceOfMarketing />} />
                <Route path="/blogs/FutureInterfaceOfMarketing" element={<Navigate to="/blogs/future-interface-of-marketing" replace />} />
                <Route path="/blogs/Future-Interface-of-Marketing" element={<Navigate to="/blogs/future-interface-of-marketing" replace />} />

                <Route path="/blogs/predictive-marketing-explained" element={<PredictiveMarketingExplained />} />
                <Route path="/blogs/predictive-marketing-explained/" element={<PredictiveMarketingExplained />} />
                <Route path="/blogs/PredictiveMarketingExplained" element={<Navigate to="/blogs/predictive-marketing-explained" replace />} />
                <Route path="/blogs/Predictive-Marketing-Explained" element={<Navigate to="/blogs/predictive-marketing-explained" replace />} />

                {/* Notices */}
                <Route path="/notices/admission-notice" element={<AdmissionNote />} />
                <Route path="/notices/AdmissionNotice" element={<Navigate to="/notices/admission-notice" replace />} />

                {/* Course Page 1: Marketing */}
                <Route path="/programs/mba-in-marketing-management-in-pune" element={<MBAMarketingManagement />} />
                <Route path="/programs/mba-in-marketing-management-in-pune/" element={<MBAMarketingManagement />} />
                <Route path="/Programs/MBA-Marketing-management-in-pune" element={<Navigate to="/programs/mba-in-marketing-management-in-pune" replace />} />
                <Route path="/programs/MBA-Marketing-management-in-pune" element={<Navigate to="/programs/mba-in-marketing-management-in-pune" replace />} />

                {/* Course Page 2: HR */}
                <Route path="/programs/mba-hr-college-in-pune" element={<MBAHRCollegesInPune />} />
                <Route path="/programs/mba-hr-college-in-pune/" element={<MBAHRCollegesInPune />} />
                <Route path="/Programs/MBA-HR-Management-in-Pune" element={<Navigate to="/programs/mba-hr-college-in-pune" replace />} />
                <Route path="/programs/MBA-HR-Management-in-Pune" element={<Navigate to="/programs/mba-hr-college-in-pune" replace />} />

                {/* Course Page 3: Finance */}
                <Route path="/programs/mba-in-finance-management-in-pune" element={<MBAFinanceManagement />} />
                <Route path="/programs/mba-in-finance-management-in-pune/" element={<MBAFinanceManagement />} />
                <Route path="/Programs/MBA-in-Finance-Management-in-Pune" element={<Navigate to="/programs/mba-in-finance-management-in-pune" replace />} />
                <Route path="/programs/MBA-in-Finance-Management-in-Pune" element={<Navigate to="/programs/mba-in-finance-management-in-pune" replace />} />

                {/* Course Page 4: Business Analytics */}
                <Route path="/programs/mba-in-business-analytics-pune" element={<MbaProgramPage />} />
                <Route path="/programs/mba-in-business-analytics-pune/" element={<MbaProgramPage />} />
                <Route path="/Programs/MBA-Business-Analytics" element={<Navigate to="/programs/mba-in-business-analytics-pune" replace />} />
                <Route path="/programs/MBA-Business-Analytics" element={<Navigate to="/programs/mba-in-business-analytics-pune" replace />} />
                <Route path="/academics/MbaProgramPage" element={<Navigate to="/programs/mba-in-business-analytics-pune" replace />} />
                <Route path="/Academics/MBA-Program" element={<Navigate to="/programs/mba-in-business-analytics-pune" replace />} />

                {/* Course Page 5: Pharma */}
                <Route path="/programs/mba-in-pharma-healthcare-management-in-pune" element={<MBAPharmaCollegesInPune />} />
                <Route path="/programs/mba-in-pharma-healthcare-management-in-pune/" element={<MBAPharmaCollegesInPune />} />
                <Route path="/Programs/MBA-in-Pharma-Healthcare-Management-in-Pune" element={<Navigate to="/programs/mba-in-pharma-healthcare-management-in-pune" replace />} />

                {/* Course Page 6: Operations & Supply Chain */}
                <Route path="/programs/mba-in-operations-and-supply-chain-management-in-pune" element={<OperationSupplyChainManagement />} />
                <Route path="/programs/mba-in-operations-and-supply-chain-management-in-pune/" element={<OperationSupplyChainManagement />} />
                <Route path="/Programs/MBA-in-Operations-and-Supply-Chain-Management-Programme-in-pune" element={<Navigate to="/programs/mba-in-operations-and-supply-chain-management-in-pune" replace />} />

                {/* Course Page 7: Agribusiness */}
                <Route path="/programs/mba-in-agribusiness-management-pune" element={<MBAAgribusinessManagement />} />
                <Route path="/programs/mba-in-agribusiness-management-pune/" element={<MBAAgribusinessManagement />} />
                <Route path="/Programs/MBA-in-Agribusiness-Management-College-in-Pune" element={<Navigate to="/programs/mba-in-agribusiness-management-pune" replace />} />

                {/* Course Page 8: BBA (Target: bba-college-in-pune) */}
                <Route path="/programs/bba-college-in-pune" element={<BBACourse />} />
                <Route path="/programs/bba-college-in-pune/" element={<BBACourse />} />
                <Route path="/programs/bba-programme-in-pune" element={<Navigate to="/programs/bba-college-in-pune" replace />} />
                <Route path="/programs/bba-programme-in-pune/" element={<Navigate to="/programs/bba-college-in-pune" replace />} />
                <Route path="/programs/BbaProgrammeInPune" element={<Navigate to="/programs/bba-college-in-pune" replace />} />
                <Route path="/programs/BBA-Programme-in-Pune" element={<Navigate to="/programs/bba-college-in-pune" replace />} />

                {/* Course Page 9: BCA (Target: bca-college-in-pune) */}
                <Route path="/programs/bca-college-in-pune" element={<BCACourse />} />
                <Route path="/programs/bca-college-in-pune/" element={<BCACourse />} />
                <Route path="/programs/bca-programme-in-pune" element={<Navigate to="/programs/bca-college-in-pune" replace />} />
                <Route path="/programs/bca-programme-in-pune/" element={<Navigate to="/programs/bca-college-in-pune" replace />} />
                <Route path="/programs/BcaProgrammeInPune" element={<Navigate to="/programs/bca-college-in-pune" replace />} />
                <Route path="/programs/BCA-Programme-in-Pune" element={<Navigate to="/programs/bca-college-in-pune" replace />} />
                <Route path="/programs/bca-programme-inn-pune" element={<Navigate to="/programs/bca-college-in-pune" replace />} />
                <Route path="/programs/BCA-Programme-inn-Pune" element={<Navigate to="/programs/bca-college-in-pune" replace />} />

                {/* NAAC Page */}
                <Route path="/naac" element={<NaacPage />} />
                <Route path="/naac/" element={<NaacPage />} />
                <Route path="/NAAC" element={<Navigate to="/naac" replace />} />
                <Route path="/NAAC/" element={<Navigate to="/naac" replace />} />

                {/* Fallback 404 handler */}
                <Route path="*" element={<Navigate to="/" replace />} />


            </Routes>
            {/* <Faq /> */}
            <Footer />
            {/* <Contactus/> */}

            <Sticky />
        </Router>
    );
}

export default App;
