import React, { useState, useEffect } from "react";
import Preloader from "../src/components/other/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container } from "react-bootstrap";
import Particle from "./components/other/Particle";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* <Preloader load={load} /> */}
      {/* <Particle /> */}

      <div
        className="App z-0 font-newsreader font-medium text-xl antialiased bg-gradient-to-r from-[#010810] to-[#010810] m-0"
        id={load ? "no-scroll" : "scroll"}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
