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

  const techOptions = ["HTML", "CSS", "JS", "React", "Node", "MongoDB", "Bootstrap"];
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
      <h1 className="text-xl mb-4">Manage Projects</h1>

      {/* FORM */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {["title", "live", "github"].map((field) => (
          <input
            key={field}
            placeholder={field}
            value={form[field]}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            className="p-2 text-white bg-gray-700 rounded-2xl"
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
                className={`px-3 py-1 rounded-md text-sm border transition ${form.tech.includes(tech)
                    ? "bg-indigo-600 text-white border-indigo-500"
                    : "bg-gray-700 text-gray-300 border-gray-600"
                  }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Image upload */}
        <input
          type="file"
          onChange={(e) => setForm({ ...form, img: e.target.files[0] })}
          className="p-2 text-white bg-gray-700 rounded-2xl"
        />

        {/* Preview */}
        {form.img && (
          <img
            src={form.img instanceof File ? URL.createObjectURL(form.img) : form.img}
            className="h-20 rounded mt-2 object-cover"
          />
        )}
      </div>

      <button onClick={submitProject} className="px-4 py-2 bg-indigo-600 mb-6">
        {editId ? "Update Project" : "Add Project"}
      </button>

      {/* LIST */}
      <ul className="space-y-2">
        {projects.map((p) => (
          <li key={p._id} className="bg-white/10 p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={p.img} className="h-12 w-12 object-cover rounded" />
              <span>{p.title}</span>
            </div>
            <div className="space-x-2">
              <button onClick={() => editProject(p)}>✏️</button>
              <button onClick={() => deleteProject(p._id)}>❌</button>
            </div>
          </li>
        ))}
      </ul>
    </AdminLayout>
  );
};

export default Projects;