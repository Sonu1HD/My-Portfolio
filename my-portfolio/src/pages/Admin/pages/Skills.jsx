import { useEffect, useState } from "react";
import AdminLayout from "../AdminLayout";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");

  const token = localStorage.getItem("adminToken");

  const fetchSkills = async () => {
    const res = await fetch("http://localhost:3000/admin/skills", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setSkills(await res.json());
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const addSkill = async () => {
    await fetch("http://localhost:3000/admin/skills", {
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
    await fetch(`http://localhost:3000/admin/skills/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchSkills();
  };

  return (
    <AdminLayout>
      <h1 className="text-xl mb-4">Manage Skills</h1>

      <input
        placeholder="Skill name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 text-white bg-gray-700 rounded-2xl mr-2"
      />
      <input
        placeholder="Icon path"
        value={img}
        onChange={(e) => setImg(e.target.value)}
        className="p-2 text-white bg-gray-700 rounded-2xl mr-2"
      />
      <button onClick={addSkill} className="px-4 py-2 bg-indigo-600">
        Add
      </button>

      <ul className="mt-6 space-y-2">
        {skills.map((s) => (
          <li key={s._id} className="bg-white/10 p-3 flex justify-between">
            {s.name}
            <button onClick={() => deleteSkill(s._id)}>❌</button>
          </li>
        ))}
      </ul>
    </AdminLayout>
  );
};

export default Skills;
