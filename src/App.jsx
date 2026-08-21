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
import Placementmorque from "./component/Placementmorque";
import Faq from "./component/Faq";

// Slick Carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// About Page Components
import Aboutinstutue from "./component/Pages/about-us/about-us";
import Leadership from "./component/Pages/about-us/Leadership";
import Award from "./component/Pages/about-us/awards-and-rankings";
import Ismr from "./component/Pages/about-us/why-ismr";
import Recognition from "./component/Pages/about-us/Recognition";
import Eligibilitycriteria from "./component/Pages/admissions/eligibility-criteria";
import Howtoapply from "./component/Pages/admissions/how-to-apply";
import Educationloan from "./component/Pages/admissions/education-loan";
import Disclaimer from "./component/Pages/admissions/disclaimer";
import Refundpolicy from "./component/Pages/admissions/refund-policy";
import Feesstructure from "./component/Pages/admissions/fee-structure";
import Admissioncontact from "./component/Pages/admissions/contact";
import Chairman from "./component/Pages/about-us/leadership-team/chairman-message";
import Director from "./component/Pages/about-us/leadership-team/Director";
import Secretary from "./component/Pages/about-us/leadership-team/secretary-message";

// Placement
import Placementoverview from "./component/Pages/placements/placements";
import Ourplacement from "./component/Pages/placements/internships-and-placements";
import Corporate from "./component/Pages/placements/Corporate";
import PlacementRules from "./component/Pages/placements/rules-and-regulations";
import PlacementProcess from "./component/Pages/placements/process";
// import
// Studentcampus
import Studentcampus from "./component/Pages/campus-life/student-life";
import StudentFacilities from "./component/Pages/campus-life/StudentFacilities";

//Academics
import Academics from "./component/Pages/academics/programs-offered";
import Courseduration from "./component/Pages/academics/programs";
// newsletter
import Newsletter from "./component/Pages/campus-life/newsletter";
// Contactus Page
import Contactus from "./component/Pages/Contactus/contact-us";
import FAQPage from "./component/Pages/admissions/more-faqs";
import Sticky from "./component/sticky";
import DisclaimerFeePayment from "./component/Pages/admissions/fee-disclaimer";
import Blogs from "./component/Blogs";
import ApplyMba from "./component/ApplyMba";
import ApplyBba from "./component/ApplyBbaBca";
import Treasure from "./component/Pages/about-us/leadership-team/treasurer-message";
import Applicationform from "./component/Pages/Contactus/Applicationform";
import FAQBba from "./component/Pages/admissions/FaqBbaBca";
import Termsconditions from "./component/Termsconditions";
import MarketingAcrossGenerations from "./component/blogs/Marketing-Across-Generations";
import FutureInterfaceOfMarketing from "./component/blogs/Future-Interface-of-Marketing";
import PredictiveMarketingExplained from "./component/blogs/Predictive-Marketing-Explained";
import Listofdocument from "./component/Pages/admissions/required-documents";
import AdmissionNote from "./component/Pages/notices/Admissions";
import ChatbotLoader from "./component/ChatbotLoader";
import OperationSupplyChainManagement from "./component/Pages/Programs/mba-in-operations-and-supply-chain-management-in-pune"
import MBAMarketingManagement from "./component/Pages/Programs/mba-in-marketing-management-in-pune"
import MBAFinanceManagement from "./component/Pages/Programs/mba-in-finance-management-in-pune"
import MBAAgribusinessManagement from "./component/Pages/Programs/mba-in-agribusiness-management-pune"
import MBAPharmaCollegesInPune from "./component/Pages/Programs/mba-in-pharma-healthcare-management-in-pune"
import MBAHRCollegesInPune from "./component/Pages/Programs/mba-hr-college-in-pune"
import MbaProgramPage from "./component/Pages/academics/MBA-Program"
import BBACourse from "./component/Pages/Programs/BBA-Programme-in-Pune";
import BCACourse from "./component/Pages/Programs/BCA-Programme-inn-Pune";

function App() {
    return (
        <Router>
            {/* <ChatbotLoader /> */}
            <Topbar />
            <Header />

            <Routes>
                {/* Home Page */}
                <Route
                    path="/"
                    element={
                        <>
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
                    path="/about-us/about-us"
                    element={<Aboutinstutue />}
                />
                <Route
                    path="/about-us/Leadership"
                    element={<Leadership />}
                />
                <Route
                    path="/about-us/awards-and-rankings"
                    element={<Award />}
                />
                <Route
                    path="/about-us/why-ismr"
                    element={<Ismr />}
                />
                <Route
                    path="/about-us/leadership-team/Chairman"
                    element={<Chairman />}
                />
                <Route
                    path="/about-us/leadership-team/Director"
                    element={<Director />}
                />
                <Route
                    path="/about-us/leadership-team/Secretary"
                    element={<Secretary />}
                />
                <Route
                    path="/about-us/leadership-team/Treasure"
                    element={<Treasure />}
                />

                <Route
                    path="/admissions/eligibility-criteria"
                    element={<Eligibilitycriteria />}
                />
                <Route
                    path="/admissions/how-to-apply"
                    element={<Howtoapply />}
                />
                <Route
                    path="/admissions/education-loan"
                    element={<Educationloan />}
                />
                <Route
                    path="/admissions/disclaimer"
                    element={<Disclaimer />}
                />
                <Route
                    path="/admissions/refund-policy"
                    element={<Refundpolicy />}
                />
                <Route
                    path="/admissions/fee-structure"
                    element={<Feesstructure />}
                />
                <Route
                    path="/admissions/FaqBbaBca"
                    element={<FAQBba />}
                />
                <Route
                    path="/admissions/required-documents"
                    element={<Listofdocument />}
                />
                <Route
                    path="/admissions/contact"
                    element={<Admissioncontact />}
                />
                {/* Placement Page */}
                <Route
                    path="/placements/placements"
                    element={<Placementoverview />}
                />
                <Route
                    path="/placements/internships-and-placements"
                    element={<Ourplacement />}
                />
                <Route
                    path="/placements/Corporate"
                    element={<Corporate />}
                />

                {/* Student Life Page */}
                <Route
                    path="/campus-life/student-life"
                    element={<Studentcampus />}
                />
                <Route
                    path="/campus-life/student-facilities/"
                    element={<StudentFacilities />}
                />

                {/* Academics Page */}
                <Route
                    path="/Academics/programs-offered"
                    element={<Academics />}
                />
                <Route
                    path="/Academics/programs"
                    element={<Courseduration />}
                />

                <Route
                    path="/academics/MBA-Program"
                    element={<MbaProgramPage />}
                />

                {/* Newsletter Page */}
                <Route
                    path="/campus-life/newsletter"
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

                {/* more PlacementRules */}
                <Route
                    path="/placements/rules-and-regulations"
                    element={<PlacementRules />}
                />

                {/* more PlacementRules */}
                <Route
                    path="/placements/process"
                    element={<PlacementProcess />}
                />

                {/* more PlacementRules */}
                <Route
                    path="/admissions/fee-disclaimer"
                    element={<DisclaimerFeePayment />}
                />

                {/* more PlacementRules */}
                <Route
                    path="/Blogs"
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
                    path="/Termsconditions"
                    element={<Termsconditions />}
                />

                <Route
                    path="/blogs/Marketing-Across-Generations"
                    element={<MarketingAcrossGenerations />}
                />
                <Route
                    path="/blogs/Future-Interface-of-Marketing"
                    element={<FutureInterfaceOfMarketing />}
                />
                <Route
                    path="/blogs/Predictive-Marketing-Explained"
                    element={<PredictiveMarketingExplained />}
                />

                {/* more PlacementRules */}
                <Route
                    path="/notices/Admissions"
                    element={<AdmissionNote />}
                />

                <Route
                    path="/Programs/mba-in-operations-and-supply-chain-management-in-pune"
                    element={<OperationSupplyChainManagement />}
                />
                <Route
                    path="/Programs/mba-in-marketing-management-in-pune"
                    element={<MBAMarketingManagement />}
                />
                <Route
                    path="/Programs/mba-in-finance-management-in-pune"
                    element={<MBAFinanceManagement />}
                />
                <Route
                    path="/Programs/mba-in-agribusiness-management-pune"
                    element={<MBAAgribusinessManagement />}
                />
                <Route
                    path="/Programs/mba-in-pharma-healthcare-management-in-pune"
                    element={<MBAPharmaCollegesInPune />}
                />
                <Route
                    path="/Programs/mba-hr-college-in-pune"
                    element={<MBAHRCollegesInPune />}
                />

                <Route
                    path="/Programs/BBA-Programme-in-Pune"
                    element={<BBACourse />}
                />

                <Route
                    path="/Programs/BCA-Programme-inn-Pune"
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
