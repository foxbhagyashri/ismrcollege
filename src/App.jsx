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
// Placement
import Placementoverview from "./component/Pages/Placementpage/Placementoverview";
import Ourplacement from "./component/Pages/Placementpage/Ourplacement";
import Corporate from "./component/Pages/Placementpage/Corporate";
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
              <CounterSection />
              <Banner2 />
              <ProgramsSection />
              <AboutAdmaUniversity />
              <HowToApply />
              <Placementmorque />
              <StudentLife />
              <WhyChooseAdma />
              <Testimonials />
                 <Marquee />
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

        <Route
          path="/Addmissions/Eligibility-criteria"
          element={<Eligibilitycriteria />}
        />
        <Route path="/Addmissions/Howtoapply" element={<Howtoapply />} />
        <Route path="/Addmissions/Educationloan" element={<Educationloan />} />
        <Route path="/Addmissions/Disclaimer" element={<Disclaimer />} />
        <Route path="/Addmissions/Refundpolicy" element={<Refundpolicy />} />
        <Route path="/Addmissions/Feesstructure" element={<Feesstructure />} />
        <Route
          path="/Addmissions/Admissioncontact"
          element={<Admissioncontact />}
        />
        {/* Placement Page */}
        <Route
          path="/Placementpage/Placementoverview"
          element={<Placementoverview />}
        />
        <Route path="/Placementpage/Ourplacement" element={<Ourplacement />} />
        <Route path="/Placementpage/Corporate" element={<Corporate />} />

        {/* Student Life Page */}
        <Route path="/Life@campus/Studentcampus" element={<Studentcampus />} />
        <Route
          path="/Life@campus/StudentFacilities"
          element={<StudentFacilities />}
        />

        {/* Academics Page */}
        <Route path="/Academics/Academics" element={<Academics />} />
        <Route path="/Academics/Courseduration" element={<Courseduration />} />

        {/* Newsletter Page */}
        <Route path="/NewsPage/Newsletter" element={<Newsletter />} />

        {/* Contact us Page */}
        <Route path="/Contactus" element={<Contactus />} />

        {/* more faqs */}
        <Route path="/Addmissions/more-faqs" element={<FAQPage />} />

      </Routes>
         {/* <Faq /> */}
      <Footer />
      {/* <Contactus/> */}
    </Router>
  );
}

export default App;
