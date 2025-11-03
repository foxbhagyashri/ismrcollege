import { useState } from "react";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Topbar from "./component/Topbar";
import "remixicon/fonts/remixicon.css";
import Header from "./component/Header";
import Banner from "./component/Banner";
import Marquee from "./component/Marquee";
import AboutAdmaUniversity from "./component/AboutAdmaUniversity";
import ProgramsSection from "./component/ProgramsSection";

// About Page
import Aboutinstutue from "./component/Pages/AboutPage/Aboutinstutue";
import Leadership from "./component/Pages/AboutPage/Leadership"
import Award from "./component/Pages/AboutPage/Award";
import Ismr from "./component/Pages/AboutPage/Ismr";
import Recognition from "./component/Pages/AboutPage/Recognition";
function App() {
  return (
    <Router>
      <Topbar />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Marquee />
              <AboutAdmaUniversity />
              <ProgramsSection />
            </>
          }
        />

        {/* About page routes */}
        <Route path="/Aboutpage/Aboutinstutue" element={<Aboutinstutue />} />
        <Route path="/Aboutpage/Leadership" element={<Leadership/>}/>
        <Route path="/Aboutpage/Award" element={<Award/>}/>
        <Route path="/Aboutpage/Ismr" element={<Ismr/>}/>
        <Route path="/Aboutpage/Recognition" element={<Recognition/>}/>
      </Routes>
    </Router>

    // <Topbar />
    // <Header />
    // <Banner />
    // <Marquee />
    // <AboutAdmaUniversity />
    // <ProgramsSection />
  );
}

export default App;
