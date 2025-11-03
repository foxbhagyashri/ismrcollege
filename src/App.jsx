import { useState } from 'react'
import './App.css'
import Topbar from './component/Topbar'
import "remixicon/fonts/remixicon.css";
import Header from './component/Header';
import Banner from './component/Banner';
import Marquee from './component/Marquee';
import AboutAdmaUniversity from './component/AboutAdmaUniversity';
import ProgramsSection from "./component/ProgramsSection";
import HowToApply from './component/HowToApply';
import VideoSection from './component/VideoSection';
import StudentLife from './component/StudentLife';
import "bootstrap/dist/css/bootstrap.min.css";
import CounterSection from './component/CounterSection';
import WhyChooseAdma from './component/WhyChooseAdma';
import Testimonials from './component/Testimonials';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LatestNews from './component/LatestNews';
import Footer from './component/Footer';



function App() {

  return (
    <>
      <Topbar />
      <Header />
      <Banner />
      <Marquee />
      <AboutAdmaUniversity />
      <ProgramsSection />
      <HowToApply />
      <VideoSection />
      <StudentLife />
      <CounterSection />
      <WhyChooseAdma />
      <Testimonials />
      <LatestNews />
      <Footer />
    </>
  )
}

export default App
