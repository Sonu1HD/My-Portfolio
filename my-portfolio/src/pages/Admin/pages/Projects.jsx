import { useEffect, useState } from "react";
import AdminLayout from "../AdminLayout";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    img: "",
    live: "",
    github: "",
  });
  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("adminToken");

  // 🔥 Cloudinary Upload
  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", form.img);
    data.append("upload_preset", "portfolio_upload"); // your preset

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dgalreugs/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    return file.secure_url;
  };

  // fetch projects
  const fetchProjects = async () => {
    const res = await fetch(
      "https://my-portfolio-backend-a77b.onrender.com/admin/projects",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setProjects(await res.json());
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // 🔥 add / edit project
  const submitProject = async () => {
    let imageUrl = form.img;

    // if image is file → upload first
    if (form.img instanceof File) {
      imageUrl = await uploadImage();
    }

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
      body: JSON.stringify({
        ...form,
        img: imageUrl,
      }),
    });

    setForm({ title: "", img: "", live: "", github: "" });
    setEditId(null);
    fetchProjects();
  };

  // delete
  const deleteProject = async (id) => {
    await fetch(
      `https://my-portfolio-backend-a77b.onrender.com/admin/projects/${id}`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    fetchProjects();
  };

  const editProject = (p) => {
    setForm(p);
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
            onChange={(e) =>
              setForm({ ...form, [field]: e.target.value })
            }
            className="p-2 text-white bg-gray-700 rounded-2xl"
          />
        ))}

        {/* Image upload */}
        <input
          type="file"
          onChange={(e) =>
            setForm({ ...form, img: e.target.files[0] })
          }
          className="p-2 text-white bg-gray-700 rounded-2xl"
        />

        {/* Preview */}
        {form.img && (
          <img
            src={
              form.img instanceof File
                ? URL.createObjectURL(form.img)
                : form.img
            }
            className="h-20 rounded mt-2 object-cover"
          />
        )}
      </div>

      <button
        onClick={submitProject}
        className="px-4 py-2 bg-indigo-600 mb-6"
      >
        {editId ? "Update Project" : "Add Project"}
      </button>

      {/* LIST */}
      <ul className="space-y-2">
        {projects.map((p) => (
          <li
            key={p._id}
            className="bg-white/10 p-3 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <img
                src={p.img}
                className="h-12 w-12 object-cover rounded"
              />
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