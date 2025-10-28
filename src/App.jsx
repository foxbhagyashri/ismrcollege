import { useState } from 'react'
import './App.css'
import Topbar from './component/Topbar'
import "remixicon/fonts/remixicon.css";
import Header from './component/Header';
import Banner from './component/Banner';
import Marquee from './component/marquee';
import AboutAdmaUniversity from './component/AboutAdmaUniversity';
import ProgramsSection from "./component/ProgramsSection";



function App() {

  return (
    <>
      <Topbar />
      <Header />
      <Banner />
      <Marquee />
      <AboutAdmaUniversity />
      <ProgramsSection />
    </>
  )
}

export default App
