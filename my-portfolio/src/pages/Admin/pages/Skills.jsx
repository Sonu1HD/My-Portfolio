import { useEffect, useState } from "react";
import AdminLayout from "../AdminLayout";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");

  const token = localStorage.getItem("adminToken");

  const fetchSkills = async () => {
    const res = await fetch("https://my-portfolio-backend-a77b.onrender.com/admin/skills", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setSkills(await res.json());
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const addSkill = async () => {
    await fetch("https://my-portfolio-backend-a77b.onrender.com/admin/skills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, img }),
    });
    setName("");
    setImg("");
    fetchSkills();
  };

  const deleteSkill = async (id) => {
    await fetch(`https://my-portfolio-backend-a77b.onrender.com/admin/skills/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchSkills();
  };

  return (
  <AdminLayout>
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white p-6">
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl 
                  border border-white/10 rounded-2xl p-6 shadow-xl">
        
          <h1 className="text-xl mb-4">Manage Skills</h1>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              placeholder="Skill name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 p-3 bg-white/10 border border-white/10 
               rounded-xl focus:outline-none focus:ring-2 
               focus:ring-indigo-500 text-white placeholder-gray-400"
            />

            <input
              placeholder="Icon URL"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              className="flex-1 p-3 bg-white/10 border border-white/10 
               rounded-xl focus:outline-none focus:ring-2 
               focus:ring-indigo-500 text-white placeholder-gray-400"
            />
            {img && (
              <div className="mb-4 flex items-center gap-2 text-sm text-gray-400">
                Preview:
                <img src={img} className="h-8 w-8 object-contain" />
              </div>
            )}

            <button
              onClick={addSkill}
              className="px-6 py-3 rounded-xl font-medium 
               bg-linear-to-r from-indigo-500 to-purple-500 
               hover:from-indigo-400 hover:to-purple-400 
               transition shadow-lg shadow-indigo-500/30"
            >
              Add
            </button>

          </div>

          {skills.length === 0 && (
            <p className="text-center text-gray-400 mt-6">
              No skills added yet 🚀
            </p>
          )}
          <ul className="space-y-3">
            {skills.map((s) => (
              <li
                key={s._id}
                className="flex items-center justify-between 
                 bg-white/5 border border-white/10 
                 rounded-xl p-4 hover:bg-white/10 transition"
              >
                <div className="flex items-center gap-3">
                  {s.img && (
                    <img
                      src={s.img}
                      className="h-10 w-10 object-contain rounded"
                    />
                  )}

                  <span className="font-medium">{s.name}</span>
                </div>

                <button
                  onClick={() => deleteSkill(s._id)}
                  className="px-3 py-1 text-sm rounded-lg 
                   bg-red-500/20 text-red-300 
                   hover:bg-red-500/30 transition"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
      </div>
    </div>
    </AdminLayout>
  );
};

export default Skills;
