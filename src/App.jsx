//import { useState } from 'react'

import "./assets/css/App.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {

  const isDev = true;

  return (
    <>
      <Header />
      <main id="home">
        <Hero />
        <About />
        <Work />
        <Skill />
        {isDev && <Experience />}
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
