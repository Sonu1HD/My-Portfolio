import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animation
import ProjectCard from "../components/ProjectCard";
import Loading from "../components/Loading";


export default function Projects() {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("projects");
    return saved ? JSON.parse(saved) : [];
  });

  const [loading, setLoading] = useState(projects.length === 0);

  // Fetch projects data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://my-portfolio-backend-a77b.onrender.com/projects");
        const data = await res.json();
        // console.log(projects);
        setProjects(data);
        localStorage.setItem("projects", JSON.stringify(data));
      } catch (err) {
        console.log("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("UPDATED PROJECTS:", projects);
  }, [projects]);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  return (
    <motion.section
      className="max-w-7xl mx-auto px-6 py-20"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
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
      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 hover:cursor-pointer">
        {loading && projects.length === 0 ? (
          <motion.div className="col-span-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Loading />
          </motion.div>
        ) : (
          projects.map((p, index) => (
            <motion.div
              key={index}
              variants={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <ProjectCard {...p} />
            </motion.div>
          ))
        )}
      </div>
    </motion.section>
  );
}