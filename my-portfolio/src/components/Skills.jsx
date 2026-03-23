import { useEffect, useState } from "react";
import Section from "./Section"
import { motion } from "framer-motion";
import Loading from "./Loading";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   fetch("")
  //     .then((res) => res.json())
  //     .then((data) => setSkills(data));
  // }, []);

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
      bg="bg-[radial-gradient(circle_at_top,_#1e1b4b,_#020617)]"
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
        <div className="w-24 h-0.5 bg-linear-to-r from-transparent via-indigo-400 to-transparent"></div>
      </div>
    </Section>
  )
}

export default Skills
