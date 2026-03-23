import React from 'react'
import { motion } from "framer-motion";
import { fadeUp } from '../animations/variants';

const ProjectCard = ({ title, img, live, github, tech = [] }) => {
  // console.log("TECH", tech);
  
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="group bg-linear-to-br from-gray-800/70 to-gray-900/60 
             border border-white/10 
             p-5 rounded-xl 
             transition-all duration-300 
             hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/20"
    >
      <div className="overflow-hidden rounded mb-4">
        <img
          src={img}
          loading="lazy"
          alt={title}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="text-white text-xl font-bold mb-3">{title}</h3>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1 rounded-md 
                       bg-white/10 text-white 
                       border border-white/10 
                       hover:bg-indigo-500/20 transition"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex space-x-3">
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-600 hover:bg-indigo-500 
                 text-white px-4 py-2 rounded-md text-sm transition"
        >
          Live Demo
        </a>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 hover:bg-white/20 
                 text-white px-4 py-2 rounded-md text-sm transition"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  )
}

export default ProjectCard
