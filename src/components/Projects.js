import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built using React and Tailwind CSS.",
      github: "#",
      demo: "#",
      details:
        "This project showcases my skills, resume, education, and contact details with modern UI, animations, and dark glass design.",
    },
    {
      title: "CRM System",
      desc: "Customer management system built using MERN stack.",
      github: "#",
      demo: "#",
      details:
        "Full-stack CRM system with authentication, lead management, dashboard analytics, and database integration.",
    },
    {
      title: "Daily News(clone)",
      desc: "A web application that displays the latest news articles in real time.",
      github: "#",
      demo: "#",
      details:
        "Built using React.js and News API with category-wise filtering and responsive design",
    },
  ];

  return (
    <section id="projects" className="py-24 flex justify-center items-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">

      <div className="w-full max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-white/80">{project.desc}</p>

              <div className="flex justify-center gap-6 mt-4 text-lg">
                <a
                  href={project.github}
                  className="hover:text-gray-300 transition"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.demo}
                  className="text-indigo-300 hover:text-indigo-400 transition"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>

              <button
                onClick={() => setSelectedProject(project)}
                className="mt-5 w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-gray-900 text-white p-8 rounded-xl max-w-lg relative border border-white/20">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-3 text-xl hover:text-red-400"
            >
              ✖
            </button>

            <h3 className="text-2xl font-bold mb-4">
              {selectedProject.title}
            </h3>
            <p className="text-white/80">{selectedProject.details}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;





