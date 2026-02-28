import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";


export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
      fetch("http://my-portfolio-backend-a77b.onrender.com/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <p className="text-indigo-400 uppercase tracking-wider">
          Portfolio
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          My Projects
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-3">
          A collection of websites and UI projects I’ve built while learning
          and improving my front-end skills.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 hover:cursor-pointer">
        {projects.map((p, index) => (
          <ProjectCard
            key={index}
            {...p}
          />
        ))}
      </div>
    </section>
  );
}
