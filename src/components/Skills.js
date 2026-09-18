import { FaReact, FaNodeJs, FaDatabase,  FaJs,FaPython,FaCss3Alt } from "react-icons/fa";
import {   SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      icon: <FaReact size={40} className="text-cyan-400" />,
      title: "React.js",
      desc: "Building dynamic, component-based user interfaces with modern hooks and state management.",
    },
    {
      icon: <FaNodeJs size={40} className="text-green-500" />,
      title: "Node.js",
      desc: "Creating fast and scalable backend services and REST APIs.",
    },
    {
      icon: <FaCss3Alt size={40} className="text-blue-500" />,
      title: "CSS",
      desc: "Styling responsive and visually appealing user interfaces.",
    },
    {
      icon: <FaDatabase size={40} className="text-blue-500" />,
      title: "Database",
      desc: "Designing, managing, and querying structured data efficiently using SQL databases.",
    },
    {
      icon: <FaPython size={40} className="text-yellow-400" />,
      title: "Python",
      desc: "Building scripts, automation, and data-driven applications with clean and efficient code.",
    },
    
    {
      icon: <FaJs size={40} className="text-yellow-400" />,
      title: "JavaScript",
      desc: "Writing modern ES6+ code for interactive web experiences.",
    },
    {
      icon: <SiTailwindcss size={40} className="text-sky-400" />,
      title: "Tailwind CSS",
      desc: "Creating responsive and modern UI designs with utility-first styling.",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-16"> Skills</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300"
            data-aos="zoom-in"
          >
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-white/60">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;


