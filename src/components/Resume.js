import React, { useState } from "react";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");

  const tabStyle =
    "px-4 py-2 rounded-full cursor-pointer transition font-semibold";

  const activeStyle = "bg-indigo-600 text-white shadow-lg";
  const inactiveStyle = "bg-white/10 text-white hover:bg-white/20";

  return (
    <section id="resume" className="py-24 flex justify-center items-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl p-10 text-white">

        <h2 className="text-3xl font-bold text-center mb-8">Interactive Resume</h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div
            onClick={() => setActiveTab("education")}
            className={`${tabStyle} ${activeTab === "education" ? activeStyle : inactiveStyle}`}
          >
            Education
          </div>
          <div
            onClick={() => setActiveTab("skills")}
            className={`${tabStyle} ${activeTab === "skills" ? activeStyle : inactiveStyle}`}
          >
            Skills
          </div>
          <div
            onClick={() => setActiveTab("certificates")}
            className={`${tabStyle} ${activeTab === "certificates" ? activeStyle : inactiveStyle}`}
          >
            Certificates
          </div>
          
        </div>

        {/* Content Box */}
        <div className="bg-white/10 p-6 rounded-xl border border-white/20 transition-all duration-500">

          {activeTab === "education" && (
            <div className="animate-fadeIn">
              <h3 className="text-xl font-bold mb-2">🎓 Education</h3>
              <p>Bachelor of Computer Applications (BCA)</p>
              <p>Strong foundation in programming and web technologies.</p>
            </div>
          )}

          {activeTab === "skills" && (
            <div className="animate-fadeIn">
              <h3 className="text-xl font-bold mb-2">💻 Technical Skills</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>React.js & Frontend Development</li>
                <li>JavaScript (ES6+)</li>
                <li>Python</li>
                <li>Nodejs</li>
                <li>SQL Databases</li>
                <li>Tailwind CSS UI Design</li>
              </ul>
            </div>
          )}

          {activeTab === "certificates" && (
            <div className="animate-fadeIn">
              <h3 className="text-xl font-bold mb-2">📜 Certificates</h3>
              <p>Introduction to Python Programming — RedHat</p>
            </div>
          )}

          

        </div>

        {/* Download Button */}
        <div className="text-center mt-10">
          <a
            href="/resume.pdf"
            download
            className="bg-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition transform hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;

