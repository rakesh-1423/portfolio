import { useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Skill from "./components/Skill/Skill";
import Work from "./components/Work/Work";
import Blurblob from "./Blurblob";

function App() {
  return (
    <div className="bg-[#050414]">
      {/* This is use for the blurBlob place near above about */}
      <Blurblob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />

      {/*  This is for grid lines design on about above and just below navbar */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative pt-20 text-amber-50">
        <Navbar />
        <About />
        <Skill />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
