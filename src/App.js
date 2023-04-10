import React from "react";
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";


function App() {

  return (
    <Router>    
    <Navbar/>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="projects" element={<Projects />} />
        <Route exact path="resume" element={<Resume />} />
        <Route exact path="contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
