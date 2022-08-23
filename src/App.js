// import './App.css';
import Navbar from "./components/Navbar"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

function App() {
  return (
    <div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <Navbar />
      </div>
      <About />
      {/* <Portfolio /> */}
      <Skills />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
