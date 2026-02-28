import { useEffect, useState } from "react";
import AdminLayout from "../AdminLayout";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ title: "", img: "", live: "", github: "" });
  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("adminToken");
 // fetch projects from DB list
  const fetchProjects = async () => {
    const res = await fetch("https://my-portfolio-backend-a77b.onrender.com/admin/projects", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setProjects(await res.json());
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // add and edit
  const submitProject = async () => {
    const url = editId
      ? `https://my-portfolio-backend-a77b.onrender.com/admin/projects/${editId}`
      : "https://my-portfolio-backend-a77b.onrender.com/admin/projects";

    const method = editId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });

    setForm({ title: "", img: "", live: "", github: "" });
    setEditId(null);
    fetchProjects();
  };

  // remove project from DB list
  const deleteProject = async (id) => {
    await fetch(`https://my-portfolio-backend-a77b.onrender.com/admin/projects/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchProjects();
  };

  const editProject = (p) => {
    setForm(p);
    setEditId(p._id);
  };

  return (
    <AdminLayout>
      <h1 className="text-xl mb-4">Manage Projects</h1>

      {/* Form */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {["title", "img", "live", "github"].map((field) => (
          <input
            key={field}
            placeholder={field}
            value={form[field]}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            className="p-2 text-white bg-gray-700 rounded-2xl"
          />
        ))}
      </div>

      <button
        onClick={submitProject}
        className="px-4 py-2 bg-indigo-600 mb-6"
      >
        {editId ? "Update Project" : "Add Project"}
      </button>

      {/* List */}
      <ul className="space-y-2">
        {projects.map((p) => (
          <li key={p._id} className="bg-white/10 p-3 flex justify-between">
            <span>{p.title}</span>
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
