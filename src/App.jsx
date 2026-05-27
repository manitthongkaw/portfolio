//import { useState } from 'react'

import "./assets/css/app.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {

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
  );

};