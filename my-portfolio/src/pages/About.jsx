import React from 'react'

const About = () => {
  return (
    <div>
      <section className="min-h-screen bg-linear-to-r from-indigo-900 via-black to-indigo-900 text-white flex flex-col sm:flex-row-reverse items-center justify-center gap-14 px-10 py-20">
        {/* IMAGE CARD */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-indigo-500/40 blur-xl opacity-20 group-hover:opacity-40 transition duration-500 rounded-3xl"></div>
          <img
            src="src/assets/4839864.jpg"
            alt="about"
            className="relative w-[260px] rounded-3xl shadow-2xl shadow-indigo-900 group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        {/* TEXT BOX */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-12 max-w-lg shadow-xl hover:shadow-indigo-500/50 transition duration-500 transform hover:-translate-y-2">
          <h1 className="text-4xl font-extrabold uppercase tracking-[4px] mb-6 flex items-center gap-2">
            About Me
          </h1>
          <p className="text-lg leading-relaxed text-gray-300">
            Hi! I'm a passionate Full Stack Developer skilled in building smooth,
            interactive, and beautiful web experiences. I love creating modern UI,
            solving problems, and turning ideas into real projects.
          </p>
          <p className="mt-4 text-lg text-gray-400">
            Always learning, improving, and excited to grow in the tech world 🚀✨
          </p>
        </div>
      </section>
    </div>
  )
}

export default About