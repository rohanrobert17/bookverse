import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./courses/Home";
import Courses from "./courses/Courses";
import Research from "./New/Research";
import Educational from "./New/Educational";
import Personality from "./New/Personality";
import Story from "./New/Story";
import About from "./home/About";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Scientific from "./Books/CS";
import EEE from "./Books/EEE";
import ME from "./Books/ME";
import MT from "./Books/MT";
import CE from "./Books/CE";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Course" element={<Courses />} />
      <Route path="/Research" element={<Research />} />
      <Route path="/Educational" element={<Educational />} />
      <Route path="/Personality" element={<Personality />} />
      <Route path="/Story" element={<Story />} />
      <Route path="/About" element={<About />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Research/Scientific" element={<Scientific />} />
      <Route path="/Research/EEE" element={<EEE/>} />
      <Route path="/Research/ME" element={<ME/>} />
      <Route path="/Research/MT" element={<MT/>} />
      <Route path="/Research/CE" element={<CE/>} />
    </Routes>
  );
}

export default App
