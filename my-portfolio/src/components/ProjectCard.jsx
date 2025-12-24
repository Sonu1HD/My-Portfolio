import React from 'react'

const ProjectCard = ({ title, img, live, github }) => {
  return (
    <div className="project-card bg-white/10 p-5 rounded-lg hover:scale-105 transition">
      <img src={img} alt={title} className="rounded mb-4" />

      <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
      <div className="flex space-x-4">
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm"
        >
          Live Demo
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded text-sm"
        >
          GitHub
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
