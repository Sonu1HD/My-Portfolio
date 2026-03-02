import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animation
import ProjectCard from "../components/ProjectCard";
import Loading from "../components/Loading";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch projects data on component mount
  useEffect(() => {
    fetch("https://my-portfolio-backend-a77b.onrender.com/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false); // Set loading to false once data is fetched
      });
  }, []);

  return (
    <motion.section
      className="max-w-7xl mx-auto px-6 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-indigo-400 uppercase tracking-wider">Portfolio</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          My Projects
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-3">
          A collection of websites and UI projects I’ve built while learning
          and improving my front-end skills.
        </p>
      </div>
      <div className="flex justify-center">
        <p className="text-center text-2xl text-white p-2 hover:bg-gray-700 mb-3 font-bold bg-gray-600 rounded-2xl cursor-pointer"> <span className="text-orange-300 ">HTML</span> & <span className="text-indigo-400">Tailwind</span> Projects</p>
      </div>
      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 hover:cursor-pointer">
        {loading ? (
          <div className="col-span-3">
            <Loading />
          </div>
        ) : (
          projects.map((p, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <ProjectCard {...p} />
            </motion.div>
          ))
        )}
      </div>
    </motion.section>
  );
}