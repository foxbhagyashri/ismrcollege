import { useState } from 'react'
import './App.css'
import Topbar from './component/Topbar'
import "remixicon/fonts/remixicon.css";
import Header from './component/Header';
import Banner from './component/Banner';





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Topbar />
      <Header />
      <Banner/>
    </>
  )
}

export default App
