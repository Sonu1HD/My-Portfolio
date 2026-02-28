import React from 'react'

const About = () => {
  return (
    <div>
      <section className="min-h-screen bg-linear-to-r from-indigo-900 via-black to-indigo-900 text-white flex flex-col sm:flex-row-reverse items-center justify-center gap-14 px-10 py-20">
        {/* IMAGE CARD */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-indigo-500/40 blur-xl opacity-20 group-hover:opacity-40 transition duration-500 rounded-3xl"></div>
          <img
            src="/images/4839864.jpg"
            alt="about"
            className="relative w-[260px] rounded-3xl shadow-2xl shadow-indigo-900 group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        {/* TEXT BOX */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-12 max-w-lg shadow-xl hover:shadow-indigo-500/50 transition duration-500 transform hover:-translate-y-2">
          <h1 className="text-4xl text-indigo-500 font-extrabold uppercase tracking-[4px] mb-6 flex items-center gap-2">
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
      <section className="min-h-screen bg-linear-to-r from-indigo-900 via-black to-indigo-900 text-white flex items-center justify-center px-6 py-24">
        <div className="max-w-6xl w-full text-center space-y-6">
          <p className="text-indigo-400 text-lg uppercase tracking-wider">
            What I Can Offer
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold">
            My Services
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300">
            I am a passionate Full-Stack Developer from India.
            As a fresher, I focus on building clean, modern, and scalable web applications while continuously learning new technologies.
          </p>
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-10 hover:cursor-pointer">
            {/* Card 1 */}
            <div className="border border-indigo-500/30 rounded-xl p-8 bg-black/40 backdrop-blur-md hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 transition duration-300">
              <h2 className="text-xl font-semibold mb-3 text-indigo-400">
                Web Design & UI
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Creating responsive, modern, and user-friendly interfaces using
                React, Tailwind CSS, and clean design principles.
              </p>
            </div>
            {/* Card 2 */}
            <div className="border border-indigo-500/30 rounded-xl p-8 bg-black/40 backdrop-blur-md hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 transition duration-300">
              <h2 className="text-xl font-semibold mb-3 text-indigo-400">
                API Development
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Building and consuming REST APIs with Node.js and Express,
                handling authentication, validation, and clean data flow.
              </p>
            </div>
            {/* Card 3 */}
            <div className="border border-indigo-500/30 rounded-xl p-8 bg-black/40 backdrop-blur-md hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 transition duration-300">
              <h2 className="text-xl font-semibold mb-3 text-indigo-400">
                Database Management
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Designing and managing MongoDB databases with efficient schemas,
                CRUD operations, and secure data handling.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About