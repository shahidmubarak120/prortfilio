import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import AOS from "aos";
import "aos/dist/aos.css";
import { ReactTyped } from "react-typed";


import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import ParticlesBG from "./components/ParticlesBG";
import ChatBot from "./components/ChatBot";
import Education from "./components/Education";


function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // ✅ AOS Init
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // ✅ Scroll Progress Bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-white transition-colors duration-500">
      
      {/* 🔝 Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-indigo-500 z-[9999]"
        style={{ width: `${scrollProgress}%` }}
      />

      

      <Helmet>
  <title>Shahid Mubarak Portfolio</title>
  <meta name="description" content="Full Stack Developer Portfolio" />
 </Helmet>


      <Navbar />
      

      <section
  id="home"
  data-aos="fade-up"
  className="py-32 flex justify-center items-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
>
  <div className="backdrop-blur-lg bg-white/5 border border-white/10 shadow-2xl rounded-2xl p-14 text-center max-w-3xl">

    <h1 className="text-5xl font-bold mb-6">Shahid Mubarak</h1>

    <ReactTyped
      strings={[
        "Full Stack Developer",
        "React Developer",
        "Programmer",
      ]}
      typeSpeed={50}
      backSpeed={30}
      loop
      className="text-xl font-semibold text-white/80"
    />

    <p className="mt-6 text-white/60">
      Building modern, responsive and interactive web experiences.
    </p>

    <div className="flex justify-center gap-6 mt-8">
      <a
        href="#projects"
         className="border border-white/30 px-6 py-3 rounded-full hover:bg-white/10 transition"
      >
        View Projects
      </a>

      <a
        href="#contact"
        className="border border-white/30 px-6 py-3 rounded-full hover:bg-white/10 transition"
      >
        Contact Me
      </a>
    </div>

  </div>
</section>


      <section id="about" data-aos="fade-up"><About /></section>
      
      <section id="resume" data-aos="fade-right"><Resume /></section>
      <section id="projects" data-aos="fade-left"><Projects /></section>
      <section id="Education"data-aos="fade-up"><Education /></section>

      <section id="skills" data-aos="fade-right"><Skills /></section>
      <section id="contact" data-aos="zoom-in"><Contact /></section>

      {/* Background Effects */}
      <ParticlesBG />
      <ChatBot />
      
      
    
      

    </div>
    
    
  );
}

export default App;



