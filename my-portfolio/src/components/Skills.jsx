import { useEffect, useState } from "react";
import Section from "./Section"

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("http://my-portfolio-backend-a77b.onrender.com/skills")
    .then((res) => res.json())
    .then((data) => setSkills(data));
  }, []);
  return (
    <Section
      id="skills"
      title="My Skills"
      bg="bg-[radial-gradient(circle_at_top,_#1e1b4b,_#020617)]"
      compact
    >
      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            
            className="
              reveal
              group flex flex-col items-center justify-center
              bg-indigo-500/10 backdrop-blur-md
              border border-indigo-500/20
              rounded-xl p-5
              hover:bg-indigo-500/20
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            <div className="absolute inset-0 rounded-xl bg-indigo-500/20 blur-xl opacity-0 group-hover:opacity-100 transition"></div>
            <img
              src={skill.img}
              alt={skill.name}
              className="w-12 h-12 mb-3 group-hover:scale-110 transition"
            />
            <span className="text-sm font-semibold tracking-wide text-indigo-100">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      {/* PROGRESS / DECOR */}
      <div className="flex justify-center mt-12">
        <div className="w-24 h-0.5 bg-linear-to-r from-transparent via-indigo-400 to-transparent"></div>
      </div>
    </Section>
  )
}

export default Skills
