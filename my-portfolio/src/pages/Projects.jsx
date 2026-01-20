import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Delfood Website",
    img: "src/assets/Screenshot 2025-12-10 215252.png",
    live: "https://sonu1hd.github.io/My-Projects/Delfood",
    github: "https://github.com/sonu1hd/My-Projects/tree/main/Delfood",
  },
  {
    title: "Delfood Website",
    img: "src/assets/Screenshot 2025-12-10 215815.png",
    live: "https://sonu1hd.github.io/My-Projects/MyGYM",
    github: "https://github.com/sonu1hd/My-Projects/tree/main/MyGYM"
  },
  {
    title: "Other Portfolio Website",
    img: "src/assets/Screenshot 2025-12-10 220119.png",
    live: "https://sonu1hd.github.io/My-Projects/Tailwind4",
    github: "https://github.com/sonu1hd/My-Projects/tree/main/MyGYM"
  },
  {
    title: "BusTravel Website",
    img: "src/assets/Screenshot 2025-12-10 220512.png",
    live: "https://sonu1hd.github.io/My-Projects/bustravel",
    github: "https://github.com/sonu1hd/My-Projects/tree/main/MyGYM"
  },
  {
    title: "Royal Enfield Website",
    img: "src/assets/Screenshot 2025-12-10 220737.png",
    live: "https://sonu1hd.github.io/My-Projects/royal%20enfield",
    github: "https://github.com/sonu1hd/My-Projects/tree/main/MyGYM"
  },
  {
    title: "Koffe Website",
    img: "src/assets/Screenshot 2025-12-10 221011.png",
    live: "https://sonu1hd.github.io/My-Projects/Tailwind5",
    github: "https://github.com/sonu1hd/My-Projects/tree/main/MyGYM"
  },
  {
    title: "ELECTRIC XTRA Website",
    img: "src/assets/Screenshot 2025-12-10 221509.png",
    live: "https://sonu1hd.github.io/My-Projects/ELECTRIC%20XTRA",
    github: "https://github.com/sonu1hd/My-Projects/tree/main/MyGYM"
  },
  {
    title: "E-Learning Website",
    img: "src/assets/Screenshot 2025-12-10 221719.png",
    live: "https://sonu1hd.github.io/My-Projects/E-Learning",
    github: "https://github.com/sonu1hd/My-Projects/tree/main/MyGYM"
  },
  {
    title: "4Achievers-LocationPage Website",
    img: "src/assets/Screenshot 2025-12-10 222619.png",
    live: "https://sonu1hd.github.io/My-Projects/LocationPage",
    github: "https://github.com/sonu1hd/My-Projects/tree/main/MyGYM"
  },
  {
    title: "Sample-PortfolioPage Website",
    img: "src/assets/Screenshot 2025-12-10 222849.png",
    live: "https://sonu1hd.github.io/My-Projects/myportfolio",
    github: "https://github.com/sonu1hd/My-Projects/tree/main/MyGYM"
  }
];

export default function Projects() {
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
