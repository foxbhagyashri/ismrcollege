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
import Marquee from "./component/Marquee";
import AboutAdmaUniversity from "./component/AboutAdmaUniversity";
import ProgramsSection from "./component/ProgramsSection";
import HowToApply from "./component/HowToApply";
import VideoSection from "./component/VideoSection";
import StudentLife from "./component/StudentLife";
import CounterSection from "./component/CounterSection";
import WhyChooseAdma from "./component/WhyChooseAdma";
import Testimonials from "./component/Testimonials";
import LatestNews from "./component/LatestNews";
import Placementmorque from "./component/Placementmorque";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// About Page Components
import Aboutinstutue from "./component/Pages/AboutPage/Aboutinstutue";
import Leadership from "./component/Pages/AboutPage/Leadership";
import Award from "./component/Pages/AboutPage/Award";
import Ismr from "./component/Pages/AboutPage/Ismr";
import Recognition from "./component/Pages/AboutPage/Recognition";
import Eligibilitycriteria from "./component/Addmissions/Eligibility-criteria";
import Howtoapply from "./component/Addmissions/Howtoapply";
import Educationloan from "./component/Addmissions/Educationloan";
import Disclaimer from "./component/Addmissions/Disclaimer";
import Refundpolicy from "./component/Addmissions/Refundpolicy";
import Feesstructure from "./component/Addmissions/Feesstructure";
import Admissioncontact from "./component/Addmissions/Admissioncontact";
// Contactus Page
import Contactus from "./component/Common/Contactus"

function App() {
  return (
    <Router>
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
              <AboutAdmaUniversity />
              <ProgramsSection />
              <HowToApply />
              <VideoSection />
              <Placementmorque />
              <StudentLife />
              <CounterSection />
              <WhyChooseAdma />
              <Testimonials />
              <LatestNews />

            </>
          }
        />

        {/* About Page Routes */}
        <Route path="/Aboutpage/Aboutinstutue" element={<Aboutinstutue />} />
        <Route path="/Aboutpage/Leadership" element={<Leadership />} />
        <Route path="/Aboutpage/Award" element={<Award />} />
        <Route path="/Aboutpage/Ismr" element={<Ismr />} />
        {/* <Route path="/Aboutpage/Recognition" element={<Recognition />} /> */}

        <Route path="/Addmissions/Eligibility-criteria" element={<Eligibilitycriteria />} />
        <Route path="/Addmissions/Howtoapply" element={<Howtoapply />} />
        <Route path="/Addmissions/Educationloan" element={<Educationloan />} />
        <Route path="/Addmissions/Disclaimer" element={<Disclaimer />} />
        <Route path="/Addmissions/Refundpolicy" element={<Refundpolicy />} />
        <Route path="/Addmissions/Feesstructure" element={<Feesstructure />} />
        <Route path="/Addmissions/Admissioncontact" element={<Admissioncontact />} />

        {/* Contact us Page */}
        <Route path="/Contactus" element={<Contactus />} />
      </Routes>
      <Footer />
      {/* <Contactus/> */}
    </Router>
  );
}

export default App;
