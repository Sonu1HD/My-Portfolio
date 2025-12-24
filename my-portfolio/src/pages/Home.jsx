import React from 'react'
import Section from '../components/Section'
import Skills from './Skills'

const Home = () => {
  return (
    <div>
      <section className='hero-sec flex-col- sm:flex justify-around items-center p-10 sm:m-20 m-10 bg-gray-800/50 rounded-2xl'>
        {/* Text Section */}
        <div className="text-sec sm:text-4xl text-3xl text-white font-bold space-y-5">
          <h2>Sonu Halder</h2>
          <h1 className='sm:text-5xl text-2xl'>Hello I Am A<br></br> Web Developer <span className='wave text-5xl'>👋</span> </h1>
          <a href="src/assets/Resume (1).pdf" download className='cv-btn text-2xl hover:cursor-pointer mt-3 w-fit pb-2'>
            <button className='bg-linear-to-r to-blue-600 bg-indigo-500 p-3 hover:border-b-2 hover:border-indigo-500 transition delay-220 duration-300 ease-in-out rounded-2xl shadow-2xl shadow-indigo-900'>Get My CV</button>
          </a>
        </div>
        {/* Image Section */}
        <div className="img-sec">
          <img className='w-2xl rounded-2xl mt-5 rotate-7 hover:cursor-pointer hover:rotate-0 transition delay-150 duration-300 ease-in-out'
            src="src/assets/full-stack-web-dev.jpg"
            alt="Hero-img" />
        </div>
      </section>
      {/* //About Section */}
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
      {/* //Skills Section */}
      <Skills />
      {/* <section className='min-h-screen bg-[url(src/assets/3293677.jpg)] relative'>
        <div className="text-sec py-5">
          <h2 className='text-4xl font-bold text-center mb-10 underline text-shadow-2xs text-shadow-amber-50 text-indigo-100'>My Skills</h2>
          <div className="skills-grid grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
            <div className="skill-item flex flex-col items-center bg-indigo-600/50 p-5 rounded-2xl shadow-2xl shadow-indigo-700 hover:shadow-indigo-500/50 transition duration-500 transform hover:-translate-y-2 hover:cursor-pointer">
              <img src="src/assets/icons8-html-5-100.png" alt="HTML5" className="w-16 h-16 mb-5" />
              <span className="text-white font-semibold">HTML5</span>
            </div>
            <div className="skill-item flex flex-col items-center bg-indigo-600/50 p-5 rounded-2xl shadow-2xl shadow-indigo-700 hover:shadow-indigo-500/50 transition duration-500 transform hover:-translate-y-2 hover:cursor-pointer">
              <img src="src/assets/icons8-css-logo-50.png" alt="CSS3" className="w-16 h-16 mb-5" />
              <span className="text-white font-semibold">CSS3</span>
            </div>
            <div className="skill-item flex flex-col items-center bg-indigo-600/50 p-5 rounded-2xl shadow-2xl shadow-indigo-700 hover:shadow-indigo-500/50 transition duration-500 transform hover:-translate-y-2 hover:cursor-pointer">
              <img src="src/assets/icons8-javascript-logo-50.png" alt="JavaScript" className="w-16 h-16 mb-5" />
              <span className="text-white font-semibold">JavaScript</span>
            </div>
            <div className="skill-item flex flex-col items-center bg-indigo-600/50 p-5 rounded-2xl shadow-2xl shadow-indigo-700 hover:shadow-indigo-500/50 transition duration-500 transform hover:-translate-y-2 hover:cursor-pointer">
              <img src="src/assets/icons8-react-50.png" alt="React" className="w-16 h-16 mb-5" />
              <span className="text-white font-semibold">React</span>
            </div>
            <div className="skill-item flex flex-col items-center bg-indigo-600/50 p-5 rounded-2xl shadow-2xl shadow-indigo-700 hover:shadow-indigo-500/50 transition duration-500 transform hover:-translate-y-2 hover:cursor-pointer">
              <img src="src/assets/icons8-node-js-50.png" alt="Node.js" className="w-16 h-16 mb-5" />
              <span className="text-white font-semibold">Node.js</span>
            </div>
            <div className="skill-item flex flex-col items-center bg-indigo-600/50 p-5 rounded-2xl shadow-2xl shadow-indigo-700 hover:shadow-indigo-500/50 transition duration-500 transform hover:-translate-y-2 hover:cursor-pointer">
              <img src="src/assets/icons8-express-js-64.png" alt="Express.js" className="w-16 h-16 mb-5" />
              <span className="text-white font-semibold">Express.js</span>
            </div>
            <div className="skill-item flex flex-col items-center bg-indigo-600/50 p-5 rounded-2xl shadow-2xl shadow-indigo-700 hover:shadow-indigo-500/50 transition duration-500 transform hover:-translate-y-2 hover:cursor-pointer">
              <img src="src/assets/icons8-mongo-db-50.png" alt="MongoDB" className="w-16 h-16 mb-5" />
              <span className="text-white font-semibold">MongoDB</span>
            </div>
            <div className="skill-item flex flex-col items-center bg-indigo-600/50 p-5 rounded-2xl shadow-2xl shadow-indigo-700 hover:shadow-indigo-500/50 transition duration-500 transform hover:-translate-y-2 hover:cursor-pointer">
              <img src="src/assets/icons8-github-logo-50.png" alt="Git" className="w-16 h-16 mb-5" />
              <span className="text-white font-semibold">GitHub</span>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="relative w-64 sm:w-80 md:w-96 h-7 bg-white rounded overflow-hidden mb-6">
            <div className="move absolute top-1/2 -translate-y-1/2 w-4 h-4 shadow-2xl shadow-red-600 bg-red-500 rounded-full"></div>
            <div className="fill absolute inset-0 animate-fill"></div>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default Home