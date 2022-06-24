import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Education />
      <Portfolio />
      <Contact />
    </>
  );
};

export default App;
