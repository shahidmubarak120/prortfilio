import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-24 flex justify-center items-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl p-10 max-w-3xl w-full">

        <h2 className="text-3xl font-bold text-center mb-10">Education</h2>

        <div className="space-y-6">

          <div className="bg-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">Bachelor of Computer Applications (BCA)</h3>
            <p className="text-white/80">Acharya Institute of Graduate Studies</p>
            <p className="text-sm text-white/60">2023 – 2026</p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">Higher Secondary Education</h3>
            <p className="text-white/80">Suvarna Bharthi Junior College</p>
            <p className="text-sm text-white/60">2020 – 2022</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
