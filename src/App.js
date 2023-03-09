import './App.css';
import About from "./components/About/About"
import Portfolio from "./components/Portfolio/Portfolio"
import Contact from "./components/Contact/Contact"
import React, { useEffect, useState } from 'react';
import Resume from './components/Resume/Resume'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/loader';
import Home from "./components/Home/Home"
import {BrowserRouter as Router, Route,Routes, } from "react-router-dom";
import Footer from "./components/Footer"

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(()=>{
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer)
  })

  const background = {
    backgroundColor: "rgb(34, 34, 57)",
    color: "white"
  }


  return (
    <Router>
      <Loader load={load}/>
      <div className="App" id={load ? "no-scroll": "scroll"} style={background}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/React-Portfolio" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={< Resume/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
