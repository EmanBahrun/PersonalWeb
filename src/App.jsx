import React from 'react';
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Education } from "./components/Education/Education";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Extra } from "./components/Extra/Extra";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Extra />
      <Contact />
    </div>
  );
}

export default App;
