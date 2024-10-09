import React from "react";
import BlurBackground from "./components/BlurBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Contacts from "./components/Contacts";

const App = () => {
  return (
    <>
      <div>
        <BlurBackground />
        <Navbar />
        <main
          className="antialiased overflow-y-hidden max-w-7xl mx-auto
        relative z-10"
        >
          <Navbar />
          <Hero />
          <Projects />
          <About />
          <Experience />
          <Contacts />
        </main>
      </div>
    </>
  );
};

export default App;
