import { useEffect, useState } from "react";
import AdminLayout from "../AdminLayout";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    img: "",
    live: "",
    github: "",
    tech: [],
  });
  const [editId, setEditId] = useState(null);

  const techOptions = ["HTML", "CSS", "JS", "Tailwind", "React", "Node", "MongoDB", "Bootstrap"];
  const token = localStorage.getItem("adminToken");

  // Upload image to Cloudinary
  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", form.img);
    data.append("upload_preset", "portfolio_upload");

    const res = await fetch("https://api.cloudinary.com/v1_1/dgalreugs/image/upload", {
      method: "POST",
      body: data,
    });
    const file = await res.json();
    return file.secure_url;
  };

  // Fetch projects from backend
  const fetchProjects = async () => {
    if (!token) return;
    try {
      const res = await fetch("https://my-portfolio-backend-a77b.onrender.com/admin/projects", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      console.error("Failed to fetch projects:", err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Add or edit project
  const submitProject = async () => {
    if (!token) return alert("Admin token missing!");

    let imageUrl = form.img;

    if (form.img instanceof File) {
      imageUrl = await uploadImage();
    }
    const currentTech = [...form.tech];

    // Build clean payload
    const payload = {
      title: form.title || "",
      img: imageUrl || "",
      live: form.live || "",
      github: form.github || "",
      tech: currentTech,
    };

    console.log("FINAL PAYLOAD SENT TO BACKEND:", payload);

    const url = editId
      ? `https://my-portfolio-backend-a77b.onrender.com/admin/projects/${editId}`
      : "https://my-portfolio-backend-a77b.onrender.com/admin/projects";

    const method = editId ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log("Saved Project:", data);

      setForm({ title: "", img: "", live: "", github: "", tech: [] });
      setEditId(null);
      fetchProjects();
    } catch (err) {
      console.error("Error saving project:", err);
    }
  };

  // Delete project
  const deleteProject = async (id) => {
    try {
      await fetch(`https://my-portfolio-backend-a77b.onrender.com/admin/projects/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchProjects();
    } catch (err) {
      console.error("Failed to delete project:", err);
    }
  };

  // Edit project
  const editProject = (p) => {
    setForm({
      title: p.title || "",
      img: p.img || "",
      live: p.live || "",
      github: p.github || "",
      // If tech doesn't exist in the DB object, default it to an empty array
      tech: Array.isArray(p.tech) ? [...p.tech] : [],
    });
    setEditId(p._id);
  };

  return (
  <AdminLayout>
    <div className="bg-linear-to-br from-gray-900 via-gray-800 to-black 
                min-h-screen p-6 text-white">

      <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl 
                  border border-white/10 rounded-2xl p-6 shadow-xl">
        
          <h1 className="text-2xl font-bold mb-6 tracking-wide 
               bg-linear-to-r from-indigo-400 to-purple-400 
               text-transparent bg-clip-text">
            🚀 Manage Projects
          </h1>

          {/* FORM */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {["title", "live", "github"].map((field) => (
              <input
                key={field}
                placeholder={field}
                value={form[field]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                className="p-3 bg-white/10 border border-white/10 
           rounded-xl focus:outline-none 
           focus:ring-2 focus:ring-indigo-500 
           text-white placeholder-gray-400"
              />
            ))}

            <div className="sm:col-span-2">
              <p className="text-sm mb-2 text-gray-300">Select Tech:</p>
              <div className="flex flex-wrap gap-2">
                {techOptions.map((tech) => (
                  <button
                    key={tech}
                    type="button"
                    onClick={() =>
                      setForm((prev) => {
                        const exists = prev.tech.includes(tech);
                        const updatedTech = exists ? prev.tech.filter((t) => t !== tech) : [...prev.tech, tech];
                        console.log("Updated Tech:", updatedTech);
                        return { ...prev, tech: updatedTech };
                      })
                    }
                    className={`px-3 py-1.5 rounded-full text-xs font-medium 
                    transition-all duration-200 border
                    ${form.tech.includes(tech)
                        ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 border-indigo-400"
                        : "bg-white/10 text-gray-300 border-white/10 hover:bg-white/20"
                      }`}
                  >
                    {tech}
                  </button>
                ))}
                <div className="mt-3 text-sm text-gray-400">
                  Selected:
                  <span className="text-indigo-400 ml-2">
                    {form.tech.join(", ") || "None"}
                  </span>
                </div>
              </div>
            </div>

            {/* Image upload */}
            <input
              type="file"
              onChange={(e) => setForm({ ...form, img: e.target.files[0] })}
              className="p-3 bg-white/10 border border-white/10 
           rounded-xl focus:outline-none 
           focus:ring-2 focus:ring-indigo-500 
           text-white placeholder-gray-400"
            />

            {/* Preview */}
            {form.img && (
              <div className="mt-2 flex items-center gap-3">
                <img
                  src={form.img instanceof File ? URL.createObjectURL(form.img) : form.img}
                  className="h-16 w-16 rounded-lg object-cover border border-white/10"
                />
                <span className="text-sm text-gray-400">Preview</span>
              </div>
            )}
          </div>

          <button
            onClick={submitProject}
            className="w-full py-3 rounded-xl font-medium 
             bg-linear-to-r from-indigo-500 to-purple-500 
             hover:from-indigo-400 hover:to-purple-400 
             transition shadow-lg shadow-indigo-500/30 mb-5"
          >
            {editId ? "Update Project" : "Add Project"}
          </button>

          {/* LIST */}
          <ul className="space-y-2">
            {projects.map((p) => (
              <li
                key={p._id}
                className="bg-white/5 border border-white/10 
             rounded-xl p-4 flex items-center justify-between 
             hover:bg-white/10 transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={p.img}
                    className="h-14 w-14 object-cover rounded-lg border border-white/10"
                  />

                  <div>
                    <p className="font-semibold">{p.title}</p>

                    <div className="flex gap-1 mt-1 flex-wrap">
                      {p.tech?.map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => editProject(p)}
                    className="px-3 py-1 text-sm bg-yellow-500/20 text-yellow-300 rounded hover:bg-yellow-500/30"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteProject(p._id)}
                    className="px-3 py-1 text-sm bg-red-500/20 text-red-300 rounded hover:bg-red-500/30"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
      </div>
    </div>
    </AdminLayout>
  );
};

export default Projects;