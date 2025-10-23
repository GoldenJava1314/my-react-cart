import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"

function App() {

  return (
    <Router>
      {/*導航列-位於最上方*/}
       <Navbar />

       

      {/*主要內容區-位於中間部分*/}
       <Home />

      {/*頁尾-位於最下方*/ }
       <Footer />

    </Router>
  )
}

export default App