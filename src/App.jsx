import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Skills from "./component/Skills";
import About from "./component/About";
import Project from "./component/Project";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Project />
    </div>
  );
};

export default App;
