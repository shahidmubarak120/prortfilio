import React from "react";

const About = () => {
  return (
    <section id="resume" className="py-24 flex justify-center items-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <div className="max-w-4xl mx-auto text-center text-white bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl p-10">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          Hello! I'm <strong>Shahid Mubarak</strong>,a passionate Full Stack Web Developer 
        who loves building modern, responsive, and user-friendly web applications. 
        I specialize in React, JavaScript, and backend technologies, and I enjoy 
        turning ideas into real-world digital solutions. I'm always eager to learn 
        new technologies and improve my development skills.
        </p>
      </div>
    </section>
  );
};

export default About;

