import { useEffect, useState } from "react";
import Section from "./Section"
import { motion } from "framer-motion";
import Loading from "./Loading";


const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [matrixData, setMatrixData] = useState([
    [0, 1, 0],
    [1, 0, 1],
    [0, 0, 1]
  ]);

  // useEffect(() => {
  //   fetch("")
  //     .then((res) => res.json())
  //     .then((data) => setSkills(data));
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMatrixData(() => [
        [Math.round(Math.random()), Math.round(Math.random()), Math.round(Math.random())],
        [Math.round(Math.random()), Math.round(Math.random()), Math.round(Math.random())],
        [Math.round(Math.random()), Math.round(Math.random()), Math.round(Math.random())]
      ])
    }, 150)

    return () => clearInterval(interval);

  }, []);

  useEffect(() => {
    const cached = localStorage.getItem("skills");

    if (cached) {
      setSkills(JSON.parse(cached));
      // setLoading(false); // 🔥 important → stop loader immediately
    }

    const fetchData = async () => {
      try {
        const res = await fetch("https://my-portfolio-backend-a77b.onrender.com/skills");
        const data = await res.json();

        setSkills(data);
        localStorage.setItem("skills", JSON.stringify(data));
      } catch (err) {
        console.log("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, []);
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
    <Section
      id="skills"
      title="My Skills"
      compact
    >
      {/* GRID */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={item}
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
              loading="lazy"
              className="w-12 h-12 mb-3 group-hover:scale-110 transition"
            />
            <span className="text-sm font-semibold tracking-wide text-indigo-100">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* PROGRESS / DECOR */}
      <div className="flex justify-center mt-12">
        <div className="flex gap-4 font-mono select-none">

          {/* Column 1 */}
          <div className="flex flex-col text-3xl font-bold text-emerald-400 [text-shadow:0_0_8px_#34d399]">
            <span className="animate-bounce [animation-delay:100ms] opacity-40">{matrixData[0][0]}</span>
            <span className="animate-bounce [animation-delay:300ms] opacity-70">{matrixData[0][1]}</span>
            <span className="animate-bounce [animation-delay:500ms] text-white [text-shadow:0_0_12px_#fff]">{matrixData[0][2]}</span>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col text-3xl font-bold text-emerald-400 [text-shadow:0_0_8px_#34d399]">
            <span className="animate-bounce [animation-delay:200ms] opacity-30">{matrixData[1][0]}</span>
            <span className="animate-bounce [animation-delay:400ms] opacity-80">{matrixData[1][1]}</span>
            <span className="animate-bounce [animation-delay:600ms] text-white [text-shadow:0_0_12px_#fff]">{matrixData[1][2]}</span>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col text-3xl font-bold text-emerald-400 [text-shadow:0_0_8px_#34d399]">
            <span className="animate-bounce [animation-delay:400ms] opacity-20">{matrixData[2][0]}</span>
            <span className="animate-bounce [animation-delay:100ms] opacity-60">{matrixData[2][1]}</span>
            <span className="animate-bounce [animation-delay:300ms] text-white [text-shadow:0_0_12px_#fff]">{matrixData[2][2]}</span>
          </div>

        </div>
      </div>
    </Section>
  )
}

export default Skills
