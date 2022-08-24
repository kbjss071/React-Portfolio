import './App.css';
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import React, { useState } from 'react';
import Header from './components/Header';
import Resume from './components/Resume'
import Footer from './components/Footer'

function App() {
  const [currentTab, setCurrentTab] = useState("about");

  const renderTab = () => {
    switch (currentTab) {
      case "about":
        return (
          <div>
            <About />
            <Skills />
          </div>
        )
      case "portfolio":
        return <Portfolio/>
      case "contact":
        return <Contact />
      case "resume":
        return <Resume />
      default:
        return null;
    }
  }

  return (
    <div>
      <div>
        <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </div>
      <div>
        <main>{renderTab()}</main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
