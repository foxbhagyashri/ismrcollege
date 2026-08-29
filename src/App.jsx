import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

                {/* About Page Routes */}
                <Route
                    path="/about-us"
                    element={<Aboutinstutue />}
                />
                <Route
                    path="/about-us/AboutUs"
                    element={<Aboutinstutue />}
                />
                <Route
                    path="/Aboutpage/Aboutinstutue"
                    element={<Aboutinstutue />}
                />
                <Route
                    path="/about-us/Leadership"
                    element={<Leadership />}
                />
                <Route
                    path="/about-us/leadership-team"
                    element={<Leadership />}
                />
                <Route
                    path="/about-us/AwardsAndRankings"
                    element={<Award />}
                />
                <Route
                    path="/about-us/WhyIsmr"
                    element={<Ismr />}
                />
                <Route
                    path="/about-us/leadership-team/Chairman"
                    element={<Chairman />}
                />
                <Route
                    path="/about-us/leadership-team/ChairmanMessage"
                    element={<Chairman />}
                />
                <Route
                    path="/about-us/leadership-team/DirectorMessage"
                    element={<Director />}
                />
                <Route
                    path="/about-us/leadership-team/Secretary"
                    element={<Secretary />}
                />
                <Route
                    path="/about-us/leadership-team/SecretaryMessage"
                    element={<Secretary />}
                />
                <Route
                    path="/about-us/leadership-team/Treasure"
                    element={<Treasure />}
                />
                <Route
                    path="/about-us/leadership-team/TreasurerMessage"
                    element={<Treasure />}
                />

                <Route
                    path="/admissions/EligibilityCriteria"
                    element={<Eligibilitycriteria />}
                />
                <Route
                    path="/admissions/HowToApplyPage"
                    element={<Howtoapply />}
                />
                <Route
                    path="/admissions/EducationLoan"
                    element={<Educationloan />}
                />
                <Route
                    path="/admissions/AdmissionDisclaimer"
                    element={<Disclaimer />}
                />
                <Route
                    path="/admissions/RefundPolicy"
                    element={<Refundpolicy />}
                />
                <Route
                    path="/admissions/FeeStructure"
                    element={<Feesstructure />}
                />
                <Route
                    path="/admissions/FaqBbaBca"
                    element={<FAQBba />}
                />
                <Route
                    path="/admissions/RequiredDocuments"
                    element={<Listofdocument />}
                />
                <Route
                    path="/admissions/AdmissionContact"
                    element={<Admissioncontact />}
                />
                {/* Placement Page */}
                <Route
                    path="/placements"
                    element={<Placementoverview />}
                />
                <Route
                    path="/placements/PlacementsOverview"
                    element={<Placementoverview />}
                />
                <Route
                    path="/placements/InternshipsAndPlacements"
                    element={<Ourplacement />}
                />
                <Route
                    path="/placements/CorporatePartners"
                    element={<Corporate />}
                />
                <Route
                    path="/placements/corporate"
                    element={<Corporate />}
                />

                {/* Student Life Page */}
                <Route
                    path="/campus-life/StudentLifePage"
                    element={<Studentcampus />}
                />
                <Route
                    path="/campus-life/student-facilities"
                    element={<StudentFacilities />}
                />
                <Route
                    path="/campus-life/student-facilities/"
                    element={<StudentFacilities />}
                />

                {/* Academics Page */}
                <Route
                    path="/academics/ProgramsOffered"
                    element={<ProgramOfferedPage />}
                />
                <Route
                    path="/Academics/programs-offered"
                    element={<ProgramOfferedPage />}
                />
                <Route
                    path="/academics/CourseDuration"
                    element={<Courseduration />}
                />
                <Route
                    path="/Academics/programs"
                    element={<Courseduration />}
                />

                <Route
                    path="/academics/MbaProgramPage"
                    element={<MbaProgramPage />}
                />

                {/* Newsletter Page */}
                <Route
                    path="/campus-life/CampusNewsletter"
                    element={<Newsletter />}
                />

                {/* Contact us Page */}
                <Route
                    path="/contact-us"
                    element={<Contactus />}
                />
                <Route
                    path="/Applicationform"
                    element={<Applicationform />}
                />

                {/* more faqs */}
                <Route
                    path="/Addmissions/more-faqs"
                    element={<FAQPage />}
                />
                <Route
                    path="/admissions/MoreFaqs"
                    element={<FAQPage />}
                />

                {/* more PlacementRules */}
                <Route
                    path="/placements/PlacementRules"
                    element={<PlacementRules />}
                />

                {/* more PlacementRules */}
                <Route
                    path="/placements/PlacementProcess"
                    element={<PlacementProcess />}
                />

                {/* more PlacementRules */}
                <Route
                    path="/admissions/FeeDisclaimer"
                    element={<DisclaimerFeePayment />}
                />

                {/* more PlacementRules */}
                <Route
                    path="/Blogs"
                    element={<Blogs />}
                />
                <Route
                    path="/blogs"
                    element={<Blogs />}
                />
                <Route
                    path="/ApplyMba"
                    element={<ApplyMba />}
                />
                <Route
                    path="/ApplyBba"
                    element={<ApplyBba />}
                />
                <Route
                    path="/TermsConditions"
                    element={<Termsconditions />}
                />
                <Route
                    path="/terms-and-conditions"
                    element={<Termsconditions />}
                />

                <Route
                    path="/blogs/MarketingAcrossGenerations"
                    element={<MarketingAcrossGenerations />}
                />
                <Route
                    path="/blogs/FutureInterfaceOfMarketing"
                    element={<FutureInterfaceOfMarketing />}
                />
                <Route
                    path="/blogs/PredictiveMarketingExplained"
                    element={<PredictiveMarketingExplained />}
                />

                {/* more PlacementRules */}
                <Route
                    path="/notices/AdmissionNotice"
                    element={<AdmissionNote />}
                />

                <Route
                    path="/programs/mba-in-operations-and-supply-chain-management-in-pune"
                    element={<OperationSupplyChainManagement />}
                />
                <Route
                    path="/programs/mba-in-marketing-management-in-pune"
                    element={<MBAMarketingManagement />}
                />
                <Route
                    path="/programs/mba-in-finance-management-in-pune"
                    element={<MBAFinanceManagement />}
                />
                <Route
                    path="/programs/mba-in-agribusiness-management-pune"
                    element={<MBAAgribusinessManagement />}
                />
                <Route
                    path="/programs/mba-in-pharma-healthcare-management-in-pune"
                    element={<MBAPharmaCollegesInPune />}
                />
                <Route
                    path="/programs/mba-hr-college-in-pune"
                    element={<MBAHRCollegesInPune />}
                />
                <Route
                    path="/programs/mba-in-business-analytics-pune"
                    element={<MbaProgramPage />}
                />

                <Route
                    path="/programs/BbaProgrammeInPune"
                    element={<BBACourse />}
                />

                <Route
                    path="/programs/BcaProgrammeInPune"
                    element={<BCACourse />}
                />



                {/* <Route
                    path="/blog/uses-of-ai-in-business-analytics"
                    element={<Navigate to="/programs/mba-in-business-analytics-pune" replace />}
                /> */}


            </Routes>
            {/* <Faq /> */}
            <Footer />
            {/* <Contactus/> */}

            <Sticky />
        </Router>
    );
}

export default App;
