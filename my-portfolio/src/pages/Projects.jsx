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
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-white text-3xl font-bold mb-8 text-center">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((p, index) => (
          <ProjectCard
            key={index}
            title={p.title}
            img={p.img}
            live={p.live}
            github={p.github}
          />
        ))}
      </div>
    </div>
  );
}
