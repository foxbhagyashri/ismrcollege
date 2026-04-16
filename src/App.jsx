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
// import Placementmorque from "./component/Placementmorque";
import Faq from "./component/Faq";

// Slick Carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// About Page Components
import Aboutinstutue from "./component/Pages/AboutPage/Aboutinstutue";
import Leadership from "./component/Pages/AboutPage/Leadership";
import Award from "./component/Pages/AboutPage/Award";
import Ismr from "./component/Pages/AboutPage/Ismr";
import Recognition from "./component/Pages/AboutPage/Recognition";
import Eligibilitycriteria from "./component/Pages/Addmissions/Eligibility-criteria";
import Howtoapply from "./component/Pages/Addmissions/Howtoapply";
import Educationloan from "./component/Pages/Addmissions/Educationloan";
import Disclaimer from "./component/Pages/Addmissions/Disclaimer";
import Refundpolicy from "./component/Pages/Addmissions/Refundpolicy";
import Feesstructure from "./component/Pages/Addmissions/Feesstructure";
import Admissioncontact from "./component/Pages/Addmissions/Admissioncontact";
import Chairman from "./component/Pages/AboutPage/Chairman";
import Director from "./component/Pages/AboutPage/Director";
import Secretary from "./component/Pages/AboutPage/Secretary";

// Placement
import Placementoverview from "./component/Pages/Placementpage/Placementoverview";
import Ourplacement from "./component/Pages/Placementpage/Ourplacement";
import Corporate from "./component/Pages/Placementpage/Corporate";
import PlacementRules from "./component/Pages/Placementpage/PlacementRules";
import PlacementProcess from "./component/Pages/Placementpage/PlacementProcess";
// import
// Studentcampus
import Studentcampus from "./component/Pages/Life@compusPage/Studentcampus";
import StudentFacilities from "./component/Pages/Life@compusPage/StudentFacilities";

//Academics
import Academics from "./component/Pages/Academics/Academics";
import Courseduration from "./component/Pages/Academics/Courseduration";
// newsletter
import Newsletter from "./component/Pages/NewsPage/Newsletter";
// Contactus Page
import Contactus from "./component/Pages/Contactus/Contactus";
import FAQPage from "./component/Pages/Addmissions/more-faqs";
import Sticky from "./component/Sticky";
import DisclaimerFeePayment from "./component/Pages/Addmissions/DisclaimerFeesPayment";
import Blogs from "./component/Blogs";
import ApplyMba from "./component/ApplyMba";
import ApplyBba from "./component/ApplyBbaBca";
import Treasure from "./component/Pages/AboutPage/Treasure";
import Applicationform from "./component/Pages/Contactus/Applicationform";
import FAQBba from "./component/Pages/Addmissions/FaqBbaBca";
import Termsconditions from "./component/Termsconditions";
import MarketingAcrossGenerations from "./component/blogs/Marketing-Across-Generations";
import FutureInterfaceOfMarketing from "./component/blogs/Future-Interface-of-Marketing";
import PredictiveMarketingExplained from "./component/blogs/Predictive-Marketing-Explained";
import Listofdocument from "./component/Pages/Addmissions/Listofdocuments";
import AdmissionNote from "./component/Pages/notices/Admissions";
import ChatbotLoader from "./component/ChatbotLoader";

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
                            {/* <Placementmorque /> */}
                            <StudentLife />
                            <WhyChooseAdma />
                            <Testimonials />

                            {/* <LatestNews /> */}
                        </>
                    }
                />

                {/* About Page Routes */}
                <Route
                    path="/Aboutpage/Aboutinstutue"
                    element={<Aboutinstutue />}
                />
                <Route
                    path="/Aboutpage/Leadership"
                    element={<Leadership />}
                />
                <Route
                    path="/Aboutpage/Award"
                    element={<Award />}
                />
                <Route
                    path="/Aboutpage/Ismr"
                    element={<Ismr />}
                />
                <Route
                    path="/Aboutpage/Chairman"
                    element={<Chairman />}
                />
                <Route
                    path="/Aboutpage/Director"
                    element={<Director />}
                />
                <Route
                    path="/Aboutpage/Secretary"
                    element={<Secretary />}
                />
                <Route
                    path="/Aboutpage/Treasure"
                    element={<Treasure />}
                />

                <Route
                    path="/Addmissions/Eligibility-criteria"
                    element={<Eligibilitycriteria />}
                />
                <Route
                    path="/Addmissions/Howtoapply"
                    element={<Howtoapply />}
                />
                <Route
                    path="/Addmissions/Educationloan"
                    element={<Educationloan />}
                />
                <Route
                    path="/Addmissions/Disclaimer"
                    element={<Disclaimer />}
                />
                <Route
                    path="/Addmissions/Refundpolicy"
                    element={<Refundpolicy />}
                />
                <Route
                    path="/Addmissions/Feesstructure"
                    element={<Feesstructure />}
                />
                <Route
                    path="/Addmissions/FaqBbaBca"
                    element={<FAQBba />}
                />
                <Route
                    path="/Addmissions/Listofdocuments"
                    element={<Listofdocument />}
                />
                <Route
                    path="/Addmissions/Admissioncontact"
                    element={<Admissioncontact />}
                />
                {/* Placement Page */}
                <Route
                    path="/Placementpage/Placementoverview"
                    element={<Placementoverview />}
                />
                <Route
                    path="/Placementpage/Ourplacement"
                    element={<Ourplacement />}
                />
                <Route
                    path="/Placementpage/Corporate"
                    element={<Corporate />}
                />

                {/* Student Life Page */}
                <Route
                    path="/Life@campus/Studentcampus"
                    element={<Studentcampus />}
                />
                <Route
                    path="/Life@campus/StudentFacilities"
                    element={<StudentFacilities />}
                />

                {/* Academics Page */}
                <Route
                    path="/Academics/Academics"
                    element={<Academics />}
                />
                <Route
                    path="/Academics/Courseduration"
                    element={<Courseduration />}
                />

                {/* Newsletter Page */}
                <Route
                    path="/NewsPage/Newsletter"
                    element={<Newsletter />}
                />

                {/* Contact us Page */}
                <Route
                    path="/Contactus"
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
                    path="/Placementpage/PlacementRules"
                    element={<PlacementRules />}
                />

                {/* more PlacementRules */}
                <Route
                    path="/Placementpage/PlacementProcess"
                    element={<PlacementProcess />}
                />

                {/* more PlacementRules */}
                <Route
                    path="/Addmissions/DisclaimerFeePayment"
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
            </Routes>
            {/* <Faq /> */}
            <Footer />
            {/* <Contactus/> */}

            <Sticky />
        </Router>
    );
}

export default App;
